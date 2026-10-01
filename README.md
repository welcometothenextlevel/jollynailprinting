# Jolly Nail Printing — jollynailprinting.com.au

Three-page static site for a self-serve nail-art printing vending machine business.
No build step, no dependencies — plain HTML, one stylesheet, one small JS file.

```
index.html        Home: hero, machine videos, how it works, the machine, designs, locations, socials
nails.html        Nail designs: what it prints on, shapes, design families, aftercare
locations.html    Machine locations, host-a-machine, and the rules & regulations (#rules)
css/style.css     All styling
js/main.js        Sticky header, mobile menu, scroll reveal (site works without it)
assets/           Logo, favicons, supplied machine videos, and nail photography
```

## Before this goes live — things to replace

### 1. Social media links

Supplied by the client on 16 September 2026 and wired into every footer, the
home page "Follow along" row and the JSON-LD `sameAs` list:

- Instagram: https://www.instagram.com/ygshopy/
- TikTok: https://www.tiktok.com/@johnny7777740

- Facebook: https://www.facebook.com/jollyshop77 (sent 1 October 2026)

### 1b. Google Analytics

Set `GA_ID` at the top of `js/main.js` to the GA4 measurement ID (`G-XXXXXXXXXX`).
While it is empty nothing is loaded.

### 1c. Google search

The domain went live on 1 October 2026 (GoDaddy A records -> GitHub Pages,
`CNAME` file in the repo, HTTPS enforced). Canonical tags, Open Graph URLs,
`sitemap.xml` and `robots.txt` all point at `https://jollynailprinting.com.au/`.

Still to do: add the property in Google Search Console and submit
`https://jollynailprinting.com.au/sitemap.xml`. Verification needs either the
client's Google account or a `google-site-verification` meta tag in `index.html`.

### 2. Email address

The client supplied this address on 1 September 2026. It is used in the footers,
contact buttons and JSON-LD:

```
jollynailprinting@gmail.com
```

It also appears once inside the JSON-LD block at the top of `index.html`.
If a phone number should be shown too, add it to the **Contact** list in each footer.

### 3. Machine locations

The WhatsApp chat says the exact mall address is on hold until confirmed, so
`locations.html` currently uses a clear "coming soon" launch state. Once the
mall is confirmed, replace:

- the `<h3>` venue name
- the `<address>` (venue line, then suburb / state / postcode)
- the `Hours`, `Finding it` and `Payment` values in the `<dl>`
- the mail/update link with a Google Maps link for the confirmed venue

Status badge: `class="venue__status"` shows a green dot and "Now printing".
Add `venue__status--soon` for a machine that is on the way, and change the
label text to suit. Copy or delete a whole `<article class="venue">` block to
add or remove machines — the grid reflows on its own.

### 4. Videos

The five videos supplied in the WhatsApp export are copied into:

```
assets/media/
```

They are embedded on the home page in the `#videos` section.

The requested nail and finger photography is stored in `assets/nails/`. The
homepage uses it in the catalogue cards and the nail page uses it for the seven
named cat-eye and white-base sets.

### 5. Figures worth confirming

These read as claims on the site and should match what the machines actually do:

- Home page facts strip: **30 pieces** in a full set, **100+** designs, no booking, cash or card
- "Sitting" spec: around **6 minutes** for a full 30-piece nail set
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
