---
slug: wingereich-4g
lang: en
name: Wingereich 4G (D-023 / D-011)
verdict_line: "Verified in Romania (Digi, Vodafone, YOXO), but GPS is a coin flip, QC is weak, and DEF CON 34 broke the backend."
---

## Verdict

A Romanian marketplace label on Wonlex-family OEM hardware — two watches, one name: D-023 (1.91" Super AMOLED), D-011 (1.4" IPS). Verified in Romania, but positioning is a coin flip, no owner backs battery claims, and DEF CON 34 broke the backend.

## Does it work in Romania?

Verified: ~11 named Digi owners, one Vodafone (18 Jul 2025) and one YOXO/Orange (24 Aug 2025) working. An earlier YOXO failure resolved as setup (configure over the SIM's mobile data).

## Connectivity

No LTE band list or CE/RED declaration exists anywhere, so B20 is UNKNOWN; units bought a year apart may not share a radio. A VoLTE toggle exists but broke in practice: one owner's two units had garbled, one-way audio; the seller's fix: disable VoLTE (11 May 2026). Voice de facto rides 2G/CSFB.

## Positioning

Vendor-stated GPS+AGPS+LBS+WiFi; no Galileo/GLONASS/BeiDou claimed. Owners split: 10–15 m / ±5 m fixes with working geofences versus 3 km, 10 km, "Venezuela", "China" (twice), home-wifi-only. Failure is silent: a pin, never an error.

## Battery

Claimed: D-023 900 mAh, up to 168 h; D-011 700 mAh, "minim 3 zile". Observed (full pool, 2026-08-19): D-023 skews hours-to-one-day (4–5 h ×2 units), 2–3 days only monitoring-only; D-011 2–3 days light use, but 7 h sensors-on / 4 h continuous monitoring. 168 h: zero corroboration in 676 texts.

## Buying

eMAG.ro marketplace, seller "Sweinsteiger Db Group FBE" (Romanian SRL, 24-month legal conformity guarantee): D-023 399.98 RON, D-011 379.94 RON (~80 EUR approx.), retrieved 2026-08-19.

## Watch out for

DEF CON 34 (2026-08-08) demonstrated location spoofing, message interception, silent listening, camera triggering on the SETracker backend (Alibaba Cloud, China); no verified fix. "Monitorizare spion" (covert listening) is advertised; no documented lock. Dead or replaced units: ~23 of 676 texts (a floor); a warranty replacement failed identically. Google Play needs an adult account. A 5★ owner: too big for her 6-year-old; recommends 8+.

## Sources

- [eMAG listing, D-023 (DQVXVGYBM)](https://www.emag.ro/ceas-smartwatch-copii-gps-4g-google-play-whatsapp-tiktok-instagram-youtube-facebook-camera-hd-wingereich-tm-localizare-gps-telefon-apel-video-hd-super-amoled-wifi-bluetooth-apa-ip67-android-ios-sos-mo/pd/DQVXVGYBM/) — reviews, Q&A, specs, price; accessed 2026-08-19
- [eMAG listing, D-011 (DVXCJDYBM)](https://www.emag.ro/ceas-smartwatch-copii-gps-4g-wingereich-tm-whatsapp-localizare-gps-apel-video-hd-telefon-wifi-agps-lbs-lte-camera-apa-ip67-android-ios-bluetooth-sos-monitorizare-spion-albastru-d-011/pd/DVXCJDYBM/) — reviews, Q&A, specs, price; accessed 2026-08-19
- [wingereich.com contact page](https://www.wingereich.com/contact) — brand operator identity (SWEINSTEIGER DB GROUP S.R.L.); accessed 2026-08-19
- [wingereich.com D-011 page](https://www.wingereich.com/smartwatch-pentru-copii-wingereich-cu-gps-4g-si-whatsapp-albastru-d-011) — brand-shop specs, 330.99 RON; accessed 2026-08-19
- [Notebookcheck on "Tracking the Trackers", DEF CON 34](https://www.notebookcheck.net/Your-child-s-GPS-watch-tells-everyone-where-they-are.1367794.0.html) — article dated 2026-08-14
- [STALK: Security Analysis of Smartwatches for Kids, ARES 2020](https://www.hb.fh-muenster.de/opus4/frontdoor/index/index/docId/12354) — 2020-08-11 (older source)
