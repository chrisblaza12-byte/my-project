// Ituze Online Shopping â Cloud Code
// Admin: chrisblaza12@gmail.com | +250786540493
// Notifications email: ndayisabapatrick75@gmail.com

const ADMIN_WHATSAPP = "+250786540493";
const ADMIN_EMAIL = "ndayisabapatrick75@gmail.com";
const ADMIN_ROLE_NAME = "admin";

const PRODUCT_IMAGE_BY_NAME = {
  "macbook pro m3": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80",
  "dell xps 15 oled": "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80",
  "lenovo thinkpad x1": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80",
  "hp spectre x360": "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=600&q=80",
  "iphone 15 pro max": "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&q=80",
  "samsung galaxy s24 ultra": "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&q=80",
  "google pixel 8 pro": "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&q=80",
  "oneplus 12 pro": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80",
  "playstation 5 console": "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=600&q=80",
  "xbox series x": "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=600&q=80",
  "razer gaming headset": "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600&q=80",
  "mechanical keyboard rgb": "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=600&q=80",
  "designer leather jacket": "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80",
  "premium running shoes": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
  "classic denim jeans": "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=600&q=80",
  "summer floral dress": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80",
  "apple watch ultra 2": "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&q=80",
  "samsung galaxy watch 6": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
  "garmin fenix 7 pro": "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&q=80",
  "fossil gen 6 smartwatch": "https://images.unsplash.com/photo-1557935728-e6d1eaabe558?w=600&q=80",
  "amazon echo show 15": "https://images.unsplash.com/photo-1512446816042-444d641267d4?w=600&q=80",
  "google nest hub max": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  "philips hue starter kit": "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80",
  "ring video doorbell pro": "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80",
  "sony wh-1000xm5": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
  "apple airpods pro 2nd": "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=600&q=80",
  "ipad pro 12.9\" m2": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&q=80",
  "usb-c 100w gan charger": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=600&q=80",
};

const CATEGORY_IMAGE_POOL = {
  Laptops: [
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80",
    "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80",
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80",
  ],
  Smartphones: [
    "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&q=80",
    "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&q=80",
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80",
  ],
  Gaming: [
    "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=600&q=80",
    "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=600&q=80",
    "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=600&q=80",
  ],
  Fashion: [
    "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80",
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
    "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=600&q=80",
  ],
  Watches: [
    "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&q=80",
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
    "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&q=80",
  ],
  "Smart Home": [
    "https://images.unsplash.com/photo-1512446816042-444d641267d4?w=600&q=80",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80",
  ],
  Accessories: [
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
    "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=600&q=80",
    "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&q=80",
  ],
};

function hashText(text = "") {
  let hash = 0;
  for (let i = 0; i < text.length; i += 1) hash = (hash * 31 + text.charCodeAt(i)) >>> 0;
  return hash;
}

function resolveProductImageByName(name, category, image) {
  const key = (name || "").trim().toLowerCase();
  const provided = (image || "").trim();

  if (provided && !provided.includes("pinimg.com")) return provided;
  if (PRODUCT_IMAGE_BY_NAME[key]) return PRODUCT_IMAGE_BY_NAME[key];

  const pool = CATEGORY_IMAGE_POOL[category] || CATEGORY_IMAGE_POOL.Accessories;
  if (!pool || !pool.length) return "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80";
  return pool[hashText(key || category || "product") % pool.length];
}

function buildProductAcl() {
  const acl = new Parse.ACL();
  acl.setPublicReadAccess(true);
  acl.setRoleReadAccess(ADMIN_ROLE_NAME, true);
  acl.setRoleWriteAccess(ADMIN_ROLE_NAME, true);
  return acl;
}

async function getOrCreateAdminRole() {
  const roleQuery = new Parse.Query(Parse.Role);
  roleQuery.equalTo("name", ADMIN_ROLE_NAME);
  let role = await roleQuery.first({ useMasterKey: true });
  if (role) return role;

  const roleAcl = new Parse.ACL();
  roleAcl.setPublicReadAccess(false);
  roleAcl.setPublicWriteAccess(false);
  role = new Parse.Role(ADMIN_ROLE_NAME, roleAcl);
  await role.save(null, { useMasterKey: true });
  return role;
}

async function ensureAdminAccess(user) {
  if (!user) return;

  if (!user.get("isAdmin")) {
    user.set("isAdmin", true);
    await user.save(null, { useMasterKey: true });
  }

  const role = await getOrCreateAdminRole();
  role.getUsers().add(user);
  await role.save(null, { useMasterKey: true });
}

// ââ Admin check âââââââââââââââââââââââââââââââââââââââââââââââââ
async function requireAdmin(request) {
  const user = request.user;
  if (!user) throw new Parse.Error(Parse.Error.SESSION_MISSING, "Not authenticated.");

  if (user.get("isAdmin")) return user;

  const roleQuery = new Parse.Query(Parse.Role);
  roleQuery.equalTo("name", ADMIN_ROLE_NAME);
  roleQuery.equalTo("users", user);
  const adminRole = await roleQuery.first({ useMasterKey: true });

  if (!adminRole) {
    throw new Parse.Error(Parse.Error.OPERATION_FORBIDDEN, "Admin only.");
  }

  user.set("isAdmin", true);
  await user.save(null, { useMasterKey: true });
  return user;
}

// ââ beforeSave _User âââââââââââââââââââââââââââââââââââââââââââââ
Parse.Cloud.beforeSave(Parse.User, (request) => {
  const obj = request.object;
  if (obj.dirty("isAdmin") && obj.get("isAdmin") === true) {
    if (!request.master) obj.set("isAdmin", false);
  }
});

Parse.Cloud.beforeSave("Product", async (request) => {
  if (request.master) return;
  await requireAdmin(request);
  const product = request.object;
  product.set("image", resolveProductImageByName(product.get("name"), product.get("category"), product.get("image")));
});

Parse.Cloud.beforeDelete("Product", async (request) => {
  if (request.master) return;
  await requireAdmin(request);
});

// ââ afterSave _User: log registrations ââââââââââââââââââââââââââ
Parse.Cloud.afterSave(Parse.User, async (request) => {
  if (request.original === undefined) {
    console.log(`New user registered: ${request.object.get("email")} at ${new Date().toISOString()}`);
  }

  const email = (request.object.get("email") || "").trim().toLowerCase();
  if (email === ADMIN_EMAIL.toLowerCase()) {
    await ensureAdminAccess(request.object);
  }
});

Parse.Cloud.define("adminGrantAccess", async (request) => {
  const user = request.user;
  if (!user) throw new Parse.Error(Parse.Error.SESSION_MISSING, "Not authenticated.");

  const email = (user.get("email") || "").trim().toLowerCase();
  if (email !== ADMIN_EMAIL.toLowerCase() && !user.get("isAdmin")) {
    throw new Parse.Error(Parse.Error.OPERATION_FORBIDDEN, "Not allowed to get admin access.");
  }

  await ensureAdminAccess(user);

  const productsQ = new Parse.Query("Product");
  productsQ.limit(1000);
  const products = await productsQ.find({ useMasterKey: true });
  products.forEach((p) => {
    p.setACL(buildProductAcl());
    p.set("image", resolveProductImageByName(p.get("name"), p.get("category"), p.get("image")));
  });
  if (products.length) await Parse.Object.saveAll(products, { useMasterKey: true });

  return { success: true, isAdmin: true, productsUpdated: products.length };
});

// ââ Place Order ââââââââââââââââââââââââââââââââââââââââââââââââââ
Parse.Cloud.define("placeOrder", async (request) => {
  const user = request.user;
  if (!user) throw new Parse.Error(Parse.Error.SESSION_MISSING, "Please login to place an order.");

  const { items, total, customerName, customerPhone, customerEmail, location, notes } = request.params;
  if (!items || items.length === 0) throw new Parse.Error(400, "Cart is empty.");
  if (!location) throw new Parse.Error(400, "Delivery location is required.");

  // Build order object
  const Order = Parse.Object.extend("Order");
  const order = new Order();
  order.set("userId", user.id);
  order.set("customerName", customerName || user.get("firstName") + " " + (user.get("lastName") || ""));
  order.set("customerPhone", customerPhone || user.get("phone") || "");
  order.set("customerEmail", customerEmail || user.get("email") || "");
  order.set("location", location);
  order.set("notes", notes || "");
  order.set("items", items);
  order.set("totalRWF", total);
  order.set("status", "pending");
  order.set("orderNumber", "ITZ-" + Date.now().toString().slice(-6));

  // ACL: user can read their own order, admin can do everything
  const acl = new Parse.ACL();
  acl.setReadAccess(user.id, true);
  acl.setWriteAccess(user.id, false);
  acl.setPublicReadAccess(false);
  acl.setRoleReadAccess("admin", true);
  acl.setRoleWriteAccess("admin", true);
  order.setACL(acl);

  const saved = await order.save(null, { useMasterKey: true });

  // Build message
  const itemLines = items.map(i => `  â¢ ${i.name} x${i.qty} â RWF ${(i.priceRWF * i.qty).toLocaleString()}`).join("\n");
  const msg = `NEW ORDER - Ituze Online Shopping\n\n` +
    `Order: ${saved.get("orderNumber")}\n` +
    `Customer: ${customerName}\n` +
    `Phone: ${customerPhone}\n` +
    `Email: ${customerEmail}\n` +
    `Location: ${location}\n` +
    (notes ? `Notes: ${notes}\n` : ``) +
    `\nItems:\n${itemLines}\n\n` +
    `Total: RWF ${total.toLocaleString()}\n\n` +
    `${new Date().toLocaleString("en-RW", { timeZone: "Africa/Kigali" })}`;

  // WhatsApp link (stored for admin reference)
  const waLink = `https://wa.me/${ADMIN_WHATSAPP.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(msg)}`;
  saved.set("whatsappLink", waLink);
  saved.set("notificationMsg", msg);
  await saved.save(null, { useMasterKey: true });

  let emailNotification = "not_configured";
  try {
    if (Parse.Cloud.sendEmail) {
      await Parse.Cloud.sendEmail({
        to: ADMIN_EMAIL,
        subject: `New order ${saved.get("orderNumber")}`,
        text: msg,
      });
      emailNotification = "sent";
    }
  } catch (emailErr) {
    emailNotification = "failed";
    console.error(`Email notification failed for ${saved.get("orderNumber")}: ${emailErr.message}`);
  }

  console.log(`Order placed: ${saved.get("orderNumber")} â RWF ${total} â ${location}`);
  console.log(`WhatsApp notification: ${waLink}`);

  return {
    success: true,
    orderNumber: saved.get("orderNumber"),
    orderId: saved.id,
    whatsappLink: waLink,
    message: msg,
    adminEmail: ADMIN_EMAIL,
    emailNotification,
  };
});

// ââ Admin: get all orders ââââââââââââââââââââââââââââââââââââââââ
Parse.Cloud.define("adminGetOrders", async (request) => {
  await requireAdmin(request);
  const query = new Parse.Query("Order");
  query.descending("createdAt");
  query.limit(500);
  const orders = await query.find({ useMasterKey: true });
  return orders.map(o => ({
    objectId: o.id,
    orderNumber: o.get("orderNumber"),
    customerName: o.get("customerName"),
    customerPhone: o.get("customerPhone"),
    customerEmail: o.get("customerEmail"),
    location: o.get("location"),
    notes: o.get("notes"),
    items: o.get("items"),
    totalRWF: o.get("totalRWF"),
    status: o.get("status"),
    whatsappLink: o.get("whatsappLink"),
    createdAt: o.createdAt,
  }));
});

// ââ Admin: update order status âââââââââââââââââââââââââââââââââââ
Parse.Cloud.define("adminUpdateOrderStatus", async (request) => {
  await requireAdmin(request);
  const { orderId, status } = request.params;
  if (!orderId || !status) throw new Parse.Error(400, "orderId and status required.");
  const query = new Parse.Query("Order");
  const order = await query.get(orderId, { useMasterKey: true });
  order.set("status", status);
  await order.save(null, { useMasterKey: true });
  return { success: true };
});

// ââ Admin: get all users âââââââââââââââââââââââââââââââââââââââââ
Parse.Cloud.define("adminGetUsers", async (request) => {
  await requireAdmin(request);
  const query = new Parse.Query(Parse.User);
  query.descending("createdAt");
  query.limit(1000);
  const users = await query.find({ useMasterKey: true });
  return users.map(u => ({
    objectId: u.id,
    username: u.get("username"),
    email: u.get("email"),
    firstName: u.get("firstName") || "",
    lastName: u.get("lastName") || "",
    phone: u.get("phone") || "",
    isAdmin: u.get("isAdmin") || false,
    blocked: u.get("blocked") || false,
    createdAt: u.createdAt,
    updatedAt: u.updatedAt,
  }));
});

// ââ Admin: delete a user âââââââââââââââââââââââââââââââââââââââââ
Parse.Cloud.define("adminDeleteUser", async (request) => {
  await requireAdmin(request);
  const { userId } = request.params;
  if (!userId) throw new Parse.Error(400, "userId required.");
  const query = new Parse.Query(Parse.User);
  const user = await query.get(userId, { useMasterKey: true });
  if (user.get("isAdmin")) throw new Parse.Error(Parse.Error.OPERATION_FORBIDDEN, "Cannot delete admin.");
  await user.destroy({ useMasterKey: true });
  return { success: true };
});

// ââ Admin: toggle block ââââââââââââââââââââââââââââââââââââââââââ
Parse.Cloud.define("adminToggleUserBlock", async (request) => {
  await requireAdmin(request);
  const { userId, blocked } = request.params;
  const query = new Parse.Query(Parse.User);
  const user = await query.get(userId, { useMasterKey: true });
  user.set("blocked", blocked);
  await user.save(null, { useMasterKey: true });
  return { success: true, blocked };
});

// ââ Admin: update user âââââââââââââââââââââââââââââââââââââââââââ
Parse.Cloud.define("adminUpdateUser", async (request) => {
  await requireAdmin(request);
  const { userId, firstName, lastName, email, phone } = request.params;
  const query = new Parse.Query(Parse.User);
  const user = await query.get(userId, { useMasterKey: true });
  if (firstName !== undefined) user.set("firstName", firstName);
  if (lastName !== undefined) user.set("lastName", lastName);
  if (email !== undefined) user.set("email", email);
  if (phone !== undefined) user.set("phone", phone);
  await user.save(null, { useMasterKey: true });
  return { success: true };
});

// ââ Admin: stats âââââââââââââââââââââââââââââââââââââââââââââââââ
Parse.Cloud.define("adminGetStats", async (request) => {
  await requireAdmin(request);
  const userQuery = new Parse.Query(Parse.User);
  const totalUsers = await userQuery.count({ useMasterKey: true });
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const todayQ = new Parse.Query(Parse.User);
  todayQ.greaterThanOrEqualTo("createdAt", today);
  const newToday = await todayQ.count({ useMasterKey: true });
  const weekAgo = new Date(Date.now() - 7 * 86400000);
  const weekQ = new Parse.Query(Parse.User);
  weekQ.greaterThanOrEqualTo("createdAt", weekAgo);
  const newThisWeek = await weekQ.count({ useMasterKey: true });
  const orderQ = new Parse.Query("Order");
  const totalOrders = await orderQ.count({ useMasterKey: true });
  const pendingQ = new Parse.Query("Order");
  pendingQ.equalTo("status", "pending");
  const pendingOrders = await pendingQ.count({ useMasterKey: true });
  return { totalUsers, newToday, newThisWeek, totalOrders, pendingOrders };
});

// ââ Product Management âââââââââââââââââââââââââââââââââââââââââââ
Parse.Cloud.define("publicGetProducts", async () => {
  const query = new Parse.Query("Product");
  query.equalTo("isActive", true);
  query.descending("createdAt");
  query.limit(300);
  const items = await query.find({ useMasterKey: true });
  return items.map(p => ({
    objectId: p.id,
    name: p.get("name"),
    category: p.get("category"),
    priceRWF: p.get("priceRWF"),
    origRWF: p.get("origRWF"),
    discount: p.get("discount") || 0,
    rating: p.get("rating") || 4,
    reviews: p.get("reviews") || 0,
    image: resolveProductImageByName(p.get("name"), p.get("category"), p.get("image")),
    badge: p.get("badge") || "NEW",
    tag: p.get("tag") || "New",
    isActive: p.get("isActive") !== false,
  }));
});

Parse.Cloud.define("adminGetProducts", async (request) => {
  await requireAdmin(request);
  const query = new Parse.Query("Product");
  query.descending("createdAt");
  query.limit(500);
  const items = await query.find({ useMasterKey: true });
  return items.map(p => ({
    objectId: p.id,
    name: p.get("name"),
    category: p.get("category"),
    priceRWF: p.get("priceRWF"),
    image: resolveProductImageByName(p.get("name"), p.get("category"), p.get("image")),
    isActive: p.get("isActive") !== false,
    createdAt: p.createdAt,
  }));
});

Parse.Cloud.define("adminCreateProduct", async (request) => {
  await requireAdmin(request);
  const { name, category, priceRWF, origRWF, image, badge, tag, rating, reviews } = request.params;
  if (!name || !category || !priceRWF) throw new Parse.Error(400, "name, category and priceRWF are required");

  const Product = Parse.Object.extend("Product");
  const p = new Product();
  p.set("name", name);
  p.set("category", category);
  p.set("priceRWF", Number(priceRWF));
  p.set("origRWF", Number(origRWF || priceRWF));
  p.set("discount", Math.max(0, Math.round((1 - Number(priceRWF)/Number(origRWF || priceRWF)) * 100)));
  p.set("image", resolveProductImageByName(name, category, image));
  p.set("badge", badge || "NEW");
  p.set("tag", tag || "New");
  p.set("rating", Number(rating || 4));
  p.set("reviews", Number(reviews || 1));
  p.set("isActive", true);
  p.setACL(buildProductAcl());
  await p.save(null, { useMasterKey: true });
  return { success: true, objectId: p.id };
});

Parse.Cloud.define("adminToggleProduct", async (request) => {
  await requireAdmin(request);
  const { productId, isActive } = request.params;
  const q = new Parse.Query("Product");
  const p = await q.get(productId, { useMasterKey: true });
  p.set("isActive", !!isActive);
  await p.save(null, { useMasterKey: true });
  return { success: true };
});

Parse.Cloud.define("adminDeleteProduct", async (request) => {
  await requireAdmin(request);
  const { productId } = request.params;
  if (!productId) throw new Parse.Error(400, "productId required.");
  const q = new Parse.Query("Product");
  const p = await q.get(productId, { useMasterKey: true });
  await p.destroy({ useMasterKey: true });
  return { success: true };
});

// ââ Instant Message to Clients âââââââââââââââââââââââââââââââââââ
Parse.Cloud.define("adminSetClientMessage", async (request) => {
  const user = await requireAdmin(request);
  const { text } = request.params;
  const messageText = String(text || "").trim();
  if (!messageText) throw new Parse.Error(400, "text is required.");

  const q = new Parse.Query("ClientMessage");
  q.equalTo("isActive", true);
  q.limit(1000);
  const active = await q.find({ useMasterKey: true });
  active.forEach((m) => m.set("isActive", false));
  if (active.length) await Parse.Object.saveAll(active, { useMasterKey: true });

  const Message = Parse.Object.extend("ClientMessage");
  const msg = new Message();
  msg.set("text", messageText);
  msg.set("isActive", true);
  msg.set("createdBy", user.id);

  const acl = new Parse.ACL();
  acl.setPublicReadAccess(true);
  acl.setRoleReadAccess(ADMIN_ROLE_NAME, true);
  acl.setRoleWriteAccess(ADMIN_ROLE_NAME, true);
  msg.setACL(acl);

  await msg.save(null, { useMasterKey: true });
  return { success: true, objectId: msg.id, text: messageText };
});

Parse.Cloud.define("adminClearClientMessage", async (request) => {
  await requireAdmin(request);
  const q = new Parse.Query("ClientMessage");
  q.equalTo("isActive", true);
  q.limit(1000);
  const active = await q.find({ useMasterKey: true });
  active.forEach((m) => m.set("isActive", false));
  if (active.length) await Parse.Object.saveAll(active, { useMasterKey: true });
  return { success: true, cleared: active.length };
});

Parse.Cloud.define("publicGetClientMessage", async () => {
  const q = new Parse.Query("ClientMessage");
  q.equalTo("isActive", true);
  q.descending("updatedAt");
  const msg = await q.first({ useMasterKey: true });
  if (!msg) return null;
  return {
    objectId: msg.id,
    text: msg.get("text"),
    isActive: msg.get("isActive") === true,
    updatedAt: msg.updatedAt,
  };
});

// ââ Seed Pinterest catalog into MongoDB ââââââââââââââââââââââââââ
Parse.Cloud.define("adminSeedPinterestCatalog", async (request) => {
  if (!request.master) await requireAdmin(request);

  const catalog = [
    { name:"MacBook Pro M3",           category:"Laptops",      priceRWF:1688700, origRWF:2078700, badge:"BESTSELLER", tag:"Best", image:"https://i.pinimg.com/736x/af/34/c7/af34c7994d879f7ecdbc9f0f8f7cd0bb.jpg" },
    { name:"Dell XPS 15 OLED",         category:"Laptops",      priceRWF:1428700, origRWF:1818700, badge:"HOT",        tag:"Hot",  image:"https://i.pinimg.com/736x/23/6a/33/236a33e8f4e0e2f6e82fcb18b9786cdb.jpg" },
    { name:"Lenovo ThinkPad X1",       category:"Laptops",      priceRWF:1168700, origRWF:1558700, badge:"SALE",       tag:"Sale", image:"https://i.pinimg.com/736x/1a/5e/c3/1a5ec3e7b1fedc1fbfacda9e6c29a5f8.jpg" },
    { name:"HP Spectre x360",          category:"Laptops",      priceRWF:1558700, origRWF:1948700, badge:"NEW",        tag:"New",  image:"https://i.pinimg.com/736x/e2/04/5b/e2045b7de3ab88e63f97e3ef3e5de6e1.jpg" },
    { name:"iPhone 15 Pro Max",        category:"Smartphones",  priceRWF:1558700, origRWF:1688700, badge:"BESTSELLER", tag:"Best", image:"https://i.pinimg.com/736x/93/a0/68/93a068f4acaf4d4ac5c4991124c596cb.jpg" },
    { name:"Samsung Galaxy S24 Ultra", category:"Smartphones",  priceRWF:1298700, origRWF:1558700, badge:"HOT",        tag:"Hot",  image:"https://i.pinimg.com/736x/c3/d3/90/c3d3902937f5262e73fca7a8f5831829.jpg" },
    { name:"Google Pixel 8 Pro",       category:"Smartphones",  priceRWF:1038700, origRWF:1298700, badge:"SALE",       tag:"Sale", image:"https://i.pinimg.com/736x/46/6e/c0/466ec0095a6787c4c7f753fd8724f51e.jpg" },
    { name:"OnePlus 12 Pro",           category:"Smartphones",  priceRWF:713700,  origRWF:908700,  badge:"NEW",        tag:"New",  image:"https://i.pinimg.com/736x/48/21/a7/4821a73ea6b5df6c7f45c90a541f6e8f.jpg" },
    { name:"PlayStation 5 Console",    category:"Gaming",       priceRWF:648700,  origRWF:778700,  badge:"BESTSELLER", tag:"Best", image:"https://i.pinimg.com/736x/53/2e/5f/532e5fc84f4ca4dfa1a7ab6a5234f6b2.jpg" },
    { name:"Xbox Series X",            category:"Gaming",       priceRWF:583700,  origRWF:713700,  badge:"HOT",        tag:"Hot",  image:"https://i.pinimg.com/736x/a3/c7/36/a3c736818fd5324d95d998231ec8d731.jpg" },
    { name:"Razer Gaming Headset",     category:"Gaming",       priceRWF:193700,  origRWF:258700,  badge:"SALE",       tag:"Sale", image:"https://i.pinimg.com/736x/95/6b/9d/956b9d18cf8de9074a46de4549f59c6b.jpg" },
    { name:"Mechanical Keyboard RGB",  category:"Gaming",       priceRWF:115700,  origRWF:167700,  badge:"NEW",        tag:"New",  image:"https://i.pinimg.com/736x/8b/a5/57/8ba5578d17bf3124a0cad5bf99f03865.jpg" },
    { name:"Designer Leather Jacket",  category:"Fashion",      priceRWF:323700,  origRWF:518700,  badge:"SALE",       tag:"Sale", image:"https://i.pinimg.com/736x/19/f1/aa/19f1aa6f5a4b1cc2f63ec2d45ce4c0bf.jpg" },
    { name:"Premium Running Shoes",    category:"Fashion",      priceRWF:167700,  origRWF:245700,  badge:"HOT",        tag:"Hot",  image:"https://i.pinimg.com/736x/6b/7c/62/6b7c620c2f1a4c8f31c9694de46f957f.jpg" },
    { name:"Classic Denim Jeans",      category:"Fashion",      priceRWF:102700,  origRWF:154700,  badge:"BESTSELLER", tag:"Best", image:"https://i.pinimg.com/736x/c1/1a/84/c11a849a686e44b2e1f37f0f8168aa52.jpg" },
    { name:"Summer Floral Dress",      category:"Fashion",      priceRWF:76700,   origRWF:115700,  badge:"NEW",        tag:"New",  image:"https://i.pinimg.com/736x/74/8d/59/748d59fa677fe96653f5c58b2f3f72f0.jpg" },
    { name:"Apple Watch Ultra 2",      category:"Watches",      priceRWF:1038700, origRWF:1298700, badge:"BESTSELLER", tag:"Best", image:"https://i.pinimg.com/736x/0c/0d/74/0c0d74991ed4a13089fe7244ec2f6ddf.jpg" },
    { name:"Samsung Galaxy Watch 6",   category:"Watches",      priceRWF:427700,  origRWF:557700,  badge:"HOT",        tag:"Hot",  image:"https://i.pinimg.com/736x/b6/8e/67/b68e6753ef87d95e2cf6b0070c4483df.jpg" },
    { name:"Garmin Fenix 7 Pro",       category:"Watches",      priceRWF:908700,  origRWF:1103700, badge:"SALE",       tag:"Sale", image:"https://i.pinimg.com/736x/66/42/ab/6642ab88bff8947c3df0c363f6a95f7b.jpg" },
    { name:"Fossil Gen 6 Smartwatch",  category:"Watches",      priceRWF:323700,  origRWF:427700,  badge:"NEW",        tag:"New",  image:"https://i.pinimg.com/736x/13/f8/78/13f8781b95ee8df66cbf96817797fef8.jpg" },
    { name:"Amazon Echo Show 15",      category:"Smart Home",   priceRWF:323700,  origRWF:427700,  badge:"HOT",        tag:"Hot",  image:"https://i.pinimg.com/736x/5f/74/75/5f7475562f8f8d4e90f6de83d4a42f20.jpg" },
    { name:"Google Nest Hub Max",      category:"Smart Home",   priceRWF:258700,  origRWF:349700,  badge:"SALE",       tag:"Sale", image:"https://i.pinimg.com/736x/d7/3e/b3/d73eb358d9d95a36f0f0598ca6f7db8b.jpg" },
    { name:"Philips Hue Starter Kit",  category:"Smart Home",   priceRWF:193700,  origRWF:258700,  badge:"BESTSELLER", tag:"Best", image:"https://i.pinimg.com/736x/8a/46/f9/8a46f9752a85faaaf3bd08be797fe9ca.jpg" },
    { name:"Ring Video Doorbell Pro",  category:"Smart Home",   priceRWF:258700,  origRWF:323700,  badge:"NEW",        tag:"New",  image:"https://i.pinimg.com/736x/1e/bf/ce/1ebfce4290103075f53cf4f8f815fc4a.jpg" },
    { name:"Sony WH-1000XM5",          category:"Accessories",  priceRWF:453700,  origRWF:583700,  badge:"BESTSELLER", tag:"Best", image:"https://i.pinimg.com/736x/85/bf/43/85bf43c325efb4f8d7077f4d9f13e91e.jpg" },
    { name:"Apple AirPods Pro 2nd",    category:"Accessories",  priceRWF:323700,  origRWF:388700,  badge:"HOT",        tag:"Hot",  image:"https://i.pinimg.com/736x/8f/f7/21/8ff7212f0e4f95dbe8d1298f8f4fca34.jpg" },
    { name:"iPad Pro 12.9\" M2",       category:"Accessories",  priceRWF:1428700, origRWF:1688700, badge:"SALE",       tag:"Sale", image:"https://i.pinimg.com/736x/1f/79/f8/1f79f8d03d89fc17f41f08f8f0c1fd5a.jpg" },
    { name:"USB-C 100W GaN Charger",   category:"Accessories",  priceRWF:63700,   origRWF:102700,  badge:"NEW",        tag:"New",  image:"https://i.pinimg.com/736x/3e/c6/b1/3ec6b1708f1df745b4dd8afd95f4f8a2.jpg" },
  ];

  const Product = Parse.Object.extend("Product");
  let created = 0, updated = 0;
  for (const item of catalog) {
    const q = new Parse.Query("Product");
    q.equalTo("name", item.name);
    let obj = await q.first({ useMasterKey: true });
    if (!obj) { obj = new Product(); created++; } else { updated++; }
    obj.set("name",     item.name);
    obj.set("category", item.category);
    obj.set("priceRWF", item.priceRWF);
    obj.set("origRWF",  item.origRWF);
    obj.set("discount", Math.max(0, Math.round((1 - item.priceRWF / item.origRWF) * 100)));
    obj.set("rating",   4.6);
    obj.set("reviews",  120);
    obj.set("badge",    item.badge);
    obj.set("tag",      item.tag);
    obj.set("image",    resolveProductImageByName(item.name, item.category, item.image));
    obj.set("isActive", true);
    await obj.save(null, { useMasterKey: true });
  }
  return { success: true, total: catalog.length, created, updated };
});

// ââ beforeLogin: block check âââââââââââââââââââââââââââââââââââââ
Parse.Cloud.beforeLogin(async (request) => {
  if (request.object.get("blocked")) {
    throw new Parse.Error(Parse.Error.OPERATION_FORBIDDEN, "Your account has been suspended. Contact: +250786540493");
  }
});