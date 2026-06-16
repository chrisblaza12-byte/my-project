(() => {
  const { pathname, search, hash } = window.location;
  const normalizedPath = pathname.replace(/(\.html)\/+$/i, '$1');
  if (normalizedPath !== pathname) {
    window.location.replace(`${normalizedPath}${search}${hash}`);
    return;
  }

  function rwf(value) {
    return `RWF ${Number(value || 0).toLocaleString('en-RW')}`;
  }

  function withTimeout(promise, ms = 15000) {
    return Promise.race([
      promise,
      new Promise((_, reject) => setTimeout(() => reject(new Error('Request timed out. Please retry.')), ms)),
    ]);
  }

  function orderMessage(orderNumber, payload) {
    const lines = payload.items
      .map((item) => `• ${item.name} x${item.qty} — ${rwf(item.priceRWF * item.qty)}`)
      .join('\n');

    return `NEW ORDER - Ituze Online Shopping\n\nOrder: ${orderNumber}\nCustomer: ${payload.customerName}\nPhone: ${payload.customerPhone}\nEmail: ${payload.customerEmail}\nLocation: ${payload.location}\n${payload.notes ? `Notes: ${payload.notes}\n` : ''}\nItems:\n${lines}\n\nTotal: ${rwf(payload.total)}`;
  }

  if (typeof Parse === 'undefined') {
    alert('Checkout cannot start because network libraries failed to load. Please refresh.');
    return;
  }

  Parse.initialize('TpiBmthg1BvbcbU9GjGUX74hHCz5Muoh5buAglTm', 'mwGP82zcPZsUDUdbVN7T6H70RFydSTGxDHQIejdY');
  Parse.serverURL = 'https://parseapi.back4app.com/';

  const cart = JSON.parse(localStorage.getItem('ituze_cart') || '[]');
  const user = Parse.User.current();

  if (!user) {
    window.location.href = 'auth.html';
    return;
  }

  if (!cart.length) {
    window.location.href = 'index.html';
    return;
  }

  const form = document.getElementById('checkoutForm');
  const placeBtn = document.getElementById('placeBtn');
  const orderItems = document.getElementById('orderItems');
  const orderTotal = document.getElementById('orderTotal');

  document.getElementById('customerName').value = `${user.get('firstName') || ''} ${user.get('lastName') || ''}`.trim();
  document.getElementById('customerPhone').value = user.get('phone') || '';
  document.getElementById('customerEmail').value = user.get('email') || '';

  orderItems.innerHTML = cart.map((item) => {
    const qty = Number(item.qty || 1);
    const lineTotal = Number(item.priceRWF || 0) * qty;

    return `
      <div class="item">
        <img src="${item.image || ''}" alt="${item.name || 'Product'}" loading="lazy" />
        <div>
          <strong>${item.name || 'Item'}</strong>
          <div style="font-size:13px;color:#6b7280">Qty: ${qty}</div>
          <div style="font-weight:800;color:#1d4ed8">${rwf(lineTotal)}</div>
        </div>
      </div>
    `;
  }).join('');

  const getTotal = () => cart.reduce((sum, item) => sum + Number(item.priceRWF || 0) * Number(item.qty || 1), 0);
  orderTotal.textContent = rwf(getTotal());

  let submitting = false;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (submitting) return;

    const customerName = document.getElementById('customerName').value.trim();
    const customerPhone = document.getElementById('customerPhone').value.trim();
    const customerEmail = document.getElementById('customerEmail').value.trim();
    const district = document.getElementById('customerDistrict').value.trim();
    const exactLocation = document.getElementById('customerLocation').value.trim();
    const notes = document.getElementById('orderNotes').value.trim();

    if (customerName.length < 2) return alert('Please enter your full name.');
    if (customerPhone.length < 9) return alert('Please enter a valid phone number.');
    if (!customerEmail.includes('@')) return alert('Please enter a valid email address.');
    if (!district || !exactLocation) return alert('Please enter full delivery location.');

    const payload = {
      customerName,
      customerPhone,
      customerEmail,
      location: `${district} - ${exactLocation}`,
      notes,
      items: cart.map((item) => ({
        id: item.id,
        name: item.name,
        qty: Number(item.qty || 1),
        priceRWF: Number(item.priceRWF || 0),
      })),
      total: getTotal(),
    };

    try {
      submitting = true;
      placeBtn.disabled = true;
      placeBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Placing order...';

      const response = await withTimeout(Parse.Cloud.run('placeOrder', payload));
      const orderNumber = response?.orderNumber || `ITZ-${Date.now().toString().slice(-6)}`;

      const msg = orderMessage(orderNumber, payload);
      const waUrl = `https://wa.me/250786540493?text=${encodeURIComponent(msg)}`;
      const mailUrl = `mailto:ndayisabapatrick75@gmail.com?subject=${encodeURIComponent(`New Order ${orderNumber}`)}&body=${encodeURIComponent(msg)}`;

      localStorage.removeItem('ituze_cart');
      placeBtn.innerHTML = '<i class="fas fa-check"></i> Order placed';
      alert(`Order ${orderNumber} placed successfully.`);

      window.open(waUrl, '_blank', 'noopener,noreferrer');
      window.open(mailUrl, '_blank', 'noopener,noreferrer');
      window.location.href = 'index.html';
    } catch (error) {
      console.error('placeOrder failed', error);
      const reason = error?.message || 'Could not place order. Please try again.';
      alert(reason);
      submitting = false;
      placeBtn.disabled = false;
      placeBtn.innerHTML = '<i class="fas fa-lock"></i> Place Order';
    }
  });
})();
