# Mira Software Solutions website

The company website for [Mira Software Solutions (Pty) Ltd](https://mirasoftware.co.za), Johannesburg, South Africa.

## How it is built

- Plain HTML, CSS and a small amount of JavaScript. No framework and no build step.
- Hosted on GitHub Pages. A merge to `main` publishes the site within about a minute.
- The contact form posts to Web3Forms, which delivers messages to the company inbox.
- Fonts come from Google Fonts: Sora for headings, Hanken Grotesk for body text.

## Structure

```
index.html            Home page
404.html              Page not found
terms/                Terms of service
privacy/              Privacy policy
refunds/              Refunds and cancellations
delivery/             Delivery of services
security/             Security
complaints/           Complaints
assets/css/style.css  All styles
assets/js/script.js   Mirwe channel tabs and the contact form
assets/logos/         Logo mark and favicon
assets/img/           Share image and square logo
robots.txt, sitemap.xml
CNAME                 Custom domain (mirasoftware.co.za)
```

The policy pages cover Mira Software Solutions and this website only. Mirwe has its own terms and privacy policy on mirwe.com.

## Run it locally

Paths are root-relative, so serve the folder instead of opening the file:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## License

Copyright © 2026 Mira Software Solutions (Pty) Ltd. All rights reserved. See [LICENSE](./LICENSE).
