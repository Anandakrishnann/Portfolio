# Anandha Krishnan Portfolio

Modern React portfolio with black/white base theme, colorful accents, smooth animations, project showcase cards, and EmailJS-powered contact form.

## Run locally

```bash
npm install
npm run dev
```

## Contact form setup (EmailJS)

1. Create an account at [EmailJS](https://www.emailjs.com/).
2. Create:
   - one Email Service
   - one Email Template
   - one Public Key
3. Copy `.env.example` to `.env`.
4. Fill these values in `.env`:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
5. In your EmailJS template, use fields:
   - `from_name`
   - `reply_to`
   - `message`

Now all contact form submissions will be sent to your configured email.

## Customize content

- Add your profile photo in `src/App.jsx` by replacing the photo placeholder block.
- Add project thumbnail images by replacing each `"Project Thumbnail Space"` area in `src/App.jsx`.
- Update text and links directly in `src/App.jsx` to keep your portfolio fresh.
