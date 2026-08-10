# Jolly Nail Printing — jollynailprinting.com.au

Three-page static site for a self-serve nail-art printing vending machine business.
No build step, no dependencies — plain HTML, one stylesheet, one small JS file.

```
index.html        Home: hero, how it works, the machine, designs, locations, socials
nails.html        Nail designs: what it prints on, shapes, design families, aftercare
locations.html    Machine locations, host-a-machine, and the rules & regulations (#rules)
css/style.css     All styling
js/main.js        Sticky header, mobile menu, scroll reveal (site works without it)
assets/           Logo, circular badge, favicons
```

## Before this goes live — things to replace

Everything below is a placeholder. Each one is marked in the HTML with a
`<!-- ⇩ REPLACE ... -->` comment directly above it.

### 1. Social media links — client asked for Facebook, TikTok and Instagram

The handles were never supplied, so every social link is currently `href="#"`.
There are six to update (three in the footer of each page, three in the social
row on the home page). Search all three HTML files for:

```
href="#"
```

Replace with the real profile URLs, e.g. `https://www.instagram.com/jollynailprinting/`.

### 2. Email address

A placeholder address is used in five places. Search all three HTML files for:

```
hello@jollynailprinting.com.au
```

It also appears once inside the JSON-LD block at the top of `index.html`.
If a phone number should be shown too, add it to the **Contact** list in each footer.

### 3. Machine locations

The three venue cards in `locations.html` use **invented venue names and addresses**
as placeholders. For each one, replace:

- the `<h3>` venue name
- the `<address>` (venue line, then suburb / state / postcode)
- the `Hours`, `Finding it` and `Payment` values in the `<dl>`
- the Google Maps link — only the `query=` part needs changing

Status badge: `class="venue__status"` shows a green dot and "Now printing".
Add `venue__status--soon` for a machine that is on the way, and change the
label text to suit. Copy or delete a whole `<article class="venue">` block to
add or remove machines — the grid reflows on its own.

### 4. Figures worth confirming

These read as claims on the site and should match what the machines actually do:

- Home page facts strip: **10** nails per session, **100+** designs, no booking, tap payment
- "Sitting" spec: around **10–15 minutes** for a full set
- Nothing on the site quotes a price. Add one if wanted — the facts strip is the natural spot.

## Custom domain

The site is currently served from GitHub Pages. To move it to
`jollynailprinting.com.au`:

1. Add a file called `CNAME` in the repo root containing exactly:
   `jollynailprinting.com.au`
2. At the domain registrar, point the apex A records to GitHub's IPs
   (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153) and
   add a CNAME for `www` to the GitHub Pages host.
3. In the repo's Settings → Pages, set the custom domain and tick "Enforce HTTPS".

All canonical URLs, Open Graph tags and `sitemap.xml` already point at
`https://jollynailprinting.com.au/`, so nothing else needs editing.

## Local preview

```bash
python3 -m http.server 8412
```

Then open http://localhost:8412.

## Notes

- Responsive from 320px up; the mobile menu takes over below 900px.
- Respects `prefers-reduced-motion` — all animation is dropped for those users.
- The brand mark supplied by the client is in `assets/`. `logo-badge.png` is the
  circular emblem cut out with a transparent background, used in the header and
  footer; `jolly-nail-printing-logo.jpg` is the full supplied artwork, used in
  the hero and as the social share image.
