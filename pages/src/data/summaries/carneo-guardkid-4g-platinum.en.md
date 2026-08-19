---
slug: carneo-guardkid-4g-platinum
lang: en
name: CARNEO GuardKid+ 4G Platinum
verdict_line: "Buyable and app-ready in Romania, but ~400 owner reviews say positioning routinely errs by 2-15 km."
---

## Verdict

Sold and app-ready in Romania; owners agree calling works. But across ~400 Czech/Slovak reviews the dominant finding is unreliable positioning: 2-15 km errors are routine; the fixes (switch AGPS off its "Asian" default; disable WiFi positioning) are owner lore.

## Does it work in Romania?

Status: likely, tier 3. Confirmed 2026-08-19: app live on Google Play RO and Apple RO; registration is email/password only (no +40 gate); plain nanoSIM, no vendor SIM. Missing: a dated Romanian owner (zero eMAG reviews) and a live +40 SIM test.

## Connectivity

B20 is published but unverified: the band string is copy-pasted across CARNEO's 4G line and the CE/RED DoC lists no cellular standard. B28A is moot (Romanian 700 MHz is 5G NR n28). VoLTE: UNKNOWN. Voice fallback: UNKNOWN, most plausibly 2G CSFB; prefer Orange or Digi.

## Positioning

GPS, WiFi, LBS only (no Galileo/GLONASS/BeiDou), falling back silently: WiFi up to 300 m, LBS up to several kilometres, per the manual. Observed: poor, with outliers at 300 km and "Hong Kong", and one geofence alert min. 10 km late.

## Battery

1000 mAh. Claimed: "4 days"/"up to 96 hours"; the manual says 24-72 h at the 10-minute interval. Observed: ~30 hours, a single test (itmix.cz, 2025-04-14, 10-min interval, night-disconnect on). Owner reports: ~15.8 h to ~96 h. A 9.5 h school day clears, barely; charge nightly.

## Buying

eMAG.ro (marketplace seller HomeMode): 565.52 RON black/pink, 707.65 RON blue, in stock 2026-08-19; 14-day return; 24-month OUG 140/2021 warranty. Also irisimo.ro, tonerpartner.ro. EUR 155 list is stale (CZ shop: 2,150 CZK).

## Watch out for

Rebadged SETracker/TGELEC platform (ARES 2020: unauthenticated, SQL-injectable backend), named among 39 brands at DEF CON 34, August 2026. Its privacy policy claims Frankfurt servers yet lists AutoNavi and Chinese ad-tech SDKs, contradicting Play's Data safety card. Covert remote listen and SOS cannot be disabled; SOS false-triggers in schoolbags. App: 2.7/5 (~1,110 ratings), 10-hour login lockouts; warranty claims repeatedly rejected.

## Sources

- [Vendor manual (CZ PDF)](https://www.carneo.cz/user/documents/upload/podpora/navody/CARNEO-GuardKid+4G_PL-manual-CZ.pdf) — accessed 2026-08-19
- [carneo.eu product page](https://www.carneo.eu/en/product/smart-watch-carneo-guardkid-4g-platinum-black/) — accessed 2026-08-19
- [EU Declaration of Conformity, LD-01, 7.11.2022](https://www.carneo.cz/user/documents/upload/podpora/vyhlaseni-o-zhode/carneo_GuardKid-plus_4G_Platinum_prehlasenie-o-zhode-cz.pdf) — retrieved 2026-08-19
- [itmix.cz hands-on test](https://www.itmix.cz/recenze/chytre-hodinky/carneo-guardkid-4g-platinum/) — updated 2025-04-14
- [Alza.cz owner reviews, pooled 3.7/5 from 328 ratings](https://www.alza.cz/recenze/carneo-guardkid-4g-platinum-blue-7721534.htm) — accessed 2026-08-19
- [Heureka.cz owner reviews and Q&A](https://chytre-hodinky.heureka.cz/carneo-guardkid-plus-4g-platinum/) — accessed 2026-08-19
- [Google Play RO storefront](https://play.google.com/store/apps/details?id=com.tgelec.carneoguard&gl=RO&hl=ro) — accessed 2026-08-19
- [Apple App Store RO listing](https://apps.apple.com/ro/app/carneo-guard/id1552178771) — accessed 2026-08-19
- [eMAG.ro listing, black](https://www.emag.ro/smartwatch-pentru-copii-carneo-guardkid-4g-platinum-negru-8588007861579/pd/DSX6NVYBM/) — accessed 2026-08-19
- [CARNEO GUARD privacy policy](https://www.carneo.sk/user/documents/appguard/privacy-en.htm) — retrieved 2026-08-19
- [STALK, ARES 2020, Saatjohann et al.](https://www.hb.fh-muenster.de/opus4/frontdoor/deliver/index/docId/12354/file/Saatjohann_et_al-2020-STALK.pdf) — accessed 2026-08-19
- [Notebookcheck on DEF CON 34, "Tracking the Trackers"](https://www.notebookcheck.net/Your-child-s-GPS-watch-tells-everyone-where-they-are.1367794.0.html) — accessed 2026-08-19
