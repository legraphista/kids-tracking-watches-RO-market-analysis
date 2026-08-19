---
slug: garett-kids-4g
lang: en
name: Garett Kids Twin 2 4G
verdict_line: "B20 and a 24-month warranty, but a 2.33-star app, no Galileo, and voice in Romania is still unverified."
---

## Verdict

Garett publishes its radio bands — B20 present, B28 absent — plus a Romanian manual and a 24-month warranty. The risk is the software: an app at 2.33/5 on Play and 1.70/5 on iOS, and a watch designed to prefer cell towers to GPS.

## Does it work in Romania?

Likely, tier 3. GARETT sells first-party on eMAG.ro, plus a Romanian manual and warranty card; the app is live on the Romanian Play storefront. Three Romanian reviews exist across all 30 eMAG listings, and no Romanian user has ever reported a voice call. Registration is e-mail-based with no country picker; support answers Romanians in Polish.

## Connectivity

LTE 800/900/1800/2100/2600 MHz — B20, B8, B3, B1, B7, per the manual's RED statement. B20, the band that decides indoor and rural coverage, is present; B28 is absent (irrelevant in Romania). VoLTE: UNKNOWN — Garett claims nothing, and its own support told an owner to disable it. Voice realistically rides 2G CSFB: pair with Orange or Digi, at risk when either retires 2G.

## Positioning

GPS, AGPS, LBS, Wi-Fi; single-band L1, no Galileo (silicon-confirmed, UNISOC SL8521E); GLONASS/BeiDou inferred, unclaimed. It tries Wi-Fi first, LBS second, GPS only out of LBS range — even outdoors. Positions wrong by 100 m to 200 km are reported; geofences fire an hour late or falsely, dozens a day.

## Battery

Claimed: 900 mAh, typical up to 1 day in Garett's spec table (the 1-minute Follow-mode figure); eMAG markets up to 3 days — roughly the Saving-mode figure. Observed: 48 h — four Twin 2 owners report ~2 days, interval never stated; one outlier failed before evening. Runtime at 1-minute tracking is unobserved.

## Buying

Checked 2026-08-19: sold by GARETT on eMAG.ro, 423.75 RON (€80.81), 14-day return; Polish street price is 279.99 zł (€64.83) — a +25% premium that buys the warranty under Romanian consumer law.

## Watch out for

Named on the DEF CON 34 "39 brands, one server" slide; the CVEs name only the sibling SeTracker app. The Frankfurt endpoint is a shared platform node; the platform's hostname points to Alibaba Cloud. Default SMS password 123456 is printed in the manual. Remote listening has no documented off switch. App passwords: 8–16 ASCII letters/digits only. Komputronik's 88 five-star reviews are fake.

## Sources

- [Garett Kids Twin 2 4G Romanian manual (PDF)](https://docs.garettelectronics.com/index.php/s/WuyUuKd5cLyQyAK) — bands, 900 mAh, intervals, default password (accessed 2026-08-19)
- [garett.com.pl Twin 2 4G product page](https://garett.com.pl/produkt/smartwatch-garett-kids-twin-2-4g-czarny/) — spec table incl. "Do 1 dnia" (2026-08-19)
- [eMAG.ro Twin 2 4G black listing](https://www.emag.ro/ceas-smartwatch-pentru-copii-garett-twin-2-gps-8gb-negru-1-8-twin-2-4g-blk/pd/D0SCRQYBM/) — 423.75 RON, sold by GARETT (2026-08-19)
- [Garett Tracker on Google Play](https://play.google.com/store/apps/details?id=com.tgelec.garetts) (2026-08-19)
- [Garett support FAQ](https://garett.com.pl/pomoc-techniczna-smartwatche-dla-dzieci/) — 2G-abroad answer, silent listening procedure (2026-08-19)
- [SeTracker2 manual — runtime per tracking mode](https://setracker.eu/how-to-use-setracker) (2026-08-19)
- [Notebookcheck on DEF CON 34 "39 brands, one server"](https://www.notebookcheck.net/Your-child-s-GPS-watch-tells-everyone-where-they-are.1367794.0.html) (2026-08-14)
- [CVE-2026-9220 (SeTracker platform)](https://vulnerability.circl.lu/vuln/cve-2026-9220) (2026)
- [GuideLee.pl Essa 4G review](https://www.guidelee.pl/recenzja/smartwatch/garett-kids-essa-4g/) (2025-05-12)
- [Media Expert Twin 2 4G — owner battery reports](https://www.mediaexpert.pl/smartfony-i-zegarki/smartwatche-i-zegarki/smartwatche/smartwatch-garett-kids-twin-2-4g-czarny) (2026-08-19)
