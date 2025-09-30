# Donne Sotto le Stelle - Next.js project

This is a ready-to-deploy Next.js project styled with Tailwind. Theme: dark blue / purple, starry background and gothic aesthetic. All user-facing texts are in Italian.

## How booking works (important)
- When a user submits the booking form, the site sends a POST request to `/api/contact`.
- The API uses **nodemailer** and SMTP settings (configured via environment variables) to **send an email** to the address set in `EMAIL_TO` (by default `donnesottolestelle25@gmail.com` in `.env.example`).
- The WhatsApp button opens a chat with a prefilled message for the user; it **does not send** messages automatically. If you want automatic WhatsApp notifications (so that booking triggers an automatic WhatsApp message to you), you need a third-party service such as Twilio/WhatsApp Business API. See below for options.

## To deploy on Vercel
1. Push this repository to GitHub.
2. Create a new project on Vercel and connect the repo.
3. Add environment variables in Vercel settings (Environment Variables):
   - SMTP_HOST
   - SMTP_PORT
   - SMTP_USER
   - SMTP_PASS
   - EMAIL_TO (e.g. donnesottolestelle25@gmail.com)
   - NEXT_PUBLIC_WHATSAPP_NUMBER (e.g. 393756248786)
4. Deploy. Vercel will install dependencies and build the site.

## Optional: Automatic WhatsApp notifications
If you want the booking to also trigger an automatic WhatsApp message to your phone, you can integrate:
- Twilio + WhatsApp API (paid service) — you can send messages server-side when booking happens.
- Use a no-code service (Make/Make.com, Zapier) to catch the webhook and send a WhatsApp message.

If you want, I can add a Twilio example endpoint that sends a WhatsApp message when a booking is made — you'll need a Twilio account and credentials.

## Files to edit
- `public/logo.jpg` — replace with final logo (your uploaded image is already included).
- `pages/api/contact.js` — email sending logic.
- `pages/index.jsx` — content and text.

## Notes
- Keep your SMTP credentials secret; set them in Vercel env vars and **do not** commit `.env` to git.
- If you need me to set up the Twilio flow or a Calendly / Google Calendar sync, tell me and I'll add it.
