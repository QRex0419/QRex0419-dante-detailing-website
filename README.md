# DANTE — Premium Mobile Car Detailing (website)

A static, multi-page website. No build step — open `index.html` directly,
or serve the folder with any static file server.

## Structure

```
index.html                    Home
services.html                 Services overview
service-interior.html         Interior Detail
service-deep-interior.html    Deep Interior Detail
service-exterior.html         Exterior Detail
service-deep-exterior.html    Deep Exterior Detail
service-full.html             Full Detail
extra-treatments.html         Extra Treatments (add-ons)
coming-soon.html               Planned / currently unavailable services
how-it-works.html             The 6-step process
about.html                    About
faq.html                      FAQ
contact.html                  Contact & booking request form

assets/css/style.css          Single shared stylesheet (all design tokens, layout, components)
assets/js/main.js             Shared header/footer/nav/FAQ/form logic — nothing is duplicated per page
assets/img/                   Logo + generated SVG illustrations
```

## Rebranding (name, logo, colors, contact info)

Everything editable lives in **`assets/js/main.js`**, at the top, in the
`SITE` object:

```js
const SITE = {
  brandName: "DANTE",           // swap to "AUREX" or final name
  tagline: "Premium Mobile Car Detailing",
  logo: "assets/img/logo-mark.png", // swap in the real emblem when ready
  description: "...",
  contact: { email, phone, area, areaShort },
  social: { instagram, facebook, youtube },
};
```

Changing `brandName` updates the header and footer everywhere automatically
(the header/footer markup is injected by `main.js`, not duplicated in each
HTML file).

Navigation links/labels (including the Services dropdown) are defined in the
`NAV_LINKS` array in the same file.

## Colors & type

Design tokens are CSS custom properties at the top of `assets/css/style.css`:

```css
--c-black: #0A0A0A;
--c-white: #F5F5F5;
--c-gold:  #A88A4A;
--f-head:  'Space Grotesk', ...;
--f-body:  'Inter', ...;
```

## Prices

Every package currently shows "Pricing coming soon" placeholders
(`.price-note`, `.price-banner`). Replace the text directly in each
`service-*.html` file once pricing is finalized.

## Booking form

`contact.html` posts nowhere yet — `initBookingForm()` in `main.js` just
shows a confirmation message on submit. Wire the `<form id="booking-form">`
up to your backend/email service of choice (the `enctype`/`action` and the
submit handler are the only things to change).

## Images

Card and hero artwork are hand-drawn line-art SVGs (`assets/img/card-*.svg`,
`car-silhouette.svg`) standing in for real photography — swap the `<img>`
`src` attributes for real photos when available; the card/hero containers
are already sized and cropped for that.
