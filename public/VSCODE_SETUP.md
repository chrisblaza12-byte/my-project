# Ituze Shop â VSCode Run Guide (Ready Checklist)

Use this exact checklist to copy the project from Back4App and run it successfully in VSCode.

## 1) Required folder structure

Keep this structure exactly:

```txt
your-project/
  cloud/
    main.js
  public/
    index.html
    style.css
    app.js
    checkout.html
    checkout.js
    auth.html
    admin.html
    robots.txt
    sitemap.xml
```

> Do not rename `public/` or `cloud/`.

---

## 2) Files to INCLUDE in your ZIP

- `cloud/main.js`
- All files inside `public/` listed above

## 3) Files to EXCLUDE

- `.git/`
- `.vscode/` (optional)
- `node_modules/` (if you have one)
- OS temp files (`.DS_Store`, `Thumbs.db`)

---

## 4) Open and run in VSCode

1. Open VSCode
2. **File â Open Folder** â select `your-project`
3. Install extension: **Live Server** (Ritwick Dey)
4. Right-click `public/index.html` â **Open with Live Server**

Expected URL example:

```txt
http://127.0.0.1:5500/public/index.html
```

---

## 5) Critical run rules

- Always open from `public/index.html` (not `file://...`)
- Keep internet enabled (frontend calls Back4App cloud)
- If page is old, hard refresh: `Ctrl + F5`

---

## 6) Quick test flow

1. Register/Login
2. Add product to cart
3. Click **Proceed to Checkout**
4. Confirm URL becomes `.../public/checkout.html`
5. Fill delivery info and place order

---

## 7) If checkout still fails

Open browser DevTools (`F12`) and check Console errors.

Common fixes:
- 404 path: ensure `public/checkout.html` exists
- Wrong URL: re-open from `public/index.html`
- Cached JS: hard refresh `Ctrl + F5`
- SDK/network issue: confirm internet access

---

## 8) Before pushing to GitHub/Vercel

- Verify checkout opens from cart
- Verify login works
- Verify admin page opens only for admin
- Keep root structure unchanged

Done â
