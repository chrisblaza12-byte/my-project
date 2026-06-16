// ââ SDK Init âââââââââââââââââââââââââââââââââââââââââââââââââââ
(() => {
  const { pathname, search, hash } = window.location;
  const normalizedPath = pathname.replace(/(\.html)\/+$/i, '$1');
  if (normalizedPath !== pathname) {
    window.location.replace(`${normalizedPath}${search}${hash}`);
  }
})();

const hasBackendSDK = typeof window.Parse !== 'undefined';
if (hasBackendSDK) {
  Parse.initialize("TpiBmthg1BvbcbU9GjGUX74hHCz5Muoh5buAglTm", "mwGP82zcPZsUDUdbVN7T6H70RFydSTGxDHQIejdY");
  Parse.serverURL = "https://parseapi.back4app.com/";
}

// ââ Config ââââââââââââââââââââââââââââââââââââââââââââââââââââââ
const ADMIN_WHATSAPP = "+250786540493";
const ADMIN_EMAIL    = "ndayisabapatrick75@gmail.com";

// ââ Helpers âââââââââââââââââââââââââââââââââââââââââââââââââââââ
const rwf   = (v) => `RWF ${Number(v || 0).toLocaleString("en-RW")}`;
const toRwf = (usd) => Math.round(Number(usd) * 1300);
// Unsplash CDN â no hotlink block, freely embeddable
const FALLBACK = "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80";
const escapeHtml = (text = "") => String(text)
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;")
  .replace(/'/g, "&#39;");

// ââ Products â images from Unsplash (freely embeddable, matched to product) ââ
let PRODUCTS = [
  // ââ Laptops ââ
  { id:1,  name:"MacBook Pro M3",
    category:"Laptops",    priceRWF:toRwf(1299), origRWF:toRwf(1599), discount:19, rating:5, reviews:248, badge:"BESTSELLER", tag:"Best",
    image:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80" },
  { id:2,  name:"Dell XPS 15 OLED",
    category:"Laptops",    priceRWF:toRwf(1099), origRWF:toRwf(1399), discount:21, rating:4, reviews:186, badge:"HOT",        tag:"Hot",
    image:"https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80" },
  { id:3,  name:"Lenovo ThinkPad X1",
    category:"Laptops",    priceRWF:toRwf(899),  origRWF:toRwf(1199), discount:25, rating:4, reviews:143, badge:"SALE",       tag:"Sale",
    image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80" },
  { id:4,  name:"HP Spectre x360",
    category:"Laptops",    priceRWF:toRwf(1199), origRWF:toRwf(1499), discount:20, rating:5, reviews:97,  badge:"NEW",        tag:"New",
    image:"https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=600&q=80" },

  // ââ Smartphones ââ
  { id:5,  name:"iPhone 15 Pro Max",
    category:"Smartphones",priceRWF:toRwf(1199), origRWF:toRwf(1299), discount:8,  rating:5, reviews:512, badge:"BESTSELLER", tag:"Best",
    image:"https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&q=80" },
  { id:6,  name:"Samsung Galaxy S24 Ultra",
    category:"Smartphones",priceRWF:toRwf(999),  origRWF:toRwf(1199), discount:17, rating:5, reviews:387, badge:"HOT",        tag:"Hot",
    image:"https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&q=80" },
  { id:7,  name:"Google Pixel 8 Pro",
    category:"Smartphones",priceRWF:toRwf(799),  origRWF:toRwf(999),  discount:20, rating:4, reviews:224, badge:"SALE",       tag:"Sale",
    image:"https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&q=80" },
  { id:8,  name:"OnePlus 12 Pro",
    category:"Smartphones",priceRWF:toRwf(549),  origRWF:toRwf(699),  discount:21, rating:4, reviews:165, badge:"NEW",        tag:"New",
    image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80" },

  // ââ Gaming ââ
  { id:9,  name:"PlayStation 5 Console",
    category:"Gaming",     priceRWF:toRwf(499),  origRWF:toRwf(599),  discount:17, rating:5, reviews:892, badge:"BESTSELLER", tag:"Best",
    image:"https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=600&q=80" },
  { id:10, name:"Xbox Series X",
    category:"Gaming",     priceRWF:toRwf(449),  origRWF:toRwf(549),  discount:18, rating:5, reviews:634, badge:"HOT",        tag:"Hot",
    image:"https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=600&q=80" },
  { id:11, name:"Razer Gaming Headset",
    category:"Gaming",     priceRWF:toRwf(149),  origRWF:toRwf(199),  discount:25, rating:4, reviews:445, badge:"SALE",       tag:"Sale",
    image:"https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600&q=80" },
  { id:12, name:"Mechanical Keyboard RGB",
    category:"Gaming",     priceRWF:toRwf(89),   origRWF:toRwf(129),  discount:31, rating:4, reviews:328, badge:"NEW",        tag:"New",
    image:"https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=600&q=80" },

  // ââ Fashion ââ
  { id:13, name:"Designer Leather Jacket",
    category:"Fashion",    priceRWF:toRwf(249),  origRWF:toRwf(399),  discount:38, rating:4, reviews:156, badge:"SALE",       tag:"Sale",
    image:"https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80" },
  { id:14, name:"Premium Running Shoes",
    category:"Fashion",    priceRWF:toRwf(129),  origRWF:toRwf(189),  discount:32, rating:5, reviews:287, badge:"HOT",        tag:"Hot",
    image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80" },
  { id:15, name:"Classic Denim Jeans",
    category:"Fashion",    priceRWF:toRwf(79),   origRWF:toRwf(119),  discount:34, rating:4, reviews:398, badge:"BESTSELLER", tag:"Best",
    image:"https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=600&q=80" },
  { id:16, name:"Summer Floral Dress",
    category:"Fashion",    priceRWF:toRwf(59),   origRWF:toRwf(89),   discount:34, rating:4, reviews:203, badge:"NEW",        tag:"New",
    image:"https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80" },

  // ââ Watches ââ
  { id:17, name:"Apple Watch Ultra 2",
    category:"Watches",    priceRWF:toRwf(799),  origRWF:toRwf(999),  discount:20, rating:5, reviews:341, badge:"BESTSELLER", tag:"Best",
    image:"https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&q=80" },
  { id:18, name:"Samsung Galaxy Watch 6",
    category:"Watches",    priceRWF:toRwf(329),  origRWF:toRwf(429),  discount:23, rating:4, reviews:218, badge:"HOT",        tag:"Hot",
    image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80" },
  { id:19, name:"Garmin Fenix 7 Pro",
    category:"Watches",    priceRWF:toRwf(699),  origRWF:toRwf(849),  discount:18, rating:5, reviews:127, badge:"SALE",       tag:"Sale",
    image:"https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&q=80" },
  { id:20, name:"Fossil Gen 6 Smartwatch",
    category:"Watches",    priceRWF:toRwf(249),  origRWF:toRwf(329),  discount:24, rating:4, reviews:189, badge:"NEW",        tag:"New",
    image:"https://images.unsplash.com/photo-1557935728-e6d1eaabe558?w=600&q=80" },

  // ââ Smart Home ââ
  { id:21, name:"Amazon Echo Show 15",
    category:"Smart Home", priceRWF:toRwf(249),  origRWF:toRwf(329),  discount:24, rating:4, reviews:456, badge:"HOT",        tag:"Hot",
    image:"https://images.unsplash.com/photo-1512446816042-444d641267d4?w=600&q=80" },
  { id:22, name:"Google Nest Hub Max",
    category:"Smart Home", priceRWF:toRwf(199),  origRWF:toRwf(269),  discount:26, rating:4, reviews:312, badge:"SALE",       tag:"Sale",
    image:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" },
  { id:23, name:"Philips Hue Starter Kit",
    category:"Smart Home", priceRWF:toRwf(149),  origRWF:toRwf(199),  discount:25, rating:5, reviews:287, badge:"BESTSELLER", tag:"Best",
    image:"https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80" },
  { id:24, name:"Ring Video Doorbell Pro",
    category:"Smart Home", priceRWF:toRwf(199),  origRWF:toRwf(249),  discount:20, rating:4, reviews:534, badge:"NEW",        tag:"New",
    image:"https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80" },

  // ââ Accessories ââ
  { id:25, name:"Sony WH-1000XM5",
    category:"Accessories", priceRWF:toRwf(349), origRWF:toRwf(449),  discount:22, rating:5, reviews:672, badge:"BESTSELLER", tag:"Best",
    image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80" },
  { id:26, name:"Apple AirPods Pro 2nd",
    category:"Accessories", priceRWF:toRwf(249), origRWF:toRwf(299),  discount:17, rating:5, reviews:891, badge:"HOT",        tag:"Hot",
    image:"https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=600&q=80" },
  { id:27, name:"iPad Pro 12.9\" M2",
    category:"Accessories", priceRWF:toRwf(1099),origRWF:toRwf(1299), discount:15, rating:5, reviews:248, badge:"SALE",       tag:"Sale",
    image:"https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&q=80" },
  { id:28, name:"USB-C 100W GaN Charger",
    category:"Accessories", priceRWF:toRwf(49),  origRWF:toRwf(79),   discount:38, rating:4, reviews:1243,badge:"NEW",        tag:"New",
    image:"https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=600&q=80" },
];

const PRODUCT_IMAGE_BY_NAME = Object.fromEntries(
  PRODUCTS.map((p) => [p.name.toLowerCase(), p.image])
);

const CATEGORY_IMAGE_POOL = {
  Laptops: [
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80",
    "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80",
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80",
    "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=600&q=80",
  ],
  Smartphones: [
    "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&q=80",
    "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&q=80",
    "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&q=80",
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80",
  ],
  Gaming: [
    "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=600&q=80",
    "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=600&q=80",
    "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600&q=80",
    "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=600&q=80",
  ],
  Fashion: [
    "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80",
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
    "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=600&q=80",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80",
  ],
  Watches: [
    "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&q=80",
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
    "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&q=80",
    "https://images.unsplash.com/photo-1557935728-e6d1eaabe558?w=600&q=80",
  ],
  "Smart Home": [
    "https://images.unsplash.com/photo-1512446816042-444d641267d4?w=600&q=80",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80",
    "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80",
  ],
  Accessories: [
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
    "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=600&q=80",
    "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&q=80",
    "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=600&q=80",
  ],
};

function hashText(text = "") {
  let hash = 0;
  for (let i = 0; i < text.length; i++) hash = (hash * 31 + text.charCodeAt(i)) >>> 0;
  return hash;
}

function currentUserSafe() {
  if (!hasBackendSDK) return null;
  try {
    return Parse.User.current();
  } catch (_) {
    return null;
  }
}

function resolveProductImage(product, duplicatedImageSet = new Set()) {
  const nameKey = (product?.name || "").trim().toLowerCase();
  const category = product?.category || "Accessories";
  const directImage = (product?.image || "").trim();

  if (directImage && !duplicatedImageSet.has(directImage)) return directImage;
  if (PRODUCT_IMAGE_BY_NAME[nameKey]) return PRODUCT_IMAGE_BY_NAME[nameKey];

  const pool = CATEGORY_IMAGE_POOL[category] || CATEGORY_IMAGE_POOL.Accessories;
  const idx = hashText(nameKey || category) % pool.length;
  return pool[idx] || FALLBACK;
}

// ââ State âââââââââââââââââââââââââââââââââââââââââââââââââââââââ
let cart = JSON.parse(localStorage.getItem('ituze_cart') || '[]');
let currentFilter = 'All';
let currentSlide  = 0;
let slideTimer;

function saveCart() { localStorage.setItem('ituze_cart', JSON.stringify(cart)); }

function showToast(msg, type = '') {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.className = 'toast show ' + type;
  setTimeout(() => { t.className = 'toast'; }, 2800);
}

function renderClientInstantMessage(message) {
  const existing = document.getElementById('clientInstantMessage');
  if (existing) existing.remove();
  if (!message?.text || !message?.objectId) return;

  const dismissedKey = localStorage.getItem('ituze_client_message_dismissed');
  if (dismissedKey === message.objectId) return;

  const box = document.createElement('div');
  box.id = 'clientInstantMessage';
  box.style.cssText = [
    'position:fixed',
    'left:16px',
    'right:16px',
    'bottom:16px',
    'z-index:2200',
    'background:#0f172a',
    'color:#fff',
    'border:1px solid rgba(255,255,255,.12)',
    'border-radius:12px',
    'padding:12px 44px 12px 14px',
    'box-shadow:0 14px 32px rgba(0,0,0,.35)',
    'font-size:14px',
    'font-weight:700',
  ].join(';');

  box.innerHTML = `<i class="fas fa-bell" style="color:#60a5fa;margin-right:8px"></i>${message.text}`;

  const closeBtn = document.createElement('button');
  closeBtn.type = 'button';
  closeBtn.innerHTML = '<i class="fas fa-times"></i>';
  closeBtn.style.cssText = 'position:absolute;right:10px;top:8px;background:none;border:none;color:#cbd5e1;font-size:14px;cursor:pointer';
  closeBtn.onclick = () => {
    localStorage.setItem('ituze_client_message_dismissed', message.objectId);
    box.remove();
  };

  box.appendChild(closeBtn);
  document.body.appendChild(box);
}

async function loadClientInstantMessage() {
  if (!hasBackendSDK) return;
  try {
    const msg = await Parse.Cloud.run('publicGetClientMessage');
    renderClientInstantMessage(msg);
  } catch (_) {
    // ignore silently
  }
}

function starsHTML(rating, reviews) {
  const full = Math.floor(rating);
  let s = '';
  for (let i = 0; i < 5; i++) s += i < full ? '&#9733;' : '&#9734;';
  return `<span style="color:#f59e0b">${s}</span> <span style="color:#9ca3af;font-size:11px">(${reviews})</span>`;
}

function productCardHTML(p) {
  const badgeClass = p.badge === 'NEW' ? 'new' : p.badge === 'HOT' ? 'hot' : '';
  const imgSrc = resolveProductImage(p);
  const pJson  = JSON.stringify(p).replace(/"/g, "'");
  return `
  <div class="product-card" data-id="${p.id}" data-cat="${p.category}" data-tag="${p.tag}">
    <div class="card-img">
      <img class="product-image" src="${imgSrc}" alt="${p.name}" loading="lazy"
           onerror="this.onerror=null;this.src='${FALLBACK}';" />
      <span class="card-badge ${badgeClass}">${p.badge}</span>
      <div class="card-quickview" onclick="quickView(${p.id})">
        <i class="fas fa-eye"></i> Quick View
      </div>
    </div>
    <div class="card-body">
      <span class="card-category">${p.category}</span>
      <h3 class="card-name">${p.name}</h3>
      <div class="card-stars">${starsHTML(p.rating, p.reviews)}</div>
      <div class="card-prices">
        <span class="price-current">${rwf(p.priceRWF)}</span>
        <span class="price-original">${rwf(p.origRWF)}</span>
        <span class="price-discount">-${p.discount}%</span>
      </div>
      <button class="card-add" onclick="addToCart(${pJson})">
        <i class="fas fa-cart-plus"></i> Add to Cart
      </button>
    </div>
  </div>`;
}

function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;
  const filtered = currentFilter === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.category === currentFilter);
  grid.innerHTML = filtered.map(productCardHTML).join('');
}
function renderNewArrivals() {
  const grid = document.getElementById('newArrivalsGrid');
  if (!grid) return;
  grid.innerHTML = PRODUCTS.filter(p => p.tag === 'New').slice(0, 4).map(productCardHTML).join('');
}
function renderBestSellers() {
  const grid = document.getElementById('bestSellersGrid');
  if (!grid) return;
  grid.innerHTML = PRODUCTS.filter(p => p.tag === 'Best').map(productCardHTML).join('');
}
function renderGaming() {
  const grid = document.getElementById('gamingGrid');
  if (!grid) return;
  grid.innerHTML = PRODUCTS.filter(p => p.category === 'Gaming').map(productCardHTML).join('');
}
function renderFashion() {
  const grid = document.getElementById('fashionGrid');
  if (!grid) return;
  grid.innerHTML = PRODUCTS.filter(p => p.category === 'Fashion').map(productCardHTML).join('');
}
function renderSmarthome() {
  const grid = document.getElementById('smarthomeGrid');
  if (!grid) return;
  grid.innerHTML = PRODUCTS.filter(p => p.category === 'Smart Home').map(productCardHTML).join('');
}

function filterProducts(btn, category) {
  currentFilter = category;
  document.querySelectorAll('.ftab').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderProducts();
  document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' });
}
function filterByCategory(cat) {
  currentFilter = (cat === 'New' || cat === 'Top') ? 'All' : cat;
  const tabs = document.querySelectorAll('.ftab');
  tabs.forEach(b => {
    b.classList.remove('active');
    if (b.textContent.trim() === cat || (cat === 'All' && b.textContent.trim() === 'All')) b.classList.add('active');
  });
  if (tabs.length > 0 && currentFilter === 'All') tabs[0].classList.add('active');
  renderProducts();
  document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' });
}

function openShopCategory(cat, event) {
  if (event) event.preventDefault();
  filterByCategory(cat);
  document.getElementById('mainNav')?.classList.remove('open');
}

function getSearchResults(queryText = '', selectedCategory = 'All') {
  const query = queryText.trim().toLowerCase();
  const tokens = query.split(/\s+/).filter(Boolean);

  return PRODUCTS.filter((p) => {
    const haystack = [p.name, p.category, p.badge, p.tag]
      .filter(Boolean)
      .join(' ')
      .toLowerCase();
    const categoryMatch = selectedCategory === 'All' || p.category === selectedCategory;
    if (!tokens.length) return categoryMatch;
    const tokenMatch = tokens.every((token) => haystack.includes(token));
    return categoryMatch && tokenMatch;
  });
}

function renderSearchSuggestions() {
  const suggest = document.getElementById('searchSuggest');
  const clearBtn = document.getElementById('searchClear');
  const inputEl = document.getElementById('searchInput');
  const catEl = document.getElementById('searchCat');
  if (!suggest || !inputEl || !catEl) return;

  const query = inputEl.value.trim();
  if (clearBtn) clearBtn.style.display = query ? 'grid' : 'none';

  if (query.length < 2) {
    suggest.classList.remove('show');
    suggest.innerHTML = '';
    return;
  }

  const matches = getSearchResults(query, catEl.value).slice(0, 6);
  if (!matches.length) {
    suggest.classList.add('show');
    suggest.innerHTML = `<div class="suggest-empty">No quick matches</div>`;
    return;
  }

  suggest.classList.add('show');
  suggest.innerHTML = matches.map((p) => `
    <button class="suggest-item" type="button" onclick="applySearchSuggestion('${String(p.name).replace(/'/g, '&#39;')}')">
      <img src="${resolveProductImage(p)}" alt="${p.name}" loading="lazy" />
      <span>
        <strong>${p.name}</strong>
        <small>${p.category} Â· ${rwf(p.priceRWF)}</small>
      </span>
    </button>
  `).join('');
}

function applySearchSuggestion(name) {
  const input = document.getElementById('searchInput');
  const suggest = document.getElementById('searchSuggest');
  if (input) input.value = name;
  if (suggest) suggest.classList.remove('show');
  doSearch();
}

function clearSearch() {
  const input = document.getElementById('searchInput');
  const suggest = document.getElementById('searchSuggest');
  if (input) input.value = '';
  if (suggest) {
    suggest.innerHTML = '';
    suggest.classList.remove('show');
  }
  currentFilter = 'All';
  const tabs = document.querySelectorAll('.ftab');
  tabs.forEach((b) => b.classList.remove('active'));
  if (tabs[0]) tabs[0].classList.add('active');
  renderProducts();
}

function doSearch() {
  const input = document.getElementById('searchInput');
  const catEl = document.getElementById('searchCat');
  const suggest = document.getElementById('searchSuggest');
  const query = input?.value?.trim() || '';
  const cat = catEl?.value || 'All';

  if (!query) {
    clearSearch();
    return;
  }

  const results = getSearchResults(query, cat);
  const grid = document.getElementById('productsGrid');
  if (!grid) return;
  if (results.length === 0) {
    const safeQuery = escapeHtml(query);
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:48px;color:#9ca3af">
      <i class="fas fa-search" style="font-size:48px;display:block;margin-bottom:16px"></i>
      <strong>No products found for "${safeQuery}"</strong>
      <p>Try a different product name or category.</p>
    </div>`;
  } else {
    grid.innerHTML = results.map(productCardHTML).join('');
  }
  if (suggest) suggest.classList.remove('show');
  document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' });
}

// ââ Cart ââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
function addToCart(product) {
  if (typeof product === 'string') {
    try { product = JSON.parse(product.replace(/'/g, '"')); } catch(e) { return; }
  }
  const exist = cart.find(c => c.id === product.id);
  if (exist) exist.qty = (exist.qty || 1) + 1;
  else cart.push({ ...product, qty: 1 });
  saveCart();
  updateCartUI();
  showToast(`Added: ${product.name}`, 'success');
}

function updateCartUI() {
  const count = cart.reduce((s, c) => s + (c.qty || 1), 0);
  document.querySelectorAll('#cartCount, #mobileCartCount').forEach(el => el.textContent = count);
  renderCartItems();
}

function renderCartItems() {
  const container = document.getElementById('cartItems');
  if (!container) return;
  if (cart.length === 0) {
    container.innerHTML = `<div style="text-align:center;padding:48px;color:#9ca3af">
      <i class="fas fa-shopping-cart" style="font-size:48px;display:block;margin-bottom:16px"></i>
      <strong>Your cart is empty</strong><p>Browse products and add some!</p></div>`;
    const totalEl = document.getElementById('cartTotal');
    if (totalEl) totalEl.textContent = rwf(0);
    return;
  }
  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img class="ci-thumb" src="${resolveProductImage(item)}" alt="${item.name}"
           onerror="this.onerror=null;this.src='${FALLBACK}';" />
      <div class="ci-info">
        <strong>${item.name}</strong>
        <span>${rwf(item.priceRWF)}</span>
        <div class="ci-qty">
          <button onclick="changeQty(${item.id},-1)">â</button>
          <span>${item.qty || 1}</span>
          <button onclick="changeQty(${item.id},1)">+</button>
        </div>
      </div>
      <button class="ci-remove" onclick="removeFromCart(${item.id})"><i class="fas fa-trash"></i></button>
    </div>`).join('');
  const total = cart.reduce((s, c) => s + c.priceRWF * (c.qty || 1), 0);
  const totalEl = document.getElementById('cartTotal');
  if (totalEl) totalEl.textContent = rwf(total);
}

function changeQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty = Math.max(1, (item.qty || 1) + delta);
  saveCart(); updateCartUI();
}
function removeFromCart(id) { cart = cart.filter(c => c.id !== id); saveCart(); updateCartUI(); }

function openCart()  {
  document.getElementById('cartDrawer').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function checkout() {
  const user = currentUserSafe();
  if (!user) { showToast('Please login to checkout', 'error'); setTimeout(() => location.href='auth.html', 1200); return; }
  if (!cart.length) { showToast('Cart is empty', 'error'); return; }

  closeCart();

  const candidates = [
    'checkout.html',
    './checkout.html',
    '/public/checkout.html',
    '/checkout.html'
  ];

  (async () => {
    for (const path of candidates) {
      try {
        const url = new URL(path, window.location.href).toString();
        const res = await fetch(url, { method: 'GET', cache: 'no-store' });
        if (res.ok) {
          window.location.assign(url);
          return;
        }
      } catch (_) {}
    }
    showToast('Checkout page not found. Open with Live Server: /public/index.html', 'error');
  })();
}

function openCompare() { showToast('Compare feature coming soon!'); }

// ââ Quick View ââââââââââââââââââââââââââââââââââââââââââââââââââ
function quickView(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const imgSrc = resolveProductImage(p);
  const pJson  = JSON.stringify(p).replace(/"/g, "'");
  document.getElementById('qvContent').innerHTML = `
    <div class="qv-img">
      <img src="${imgSrc}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;border-radius:12px"
           onerror="this.onerror=null;this.src='${FALLBACK}';" />
    </div>
    <div class="qv-info">
      <span class="qv-cat">${p.category}</span>
      <h2 class="qv-name">${p.name}</h2>
      <div class="qv-stars">${starsHTML(p.rating, p.reviews)}</div>
      <div class="qv-prices">
        <span class="qv-price">${rwf(p.priceRWF)}</span>
        <span class="qv-orig">${rwf(p.origRWF)}</span>
        <span class="price-discount">-${p.discount}%</span>
      </div>
      <p class="qv-desc">Premium quality product with warranty. Fast delivery across Rwanda.</p>
      <div class="qv-actions">
        <button class="btn-primary full" onclick="addToCart(${pJson});closeQuickView()">
          <i class="fas fa-cart-plus"></i> Add to Cart
        </button>
        <button class="btn-ghost full" style="color:#374151;border-color:#d1d5db;background:#fff" onclick="closeQuickView()">
          Continue Shopping
        </button>
      </div>
    </div>`;
  document.getElementById('quickViewModal').classList.add('open');
  document.getElementById('quickViewOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeQuickView() {
  document.getElementById('quickViewModal').classList.remove('open');
  document.getElementById('quickViewOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ââ Hero Slider âââââââââââââââââââââââââââââââââââââââââââââââââ
function changeSlide(dir) {
  const slides = document.querySelectorAll('.hero-slide');
  const dots   = document.querySelectorAll('.dot');
  if (!slides.length) return;
  slides[currentSlide].classList.remove('active');
  dots[currentSlide] && dots[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + dir + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  dots[currentSlide] && dots[currentSlide].classList.add('active');
}
function goSlide(idx) {
  const slides = document.querySelectorAll('.hero-slide');
  const dots   = document.querySelectorAll('.dot');
  if (!slides.length) return;
  slides[currentSlide].classList.remove('active');
  dots[currentSlide] && dots[currentSlide].classList.remove('active');
  currentSlide = idx;
  slides[currentSlide].classList.add('active');
  dots[currentSlide] && dots[currentSlide].classList.add('active');
}
function startSlider() { slideTimer = setInterval(() => changeSlide(1), 5000); }

// ââ Countdown âââââââââââââââââââââââââââââââââââââââââââââââââââ
function startCountdown() {
  let endTime = localStorage.getItem('ituze_sale_end');
  if (!endTime || Date.now() > parseInt(endTime)) {
    endTime = Date.now() + 24 * 60 * 60 * 1000;
    localStorage.setItem('ituze_sale_end', endTime);
  }
  function update() {
    const diff = Math.max(0, parseInt(endTime) - Date.now());
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    const pad = n => String(n).padStart(2,'0');
    ['cdH','cdM','cdS'].forEach((elId, ix) => {
      const el = document.getElementById(elId);
      if (el) el.textContent = pad([h, m, s][ix]);
    });
  }
  update(); setInterval(update, 1000);
}

// ââ Newsletter ââââââââââââââââââââââââââââââââââââââââââââââââââ
function subscribeNewsletter() {
  const email = document.getElementById('nlEmail')?.value.trim();
  if (!email || !email.includes('@')) { showToast('Enter a valid email', 'error'); return; }
  showToast('Subscribed successfully!', 'success');
  document.getElementById('nlEmail').value = '';
}

// ââ Navigation animation + mobile menu ââââââââââââââââââââââââââ
function toggleMobileMenu() {
  const nav = document.getElementById('mainNav');
  if (nav) nav.classList.toggle('open');
}

function focusMobileSearch() {
  const input = document.getElementById('searchInput');
  const header = document.getElementById('mainHeader');
  const nav = document.getElementById('mainNav');
  if (nav) nav.classList.remove('open');
  if (header) header.scrollIntoView({ behavior: 'smooth', block: 'start' });
  setTimeout(() => {
    if (!input) return;
    input.focus({ preventScroll: true });
    renderSearchSuggestions();
  }, 420);
}

function optimizeImageLoading() {
  const images = Array.from(document.querySelectorAll('img'));
  images.forEach((img, index) => {
    if (index > 3) img.loading = 'lazy';
    img.decoding = 'async';
    if (index > 6) img.fetchPriority = 'low';
  });
}

function initNavigationAnimation() {
  const links = Array.from(document.querySelectorAll('.main-nav .nav-link'));
  const sectionLinks = links.filter((l) => (l.getAttribute('href') || '').startsWith('#'));

  sectionLinks.forEach((link) => {
    link.addEventListener('click', () => {
      links.forEach((l) => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  const sections = sectionLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if (!sections.length) return;

  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((e) => e.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    const activeLink = sectionLinks.find((l) => l.getAttribute('href') === `#${visible.target.id}`);
    if (!activeLink) return;

    links.forEach((l) => l.classList.remove('active'));
    activeLink.classList.add('active');
  }, { threshold: 0.35 });

  sections.forEach((section) => observer.observe(section));
}

// ââ Auth UI âââââââââââââââââââââââââââââââââââââââââââââââââââââ
async function customerLogout() {
  if (hasBackendSDK) {
    try { await Parse.User.logOut(); } catch (_) {}
  }
  localStorage.removeItem('ituze_cart');
  window.location.href = 'auth.html';
}

async function updateAuthUI() {
  const user = currentUserSafe();
  const accountIcon = document.querySelector('.hicon[title="My Account"]');
  const navAuth = document.getElementById('navAuthActions');
  const topAuth = document.getElementById('topAuthActions');
  if (!user) {
    if (accountIcon) accountIcon.href = 'auth.html';
    if (navAuth) {
      navAuth.innerHTML = `
        <a href="auth.html" class="nav-auth-btn login"><i class="fas fa-right-to-bracket"></i> Login</a>
        <a href="auth.html#register" class="nav-auth-btn register"><i class="fas fa-user-plus"></i> Register</a>
      `;
    }
    if (topAuth) {
      topAuth.innerHTML = `
        <a href="auth.html" class="top-auth-btn top-login"><i class="fas fa-right-to-bracket"></i><span>Login</span></a>
        <a href="auth.html#register" class="top-auth-btn top-register"><i class="fas fa-user-plus"></i><span>Register</span></a>
      `;
    }
    return;
  }

  if (user && accountIcon) {
    const name = user.get('firstName') || user.get('username') || 'Account';
    const shortName = escapeHtml(name).substring(0, 10);
    const label = accountIcon.querySelector('.hicon-label');
    if (label) label.textContent = name.substring(0, 8);
    document.querySelectorAll('.mobile-account-link').forEach((link) => {
      const text = link.querySelector('span');
      if (text) text.textContent = name.substring(0, 8);
    });
    if (navAuth) {
      navAuth.innerHTML = `
        <a href="index.html" class="nav-auth-btn account"><i class="fas fa-user-circle"></i> ${escapeHtml(name).substring(0, 12)}</a>
        <button type="button" class="nav-auth-btn logout" onclick="customerLogout()"><i class="fas fa-power-off"></i> Logout</button>
      `;
    }
    if (topAuth) {
      topAuth.innerHTML = `
        <a href="auth.html" class="top-auth-btn account"><i class="fas fa-user-circle"></i><span>${shortName}</span></a>
        <button type="button" class="top-auth-btn logout" onclick="customerLogout()"><i class="fas fa-power-off"></i><span>Logout</span></button>
      `;
    }
    if (user.get('isAdmin')) {
      accountIcon.href = 'admin.html';
      if (navAuth) {
        navAuth.querySelector('.account')?.setAttribute('href', 'admin.html');
      }
      if (topAuth) {
        topAuth.querySelector('.account')?.setAttribute('href', 'admin.html');
      }
      document.querySelectorAll('.mobile-account-link').forEach((link) => { link.href = 'admin.html'; });
      return;
    }

    accountIcon.href = 'auth.html';
    if (navAuth) {
      navAuth.querySelector('.account')?.setAttribute('href', 'auth.html');
    }
    if (topAuth) {
      topAuth.querySelector('.account')?.setAttribute('href', 'auth.html');
    }
    document.querySelectorAll('.mobile-account-link').forEach((link) => { link.href = 'auth.html'; });
  }
}

function showFirstVisitAuthGate() {
  const existing = document.getElementById('firstVisitAuthGate');
  if (existing) existing.remove();

  const gate = document.createElement('div');
  gate.id = 'firstVisitAuthGate';
  gate.innerHTML = `
    <div class="auth-gate-card">
      <div class="auth-gate-badge">Welcome</div>
      <h2>Create account or sign in</h2>
      <p>To continue shopping, first-time visitors must register or login.</p>
      <div class="auth-gate-actions">
        <a href="auth.html" class="auth-gate-btn primary">Login</a>
        <a href="auth.html#register" class="auth-gate-btn">Register</a>
      </div>
    </div>
  `;

  gate.style.cssText = [
    'position:fixed',
    'inset:0',
    'z-index:3000',
    'display:flex',
    'align-items:center',
    'justify-content:center',
    'padding:16px',
    'background:rgba(2,6,23,.78)',
    'backdrop-filter:blur(6px)',
  ].join(';');

  const style = document.createElement('style');
  style.textContent = `
    #firstVisitAuthGate .auth-gate-card {
      width: min(520px, 96vw);
      border-radius: 18px;
      background: linear-gradient(145deg, #ffffff, #eef4ff);
      border: 1px solid #dbeafe;
      box-shadow: 0 28px 80px rgba(2, 6, 23, .3);
      padding: 24px;
      text-align: center;
      font-family: 'Nunito', sans-serif;
    }
    #firstVisitAuthGate .auth-gate-badge {
      display: inline-block;
      padding: 5px 10px;
      border-radius: 999px;
      background: #dbeafe;
      color: #1d4ed8;
      font-size: 12px;
      font-weight: 800;
      letter-spacing: .06em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    #firstVisitAuthGate h2 {
      margin: 0 0 8px;
      color: #0f172a;
      font-family: 'Poppins', sans-serif;
      font-size: clamp(1.35rem, 2.8vw, 1.95rem);
      line-height: 1.2;
    }
    #firstVisitAuthGate p {
      margin: 0;
      color: #475569;
      font-size: 0.96rem;
      line-height: 1.65;
    }
    #firstVisitAuthGate .auth-gate-actions {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 10px;
      margin-top: 16px;
    }
    #firstVisitAuthGate .auth-gate-btn {
      border-radius: 10px;
      padding: 11px 14px;
      border: 2px solid #bfdbfe;
      color: #1d4ed8;
      text-decoration: none;
      font-weight: 800;
      background: #fff;
      transition: .2s ease;
    }
    #firstVisitAuthGate .auth-gate-btn:hover { transform: translateY(-1px); }
    #firstVisitAuthGate .auth-gate-btn.primary {
      border-color: #1d4ed8;
      background: linear-gradient(135deg, #2563eb, #1d4ed8);
      color: #fff;
    }
    @media (max-width: 640px) {
      #firstVisitAuthGate .auth-gate-card { padding: 18px; border-radius: 14px; }
      #firstVisitAuthGate .auth-gate-actions { grid-template-columns: 1fr; }
    }
  `;

  gate.appendChild(style);
  document.body.appendChild(gate);
}

function enforceAuthenticatedStoreAccess() {
  return true;
}

// ââ Dark Mode âââââââââââââââââââââââââââââââââââââââââââââââââââ
function setTheme(mode) {
  document.documentElement.setAttribute('data-theme', mode);
  localStorage.setItem('ituze_theme', mode);
  const icon = document.getElementById('themeIcon');
  if (icon) icon.className = mode === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}
function initTheme() { setTheme(localStorage.getItem('ituze_theme') || 'light'); }
function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  setTheme(current === 'dark' ? 'light' : 'dark');
}

// ââ Scroll ââââââââââââââââââââââââââââââââââââââââââââââââââââââ
window.addEventListener('scroll', () => {
  const btn    = document.getElementById('backToTop');
  const header = document.getElementById('mainHeader');
  if (btn) btn.classList.toggle('show', window.scrollY > 400);
  if (header) header.style.boxShadow = window.scrollY > 10
    ? '0 4px 24px rgba(0,0,0,.18)'
    : '0 2px 16px rgba(0,0,0,.08)';
});

// ââ Load remote products from database backend ââââââââââââââââââââ
async function loadRemoteProducts() {
  if (!hasBackendSDK) return;
  try {
    const remote = await Parse.Cloud.run('publicGetProducts');
    if (Array.isArray(remote) && remote.length > 0) {
      const imageUsage = remote.reduce((acc, item) => {
        const key = (item.image || '').trim();
        if (!key) return acc;
        acc[key] = (acc[key] || 0) + 1;
        return acc;
      }, {});
      const duplicatedImageSet = new Set(
        Object.entries(imageUsage)
          .filter(([, count]) => count > 2)
          .map(([image]) => image)
      );

      PRODUCTS = remote.map((p, i) => ({
        ...p,
        id: p.objectId || p.id || (1000 + i),
        image: resolveProductImage(p, duplicatedImageSet),
      }));
    }
  } catch (e) {
    // silent fallback to local product list with real catalog images
    console.log('Using local product catalog.');
  }
}

// ââ Boot ââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
document.addEventListener('DOMContentLoaded', async () => {
  if (!enforceAuthenticatedStoreAccess()) return;
  initTheme();
  await loadRemoteProducts();
  await loadClientInstantMessage();
  renderProducts();
  renderNewArrivals();
  renderBestSellers();
  renderGaming();
  renderFashion();
  renderSmarthome();
  updateCartUI();
  startSlider();
  startCountdown();
  await updateAuthUI();
  initNavigationAnimation();
  optimizeImageLoading();
  const si = document.getElementById('searchInput');
  if (si) {
    let searchTimer;
    si.addEventListener('keydown', (e) => { if (e.key === 'Enter') doSearch(); });
    si.addEventListener('input', () => {
      clearTimeout(searchTimer);
      searchTimer = setTimeout(() => renderSearchSuggestions(), 140);
    });
    si.addEventListener('focus', renderSearchSuggestions);
  }

  const searchCat = document.getElementById('searchCat');
  if (searchCat) searchCat.addEventListener('change', renderSearchSuggestions);

  document.addEventListener('click', (event) => {
    const wrap = document.getElementById('headerSearchWrap');
    const suggest = document.getElementById('searchSuggest');
    if (!wrap || !suggest) return;
    if (!wrap.contains(event.target)) suggest.classList.remove('show');
  });

  document.querySelectorAll('#mainNav .nav-link').forEach((link) => {
    link.addEventListener('click', () => document.getElementById('mainNav')?.classList.remove('open'));
  });

  const urlParams = new URLSearchParams(window.location.search);
  const initialQuery = (urlParams.get('q') || '').trim();
  if (initialQuery && si) {
    si.value = initialQuery;
    doSearch();
  }
});