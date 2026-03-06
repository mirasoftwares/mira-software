# Mira Software Solutions — Company Website

Official website for [Mira Software Solutions](https://mirasoftware.co.za) — a cloud-native software engineering company based in Johannesburg, South Africa.

## Live Site

> https://mirasoftware.co.za

---

## Tech Stack

- Pure HTML5, CSS3, Vanilla JS — no frameworks, no build tools
- Hosted on GitHub Pages
- Contact form powered by [Formspree](https://formspree.io)
- Fonts via Google Fonts (Syne + DM Sans)

---

## Project Structure

```
mira-software-solutions/
├── index.html              # Main page
└── assets/
    ├── css/
    │   └── style.css       # All styles
    ├── js/
    │   └── script.js       # Navbar, scroll reveal, form handling
    └── logos/
        ├── Logo.png         # Full logo (horizontal)
        └── Mira_Logo_1.png  # Icon only
```

---

## Local Development

No build step needed. Just open `index.html` in your browser or use a local server:

```bash
# Using VS Code Live Server extension (recommended)
# Or with Python
python3 -m http.server 8080
```

Then visit `http://localhost:8080`

---

## Contact Form Setup (Formspree)

The contact form submits to Formspree. To activate:

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form and connect `info@mirasoftware.co.za`
3. Copy your form ID (e.g. `xpwzabcd`)
4. Open `assets/js/script.js` and replace:
   ```js
   const FORMSPREE_ID = 'YOUR_FORM_ID';
   ```

---

## Deployment (GitHub Pages)

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to **Deploy from branch → main → / (root)**
4. Site will be live at `https://<your-username>.github.io/<repo-name>`

To use a custom domain (`mirasoftware.co.za`):
1. Add a `CNAME` file to the repo root containing your domain
2. Configure your DNS — add a `CNAME` record pointing to `<your-username>.github.io`

---

## License

Copyright © 2025 Mira Software Solutions. All rights reserved. See [LICENSE](./LICENSE).
