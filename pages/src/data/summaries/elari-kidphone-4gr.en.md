---
slug: elari-kidphone-4gr
lang: en
name: Elari KidPhone 4GR
verdict_line: "Bands fit Romania (B20 confirmed), but owner-reported ~10 h battery and a vendor that skips Romania. Reject."
---

## Verdict

Reject. 580 mAh with owner reports clustering at ~10 h fails the one-school-day floor; Romania is absent from Elari's store markets; the bigger of two near-identical companion apps is published from Moscow.

## Does it work in Romania?

Tier 2: the SafeFamily app is live, Romanian-localised, in the RO Play storefront (EU build, 2026-03-24). But Elari's webshop lists four markets (20 countries) and Romania appears zero times — Poland and Czechia are in. +40 registration: UNKNOWN; the registration help page returns HTTP 404.

## Connectivity

LTE B1/B3/B7/B8/B20, 2G 900/1800, plain nanoSIM (Elari's manual). B20, the indoor/rural band for Romania, is present; B28 is absent but costs nothing there. VoLTE: UNKNOWN, leaning negative (unmentioned in the manual; `"volte": false` at imei.info for sibling KidPhone 4G) — voice likely falls back to 2G CSFB. No indoor-signal owner report exists.

## Positioning

GPS, GLONASS, Wi-Fi, LBS. Elari's manual: GPS 5-10 m, Wi-Fi 50-100 m, LBS 500-5000 m — indoors without Wi-Fi a fix can land kilometres out, nothing flagging the source. Three negative 2022 reports versus one 3-5 m measurement (2020); none newer.

## Battery

Claimed: up to 72 hours standby (manual; TradeInn: 48 h); no vendor active-use figure exists. Capacity: 580 mAh (manual EN/RU) vs 620 mAh (DE/FR/ES/IT) — unresolved. Observed, 2022-2023: reports of ~10 h and daily charging versus two of about two days; no usage profiles stated.

## Buying

€119 at TradeInn/Kidinn (ES), ships to Romania, 30-day return; RON price from 2026-08-18, not re-verified. Elari's store: sold out, model discontinued.

## Watch out for

- Two near-identical RO Play apps: the prominent one is published from Moscow — install "ELARI SafeFamily for parents" (`com.wherecom.elarisafefamily_eu`).
- Covert remote listening has no documented off switch — nor do SOS audio, camera, or games.
- Privacy policy admits transfers to countries without sufficient EU-law protection; server location unnamed.
- Both listings still link to kidgram.org, now a gambling site.

## Sources

- [Elari KidPhone 4GR Multilingual User Manual (PDF, hosted by Elisa.ee)](https://www.elisa.ee/files/eraklient/apid-ja-lisateenused/ponniradar/Elari_Kidphone_4GR_kasutusjuhend.pdf) — bands, battery, standby, accuracy; accessed 2026-08-19
- [elari.tech — Privacy Policy](https://elari.tech/pages/privacy-policy) — market configuration, data-transfer admission; accessed 2026-08-19
- [elari.tech — KidPhone 4GR product page](https://www.elari.tech/products/kidphone-4gr) — €119.00, sold out; accessed 2026-08-19
- [Google Play — ELARI SafeFamily for parents (EU build), RO storefront](https://play.google.com/store/apps/details?id=com.wherecom.elarisafefamily_eu) — updated 2026-03-24; accessed 2026-08-19
- [Google Play — ELARI SafeFamily (Moscow build), RO storefront](https://play.google.com/store/apps/details?id=com.wherecom.elarisafefamily) — updated 2026-08-13; accessed 2026-08-19
- [onliner.by — owner reviews](https://catalog.onliner.by/smartwatch/elari/kidphone4black/reviews) — ten dated reviews, 2022-09 to 2024-08
- [vilianov.com — review](https://vilianov.com/gadgets-mobile/obzor-elari-kidphone-4gr-detskie-chasy-s-sim-kartoy-na-maksimalkah/) — 2020-10-26 (older source)
- [imei.info — Elari KidPhone 4G (sibling model)](https://www.imei.info/phonedatabase/elari-kidphone-4g/) — band map, `"volte": false`
- [TradeInn / Kidinn — KidPhone 4GR](https://www.tradeinn.com/kidinn/en/elari-kidphone-4gr-smartwatch/139880660/p) — price, 48 h standby, 30-day return; accessed 2026-08-19
