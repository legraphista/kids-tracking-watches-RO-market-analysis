# Lens 2 — Brand / Market Sweep: 4G Kids' GPS Smartwatches usable in Europe

Compiled 2026-08-18 for a Romania (+40) use case: 7-year-old, school days, 4G-only network
(Romania has shut down 3G), Android parent app, reliable GPS/cell, at least 1 day battery.

**How to read this:** "Romania status" is the decisive column. Being *shippable* to Romania is
NOT the same as the vendor's *service/account* supporting Romania — Xplora is the proof
(sells across much of the EU, but activation is geo-gated to a supported-country list that
excludes Romania). I have separated the two everywhere I could find evidence.

**Evidence caveat:** several vendor pages (Garmin coverage table, Xplora product page, imoo
product pages, MyKi/Shelly, Spacetalk, Locon, Weenect, DEPLAY, One2track) are JavaScript-rendered
and were retrieved through the `r.jina.ai` text-extraction proxy. The canonical source URL is
given in each case. Where a fact could not be sourced it is marked **UNKNOWN** — nothing below
is guessed.

---

## SUMMARY TABLE (Romania verdict)

| Brand | Origin | Romania account/service? | Verdict |
|---|---|---|---|
| Garmin (Bounce 2) | US/TW | **YES — Romania is in Garmin's own Bounce 2 LTE coverage table**; watch sold in RO retail | Strongest documented fit |
| imoo (BBK) | CN | Ships to RO (official EU store list); RO **absent** from imoo's official supported-country page | Promising, service support unverified |
| SaveFamily | ES | Store lists "Romania (EUR €)"; no vendor statement on app/service country gating | Promising, needs registration test |
| MyKi / Allterco | BG | Dedicated **"MyKi Watch – Telekom Romania"** Android app + myki.watch/ro site | Romania-native, but brand freshness questionable |
| Wonlex / LAGENIO (SeTracker ecosystem) | CN | Sold en masse by RO retailers on Orange/Vodafone/Telekom/Digi | Works, but grey-market support |
| Angel Watch | UK/US | Unlocked, bands B1/3/7/20/28, no app subscription | Plausible; RO account support UNKNOWN |
| Xplora | NO | **NO — Romania not in supported markets** | **KILLED** |
| Spacetalk | AU | **NO — 14 regions, Romania not among them**; soft-locked to Spacetalk plans | **KILLED** |
| Fitbit/Google Ace LTE | US | **NO — LTE coverage limited to USA** | **KILLED** |
| Verizon Gizmo / T-Mobile SyncUP / AT&T amiGo | US | Carrier-locked to US networks | **KILLED** |
| Vodafone Neo | UK/DE | Service shut down Aug 2024 | **DEAD** |
| Pingonaut | DE | Insolvency Sept 2020 | **DEAD** |
| Weenect | FR | 2G-only tracker, not a 4G watch | **KILLED (no 4G)** |

---

# PART 1 — NORDIC / GERMANIC PRIVACY-FOCUSED BRANDS

## 1. Xplora (Norway) — **THE KNOWN FAILURE MODE**

- **Origin / parent:** Xplora Technologies AS, Norway. Listed company (Oslo, ISIN NO0010895782).
  Offices in Norway, Germany, the United Kingdom and Spain.
  <https://xplora.co.uk/pages/information>
- **Active in 2025-26:** Yes. Actively selling; expanded to Canada with a Bell Canada SIM in
  summer 2025. <https://support.xplora.com/hc/en-us/articles/24643300499730-Which-SIM-card-can-I-use>
- **Current 4G line-up:** X6Play (Gen2; Snapdragon Wear 2500, 5 MP camera, vendor-quoted 72 h
  battery, £109.99) and XGO3 (2 MP camera, 850 mAh, ~$150). Only these two appear in the UK
  "all products" collection alongside the XploraOne smartphone. Release years UNKNOWN from
  vendor pages.
  <https://xplora.co.uk/products/x6play> · <https://xplora.co.uk/collections/all> ·
  <https://www.phonescoop.com/articles/article.php?a=22884>
- **Companion app:** "Xplora Guardian App" (Android + iOS). A separate `Xplora` app exists on the
  US App Store. <https://apps.apple.com/us/app/xplora/id6740086849>
- **SUPPORTED COUNTRIES — verbatim from Xplora's own product page:**
  > "Xplora smartwatches support secure service and connectivity in our key markets which include
  > Norway, Sweden, Finland, Denmark, Spain, Great Britain, Germany, France, Italy, the Netherlands,
  > Hungary, Iceland, Estonia, Switzerland, Austria, and the USA."
  > "…activate your watch from the country where you purchased it or in another one of our
  > supported countries."
  <https://xplora.co.uk/products/x6play>
  A second Xplora page gives the retail footprint: "currently available for online purchase in
  Spain, Norway, Denmark, Finland, the United States, the United Kingdom, Germany, Sweden, France,
  Poland, and selected retail stores." <https://xplora.co.uk/pages/strategy-and-vision>
- **ROMANIA: ABSENT from both lists.** This is exactly the geo-block that bricked the user's X6 Play.
  Hungary and Estonia are in; Romania, Bulgaria, Czechia are not. Poland appears on the *sales*
  list but not the *service* list — a warning that the two lists differ and neither includes RO.
- **Also relevant:** Xplora states its watches "have not undergone testing in South America,
  Australia, Asia, or Africa." Premium/Activity Platform features are restricted to UK, US, ES, DE,
  FR, NO, DK, SE, FI.
  <https://support.xplora.com/hc/en-us/articles/25569193703058-The-Activity-Platform-and-Premium-Access-What-you-need-to-know>
- **Price range:** £109.99 watch + £7.99/mo Connect 12 Basic SIM (12-month term) in the UK.
- **VERDICT: KILLED for Romania** — vendor-side country gating on account activation.

## 2. Anio (Germany)

- **Origin:** Anio, developed in Bremen, Germany. GDPR-compliant, states it does not use
  third-party servers. Still active (Anio 6 is current).
  <https://anio.eu/blogs/blog/warum-die-anio-6>
- **Current model: Anio 6** — first round-cased Anio, 4G/LTE, GPS, SOS, chat, school mode,
  IP67, **no camera and no games** (deliberate), 595 mAh, vendor-quoted **24–48 h** runtime,
  €199.00. Predecessor Anio 5 still in channel. Exact release date UNKNOWN.
  <https://anio.eu/products/anio6-kids-smartwatch> ·
  <https://www.homeandsmart.de/anio-6-kinder-smartwatch-test-657303>
- **App:** "Anio App" (Android + iOS).
- **LTE bands: UNKNOWN** — not published on the product page.
- **Countries:** Free shipping stated for **DE & AT** only; a EUR locale selector covers more
  European countries but Anio publishes no supported-country/service list. The Anio 6 is sold
  bundled with a German congstar prepaid SIM or Anio's own "Bling x Anio" tariff (€5/mo, 2 GB) —
  i.e. the commercial model is German-SIM-centric. EU roaming is included on the Bling tariff.
  **Romania: not mentioned anywhere. UNKNOWN whether RO account registration works.**
- **Note:** Deutsche Telekom Germany resells it as "TELEKOM Anio Kidswatch 6" — an operator
  relationship, but a German one. <https://www.ebay.de/p/25073103225>

## 3. Pingonaut (Germany) — **DEAD**

- Munich-based; made the Kidswatch Panda (2018) and Puma (2019).
- **Filed for insolvency in September 2020**; returns of defective watches stopped being accepted
  and support for the system was discontinued. Stock still floats on Amazon/eBay — do not buy.
  <https://www.netzwelt.de/pingonaut-kidswatch/testbericht.html> ·
  <https://www.smartwatch.de/smartwatch/hersteller/pingonaut/>
- **VERDICT: DEAD BRAND. Server/service discontinued.**

## 4. Safekid (Sweden)

- **Origin:** Safekid e-handel AB, Enköping, Sweden. "Svenskt företag med svensk support."
- **Current model: Safekid Zenit** — 4G ("framtidssäker 4G klocka"), OLED screen,
  GPS+LBS+WiFi positioning, nano-SIM, camera, free video calls, **no app subscription fee**.
  Reviewed positively in Swedish press in March 2025.
  <https://safekid.se/zenit/> · <https://techsajten.se/2025/03/test-safekid-zenit/>
- **App:** "Safekid" own app, iOS + Android.
- **Distribution:** Sold through Swedish carriers **Tre (3)** and **Telenor** — a carrier-endorsed
  Swedish brand. <https://www.tre.se/handla/smartwatch/barn/safekid> ·
  <https://www.telenor.se/handla/smartwatch/safekid/safekid-zenit/>
- **Countries:** Sweden-only presence evident. Bands, battery figures and price: **UNKNOWN**
  (not published on the product page).
- **Romania: no evidence of support. Effectively a Swedish-market brand.**

## 5. Watchu (UK, also sold in DE) — marginal

- Watchu Guardian kids GPS phone watch, distributed alongside the CPR Guardian range.
  Two-way calling, SOS, GPS refresh ~1 min, ~48 h battery, uses the **CPR Guardian app**.
  <https://www.watchu.com/products/watchu-guardian-kids-gps-tracking-phone-watch-1> ·
  <https://www.cprguardian.com/products/watchu-guardian-kids-gps-tracking-phone-watch>
- **4G status: NOT confirmed** — connectivity listed as "WiFi, GPS, GSM & LBS". Given Romania's
  3G shutdown and 2G sunset trajectory this is a likely disqualifier.
- **Romania: UNKNOWN / no evidence.**

## 6. Nordic gap note

Beyond Xplora (NO) and Safekid (SE), Nordic-market lists are dominated by imported brands
(Garmin Bounce 2, Xplora, ZTE K1 Pro, TCL Movetime MT48, Safekid Zenit) rather than local
manufacturers. Swedish comparison tests from 2025-26 list exactly these.
<https://www.m3.se/article/2496863/gps-klocka-barn-test.html> · <https://www.test.se/gps-klocka-barn/>

---

# PART 2 — IBERIAN BRANDS (the ones English/German searches miss)

## 7. SaveFamily (Spain) — **strong Romania candidate**

- **Origin:** SaveFamily, Spain. Active and iterating fast in 2025-26.
- **Current 4G line-up (vendor's own site):**
  - Kids 4–7: **Iconic Plus 2** (newest), **Iconic Plus** (from €105, 1000 mAh), **Enjoy** (from €89)
  - Junior 8+: **SaveWatch Plus 2** (newest), **SaveWatch Plus** (€119, was €149), **Slim** (from €89)
  - Iconic: WiFi, Bluetooth, SOS, safe zones, anti-harassment module, school module.
  <https://savefamilygps.com/en/> ·
  <https://savefamilygps.com/en/products/reloj-con-gps-y-camara-para-videollamada-new-generation-4g-iconic> ·
  <https://savefamilygps.com/en/products/savewatch-plus>
- **App:** "SaveFamily app". UI/support languages: Spanish, Portuguese, English, French, German,
  Italian (**no Romanian** — acceptable per the brief). Customer support in English available.
- **Bands:** product pages say only "4G/2G/H+" or "4G/3G/H+" — **specific LTE bands UNKNOWN.**
  This matters: B20 support is unconfirmed.
- **ROMANIA:** the storefront's country/currency selector explicitly includes **"Romania (EUR €)"**
  among 100+ destinations, alongside all EU states. That confirms *shipping*; SaveFamily publishes
  **no supported-country list for the app/service**, so account registration with a +40 number is
  **UNVERIFIED**. <https://savefamilygps.com/en/>
- **Italian press treats it as a top pick:** "SaveFamily Iconic Plus 2 … GPS in tempo reale,
  chiamate, videochiamate, WhatsApp sicuro, Spotify, IA … con controllo parentale e **dati europei**"
  — that is vendor-aligned marketing copy relayed by the site, not independent testing.
  <https://saluteopinioni.it/migliori-smartwatch-per-bambini/>
- **Price range:** €89–€150+.

## 8. SoyMomo (Chile / Spain)

- **Origin / structure:** SoyMomo — HQ Santiago de Chile, with a Spanish entity **SOYMOMO SL,
  Barcelona**, plus offices in Miami (US) and **Gothenburg (Sweden)**. Multi-market but
  Hispanic-anchored. <https://soymomo.cl/>
- **Current line-up:** Space 4.0 (newest, "best-seller"), Space 3.0, Space 2.0; plus the cheaper
  **Space Lite**. Space 3.0 is the model fronted on the Spanish site.
  <https://www.soymomo.es/> · <https://soymomo.cl/>
- **App:** "SoyMomo Watch" (App Store + Google Play).
- **SIM model:** works with **any SIM**, or an optional "SoyMomo SIM by Movistar" activated in-app —
  the Movistar option is Spain-only, but SIM-agnostic operation is a positive for Romania.
- **Marketing claims (attributed, not verified):** company registered in Spain, Spanish-language
  support "from Spain, not China", GDPR-compliant; the Space 4G was described as "the only model in
  Spain with 4G coverage" at time of writing.
  <https://www.informaticadirecto.com/blog/probamos-el-smartwatch-para-ninos-mas-avanzado-del-mercado-soymomo/>
- **Distribution:** Amazon.es, Amazon.com, Tradeinn/Kidinn, German retailers (starmobile.de,
  Marktkauf, smartwatch.de) — so it reaches DE.
  <https://starmobile.de/kinder-smartwatch/soymomo/space-lite>
- **ROMANIA: not mentioned on any SoyMomo page found. UNKNOWN.** LTE bands **UNKNOWN**.
- Note the US variant is explicitly "Compatible with T-Mobile", implying region-specific SKUs exist.

## 9. Leotec (Spain)

- **Origin:** Leotec, Spain. Active — "Kids Allo GPS Antipérdida Plus 4G" is current and stocked by
  Decathlon.es, PcComponentes, Innova Informática, idealo.
- **Model: Leotec Kids Allo Plus 4G** — 1.4" IPS touch, real GPS chip, front camera for video
  calls, nanoSIM, 700 mAh, SOS, ~55 g, from **€67.52**.
  <https://leotec.com/producto/leotec-kids-allo-gps-antiperdida-plus-4g-azul/> ·
  <https://www.idealo.es/precios/206318351/leotec-kids-allo-gps-plus-4g.html>
- **Vendor claim:** "compatible with all Spanish mobile operators." Explicitly a **Spain-scoped**
  compatibility statement — no EU-wide or Romania claim.
- **App name: UNKNOWN.**
- **ROMANIA: no evidence.**

## 10. Prixton (Spain) — legacy

- Prixton "Watchii" kids GPS locator watch exists on Amazon.es; the company is ~25 years old.
  **No current 4G kids model found.**
  <https://www.amazon.es/Prixton-Watchi-Reloj-localizador-color/dp/B015HG705Y>
- **Status: likely legacy 2G/3G-era. Not a candidate.**

---

# PART 3 — ITALIAN MARKET

## 11. Techmade (Italy)

- Italian gadget company producing GPS+safety smartwatches for children and the elderly
  (T-Watch, Trill lines).
  <https://www.smartworld.it/wearable/t-watch-e-uno-smartwatch-che-pensa-alla-sicurezza.html> ·
  <https://yammo.it/smartwatch/4251-techmade-trill-smartwatch-per-bambini.html>
- **4G status of current kids models: UNKNOWN / not confirmed.** App name UNKNOWN.
  Romania: no evidence.

## 12. Trevi (Italy)

- Trevi sells smartwatches/fitness bands (T-Fit line with GPS) but **no 4G kids GPS-phone watch
  was found** in its catalogue. <https://www.trevi.it/cms/ITA/category/146-smartwatch.html>
- **Not a candidate.**

## 13. Italian market reality

Italian 2025-26 buyer guides are dominated by **imported** brands — SaveFamily, Xplora X6 Play,
VTech KidiZoom (non-cellular), Garmin. There is no large Italian-owned 4G kids-watch brand
equivalent to Spain's SaveFamily. Xplora *does* list Italy as a supported market.
<https://saluteopinioni.it/migliori-smartwatch-per-bambini/> ·
<https://www.tomshw.it/smartphone/migliori-smartwatch-bambini>

---

# PART 4 — POLISH / CZECH / SLOVAK / BALTIC BRANDS

## 14. Garett (Poland) — the dominant CEE brand

- **Origin:** Garett Electronics, Poland. Polish sources call it "the Polish brand dominating the
  children's smartwatch segment." Very active in 2025.
  <https://www.euro.com.pl/artykuly/wszystkie/artykul-smartwatch-dla-dzieci-ranking.bhtml>
- **Current 4G line-up (2025):**
  - **Garett Kids Vibe AI 4G** — 2025 flagship. 1.78" AMOLED, Android 8.1, 8 GB, face unlock,
    19 AI/education apps, video calls, geofence, vendor-quoted **up to 3 days** battery.
    ~459 PLN (~€107).
    <https://garett.com.pl/produkt/smartwatch-garett-kids-vibe-ai-4g-czarny/> ·
    <https://www.mediaexpert.pl/smartfony-i-zegarki/smartwatche-i-zegarki/smartwatche/smartwatch-garett-kids-vibe-ai-4g-czarny>
  - **Garett Kids Essa 4G** — 1.83" IPS, WhatsApp, vendor-quoted **up to 4 days**
  - **Garett Kids Sun Ultra 4G** — 1.85", large battery
  - **Garett Kids Cute 2 4G** — voice + video calls, geofence
- **App:** name UNKNOWN (Garett runs its own support portal at support.garettelectronics.com).
- **Countries:** garett.eu exists as an English/EU storefront (returns 403 to automated fetch, so
  contents unverified). Romania: **no direct vendor evidence found. UNKNOWN.**
- **LTE bands: UNKNOWN.** This is the main open question for a Romanian buyer.

## 15. Kiano (Poland)

- **Kiano Watch Joy 4G LTE** (Rocket / Unicorn editions) — 4G video calls, GPS, SOS to three
  numbers, camera, educational games.
  <https://kiano.pl/produkt/smartwatch-kiano-watch-joy-4g-lte-rocket/>
- App name, bands, battery, EU/RO support: **UNKNOWN.**

## 16. Forever (Poland)

- **Forever Kids Look Me KW-500** — GPS + WiFi + LBS, camera, video calls, **2G/3G/4G**.
  Widely stocked (Media Expert, Neonet, Smyk, RTV Euro AGD).
  <https://www.euro.com.pl/smartwatch/forever-smartwatch-look-me-kw-500-gps-4g-bl-fore.bhtml> ·
  <https://www.benchmark.pl/produkt/forever-look-me-kw-500>
- App name UNKNOWN. Romania: no evidence.

## 17. Manta (Poland)

- **Manta Junior Joy 4G** (SWK03) — GPS module, real-time tracking via dedicated app, 4G LTE
  video calls. <https://manta.com.pl/produkt/smartwatch-dla-dzieci-manta-junior-joy-swk03bl/>
- App name UNKNOWN. Sold into EU marketplaces. Romania: no evidence.

## 18. Krüger&Matz (Poland)

- **SmartKid (KM0469)** — 1.44" touch, pedometer, SOS, flashlight, safety zones, IP67.
  <https://www.krugermatz.com/en_US/p/SmartKid/2711> ·
  <https://manuals.plus/kruger-matz/km0469-smartkid-kids-smartwatch-manual>
- **4G status: NOT confirmed** — likely 2G-class. Treat as disqualified until proven otherwise.

## 19. Bemi (Poland distribution)

- Bemi Sport / Fun / Kid children's smartwatches launched into Poland via distributor **4cv Mobile**,
  sold at Media Markt and Media Expert. Devices described as having "LTE and 2G connectivity."
  <https://www.telepolis.pl/tech/sprzet/bemi-sport-fun-i-kid-smartwatche-dla-dzieci-z-sim-i-gps-dostepne-w-polsce> ·
  <https://www.mybemi.com/pages/bemi-smartwatches>
- **Caution:** the widely-stocked "BEMI Kid" SKU at Media Expert is explicitly **2G**.
  <https://www.mediaexpert.pl/smartfony-i-zegarki/smartwatche-i-zegarki/smartwatche/smartwatch-bemi-kid-2g-rozowy-folia>
- Romania: no evidence.

## 20. Locon / "Bezpieczna Rodzina" (Poland) — vertically integrated, Poland-only

- **Origin:** Locon Sp. z o.o., Polish security-technology company. **New 2025 line-up:**
  **Locon Watch Slay AI** (599 PLN) and **Locon Watch Goat** (399 PLN); also **Locon Watch Video**
  (199 PLN on offer) — **4G LTE + video calls**, GPS+WiFi+GSM accuracy 5–15 m.
  <https://www.chip.pl/2025/09/smartwatch-dla-dziecka-i-to-z-polski-nowa-seria-locon-stawia-na-ai> ·
  <https://bezpiecznarodzina.pl/p/smartwatch-locon-watch-video/>
- **App: "Bezpieczna Rodzina"** — advertised as "100% Polish", Google Play + App Store,
  4.8 stars from 11,500+ reviews. Built-in SIM activated inside the app, no contract.
- **Countries:** built-in SIM works with T-Mobile, Plus, Orange, Play — **all Polish operators**.
  Site is Polish-only. **Romania: not supported in any practical sense.** The embedded-SIM +
  national-app model is structurally the same as Xplora's and carries the same geo-gating risk.

## 21. Carneo (Slovakia / Czechia)

- **Origin:** Carneo, operating carneo.cz and carneo.sk. Active 2025-26.
- **Current 4G line-up (GuardKid+ 4G family), prices from the vendor store:**
  - **GuardKid+ 4G Buddy** — 1,980 CZK (~€79)
  - **GuardKid+ 4G Platinum** — 2,150–2,690 CZK; 1.44" display, GPS, SIM, pedometer, camera,
    IP67; Czech reviewers report **~4 days** battery
  - **GuardKid+ 4G ULTRA (2nd gen)** — 3,290 CZK (~€132)
  - **GuardKid+ 4G Tiny**
  <https://www.carneo.cz/hodinky-pro-deti/> · <https://www.testado.cz/chytre-hodinky-pro-deti/>
- **Apps:** "Carneo Guard" and "Carneo Fit".
- **Countries:** CZ + SK confirmed by the site's own locale switcher. GuardKid+ 4G Platinum also
  appears in **Hungarian** 2025-26 buyer guides, so distribution reaches at least HU.
  <https://www.testado.hu/legjobb-gyerek-okosora/>
- **Romania: no vendor evidence. UNKNOWN.** LTE bands UNKNOWN.

## 22. Niceboy (Czechia)

- **Niceboy Watch Kids Patrol** — GPS locator; Czech reviewers describe it as the most playful
  design of the group. <https://www.testado.cz/chytre-hodinky-pro-deti/>
- The product page on niceboy.eu now 404s and the model is absent from the current smartwatch
  navigation (which shows Watch Pixel 2, Watch GTX GPS, Watch 4) — **possible discontinuation of
  the kids line; treat as at-risk.** <https://www.niceboy.eu/>
- **4G status UNKNOWN. Romania: no evidence.**

## 23. Elari (Latvia-registered, Russian-origin brand)

- **KidPhone** family: KidPhone 2 (2G), KidPhone 3G, **KidPhone 4G / 4GR / 4G Lite** — two-way audio
  and video calls, "KidGram" messenger, SOS, camera. Sold on Amazon.de and OTTO.de.
  <https://www.amazon.de/Elari-KidPhone-4GR-2-Wege-Audio-Videoanrufe-Gelb/dp/B08LVPH8CX> ·
  <https://manuals.plus/elari/kidphone-4g-lite-smart-watch-manual>
- **Corporate:** elari.net footer gives a **Riga, Latvia** address (Ganību dambis 26A, LV1005).
  The brand's origin is Russian; product pages on the official site now 404. Current model
  line-up, app-store status and server locations for 2025-26 are **UNKNOWN**.
- **Risk flag:** continuity and data-jurisdiction risk plus a stale official site. Not recommended
  without direct verification.

## 24. Baltic / other CEE

No Baltic-owned 4G kids-watch brand was identified. Estonia and Latvia appear only as *destination*
markets (Xplora lists Estonia as supported; Garmin Bounce 2 covers Estonia, Latvia, Lithuania).

---

# PART 5 — BENELUX BRANDS

## 25. One2track (Netherlands) — genuinely EU-hosted

- **Origin:** Dutch company with its own software and GPS stack, "12 years, 1 million+ parents and
  children", running "op onze eigen GPS systemen in een Nederlands datacentrum" (own systems in a
  Dutch data centre). <https://www.one2track.nl/>
- **Current 4G line-up and prices (all include a SIM in the box):**
  - **Connect YOU** (8+) — €124.95, friends-chat function
  - **Connect NEXT** (6+) — €104.95
  - **Connect UP** (4+) — €99.95
  - **Connect ADVENTURE** (4+) — €89.95
- 4G video calling, voice messages, calls to stored contacts, SOS.
- **App:** "one2track app". Top-up via iDEAL, or "Unlimited" at **€7.95/month**.
- **SIM:** German Amazon listings describe an integrated anonymous SIM with a German number on
  the **O2** network, encrypted data, EU hosting.
  <https://www.amazon.de/One2Track-Serverstandort-Niederlande-Videoanrufe-Integrierte-Blau/dp/B0CL9TJC2W>
- **Countries: NL + DE + BE confirmed by retail presence. No supported-country list published.
  Romania UNKNOWN.** The iDEAL-based top-up and Dutch/German-number SIM make a Romanian setup awkward.

## 26. Qlokkie (Netherlands)

- **Models & prices:** Kiddo Explore €119.95 (was €149.95), Kiddo Slim Pro €103.95, Kiddo Mini
  €87.95, Kiddo 23, Kiddo Play, Kiddo Next, Kiddo Lite. Ages 3–12+.
  <https://qlokkie.com/en>
- **App: SeTracker2** — i.e. Qlokkie is a **re-badged Chinese (Wonlex-class) platform** with Dutch
  branding, not an independent stack. That is actually a *positive* for Romania portability
  (SeTracker2 is globally available and used by Romanian retailers) but a negative for
  privacy and support quality.
- **No subscription required**; data cost quoted at ~€0.50/month.
- **Ships internationally** ("setup may differ"); Belgium and Europe-wide Lebara SIM mentioned.
  **Romania: not named. UNKNOWN, but the SeTracker2 platform does work in RO.**
- **4G status per model: not stated on the homepage — UNKNOWN.** Several Qlokkie SKUs are described
  as 4G in Dutch reviews. <https://gpsexperts.nl/beste-gps-horloge-kind/>

## 27. DEPLAY (Netherlands)

- **Origin:** Dutch educational-tech/toy brand; sells via MediaMarkt, Intertoys, bol.com.
  <https://www.deplay.nl/>
- **Models: DEPLAY 4G KidsWatch Hero** (ages 8–12, €119.00 / €79.99 sale) and
  **4G KidsWatch Explorer** (ages 4–8, €109.99 / €89.99 sale). Ranked #1 by several Dutch
  comparison sites — those sites are affiliate-driven, so treat rankings as marketing.
  <https://www.debeterewereld.nl/ouders-kind/gps-horloge-kind/>
- **Countries:** NL, BE, DE. **App name UNKNOWN. Bands UNKNOWN. Romania: no evidence.**

---

# PART 6 — FRANCE

## 28. Weenect (France) — **NOT a 4G watch**

- Weenect Kids is a **screen-less GPS tracker**, not a smartwatch. Network technology is
  **GPRS/2G only**; the vendor states coverage is "Couverture européenne (hors Suisse)".
  €49.99, up to 7 days battery, subscription required.
  <https://www.weenect.com/fr/fr/traceur-gps-enfant/>
- French comparison articles pair "Weenect Kids 2 + Xplora X6 Play" as the standard recommendation,
  which is why Weenect keeps surfacing in kids-watch searches.
  <https://babymat.fr/montre-connectee-autonome-pour-enfant-retour-dexperience-et-comparatif-2025/>
- **VERDICT: KILLED — no 4G, and it is a tracker rather than a watch.**

## 29. Kidywatch (France)

- French kids-GPS-watch brand referenced by French retail. The official site could not be
  retrieved (HTTP 422 to automated fetch on both `kidywatch.fr` and `kidywatch.com/en`).
- **Models, 4G status, app, countries, prices: ALL UNKNOWN.** Flagged for manual follow-up —
  a genuine French-language-only brand that English searches miss.

## 30. French market note

France is served overwhelmingly by imports: Xplora (France *is* a supported market), Garmin Bounce,
Weenect, plus SaveFamily and Garett appearing in French comparatives. Xplora X6 Play is sold as
working with "toute carte SIM Nano compatible 4G (Orange, Sosh, Bouygues, Free, Red)".
<https://babymat.fr/montre-connectee-autonome-pour-enfant-retour-dexperience-et-comparatif-2025/>

---

# PART 7 — BULGARIA / SOUTH-EAST EUROPE

## 31. MyKi — Allterco Robotics / Shelly Group (Bulgaria) — **the most Romania-native brand found**

- **Origin / parent:** Allterco Robotics EOOD, Bulgaria; the holding was renamed **Shelly Group SE**
  in 2023. Allterco runs two segments: tracking wearables (**MyKi**) and home automation (**Shelly**).
  <https://www.economic.bg/en/a/view/the-bulgarian-shelly-group-will-transform-into-a-european-company-se> ·
  <https://corporate.shelly.com/product-series/>
- **Line-up (mykifamily.com):** MyKi Watch, MyKi Touch, MyKi Junior, **MyKi 4**, **MyKi Watch 4 LITE**;
  plus MyKi Spot / MyKi Auto trackers and MyKi Care health devices. Shelly's corporate page says
  MyKi watches are sold "in over 20 international markets."
  <https://mykifamily.com/> · <https://mykifamily.com/myki-watch-4-lite>
- **MyKi 4:** IP67, triple localisation (GPS/AGPS + WiFi + LBS), two-way voice **and video** calls,
  chat, SOS, watch-to-watch. A Bulgarian retailer describes MyKi 4 as **4G**.
  <https://www.ozone.bg/product/detski-smart-chasovnik-myki-4-black-grey/> ·
  <https://mykifamily.com/myki4>
  *Caveat:* the vendor's own MyKi 4 page does **not** state 4G/LTE or bands — the 4G claim comes
  from the retailer. Bands: **UNKNOWN**.
- **App:** "MyKi Watch" / "MyKi" on **Google Play, App Store and Huawei AppGallery**;
  the app supports the **Romanian language**.
- **ROMANIA — the strongest positive signal of any brand here:**
  - A dedicated Android app **"MyKi Watch – Telekom Romania"** (`com.alterco.mykiwatch_romania`)
    exists on Google Play. <https://play.google.com/store/apps/details?id=com.alterco.mykiwatch_romania>
  - A Romanian-language product site exists: <https://myki.watch/ro/>, with RO shop and FAQ.
  - Telekom Romania Mobile distributes it; Telekom's terms state the service and app are supplied
    by ALLTERCO ROBOTICS EOOD, which is also the data controller for location/traffic data.
    <https://mobile.telekom.ro/myki/> · <https://www.telekom.ro/aplicatii/myki-watch/app61001>
- **FRESHNESS RISK — the critical caveat:** MyKi's own news page (<https://myki.watch/en/news/>)
  has **no items newer than late 2017 / early 2018**. Shelly Group's investor communications are
  overwhelmingly about Shelly home automation, not MyKi. The Telekom Romania partnership dates
  from the 2016–2018 era. Whether MyKi is still actively supported and selling *new 4G models* in
  Romania in 2026 is **UNVERIFIED and should be the first thing checked**. No discontinuation
  announcement was found either.
- **Price range: UNKNOWN** (no prices published on mykifamily.com).

---

# PART 8 — ROMANIAN MARKET BRANDS (local retail / white-label)

Romanian retail is dominated by **Chinese ODM platforms** rebadged under retailer-owned names, all
running the **SeTracker / SeTracker2** app family. These are the only devices guaranteed to accept
Romanian SIMs and Romanian setup, but support and firmware longevity are weak.

## 32. LAGENIO (retailer brand, sold via xkids.ro / xkids.hu)

- Line-up and prices from XKids Romania: **K9** (2026 model, "Premium 4G + AI", 499 RON),
  **K10** (Slim, 399 RON), **K3** (334 RON), **K1** (313 RON, "up to 3 days" battery).
  <https://www.xkids.ro/smartwatch-copii/>
- Also appears in Hungarian 2025-26 guides ("LAGENIO K10 … 2025-ös modell, prémium 4G telefon- és
  AI-funkcióval"). <https://www.testado.hu/legjobb-gyerek-okosora/>
- **App: SeTracker / SeTracker2.** Network compatibility explicitly stated as
  **Orange, Vodafone, Telekom and Digi** (all Romanian operators).
- **Country of origin / parent: UNKNOWN** (almost certainly a Chinese ODM under a retailer label).
- **LTE bands: UNKNOWN.**

## 33. Wonlex (China) — the underlying ODM for much of Europe

- **Origin:** Wonlex, founded 2014, China. Self-described as having sold 1M+ GPS watches in
  90+ countries. Operates the SeTracker/SeTracker2 ecosystem and supplies white-label hardware.
  <https://www.iwonlex.net/kids-gps-watch-solution/> · <https://www.iwonlex.net/how-to-set-up-kids-watch-app/>
  (Note: `wonlex.com` is now a parked domain listed for sale — the operational site is `iwonlex.net`.)
- **Models sold in Romania (XKids prices):** KT38 (397 RON, AMOLED), KT37 (410 RON, AI, AMOLED),
  KT36 (376–389 RON, Google Play), KT33 (355 RON), KT31 (392 RON), KT24S (351 RON), CT24 (347 RON),
  KT23, CT20 Mini. <https://www.xkids.ro/smartwatch-copii/> ·
  <https://www.xkids.ro/ceas-smartwatch-pentru-copii-wonlex-kt23-albastru-nano-sim-4g-pedometru-localizare-gps-microfon-monitorizare-sos/>
- **App:** SeTracker2 (Android + iOS), globally available — **no Romania geo-block.**
- **Romania: YES in practice.** Works on all four RO operators.
- **Risk:** no vendor warranty channel in the EU, Chinese servers, firmware/QA variance,
  and SeTracker's privacy reputation is poor. Bands vary per SKU and are **UNKNOWN**.

## 34. Other Romanian-retail labels (all SeTracker-class, origins UNKNOWN)

**Techone** (LT25 4G, KT20S 4G), **LikeSmart** (KinderCare 38), **MoreFIT** (MX528, KT06),
**iQuality** (4G Phantom Black), **WIRSEN** (1.91" AMOLED, "Meniu în Română", Google Play),
**LUMAUDiO Zeus**, **Merkie T12**, **Wingereich 4G LTE**, **Xkids** house label,
**KidGPS.ro** house label.
Sources: <https://www.xkids.ro/smartwatch-copii/> ·
<https://mamialege.ro/cel-mai-bun-ceas-cu-gps-pentru-copii/> ·
<https://www.adibarbu.ro/2025/03/ceas-smartwatch-copii-cu-cartela-sim.html> ·
<https://electrobun.ro/cel-mai-bun-ceas-cu-gps-pentru-copii/> ·
<https://www.kidgps.ro/collections/gps-smartwatch-copii>
- Romanian buying guides confirm these "funcționează în rețelele VODAFONE, ORANGE, TELEKOM și DIGI."
- **All: brand parent UNKNOWN, bands UNKNOWN, long-term support UNKNOWN.**

## 35. E-Boda (Romania)

- Romanian consumer-electronics brand. Sells a "Smartwatch pentru copii E-BODA, GPS Tracker,
  Android/iOS" at ~330–350 RON via Altex and Media Galaxy.
  <https://altex.ro/smartwatch-pentru-copii-e-boda-gps-tracker-android-ios-silicon-albastru/cpd/SMWEBKIDBLU/>
- **4G status NOT confirmed** on the listings found — likely 2G-class at that price point.
  **Verify before considering.**
- iHunt and Smailo (other Romanian brands) have smartwatch ranges but **no 4G kids GPS model was
  found**. <https://www.cel.ro/smartwatch/ihunt/1a-1>

---

# PART 9 — TELECOM OPERATOR OWN-BRAND WATCHES

## 36. Vodafone — **Neo: DEAD, service switched off**

- Vodafone Neo (with Disney themes: Minnie, Elsa, Buzz Lightyear, Darth Vader) launched 2021 in
  the UK. <https://www.vodafone.co.uk/newscentre/press-release/say-hello-to-neo-vodafone-disney-new-smart-kids-watch/>
- **Vodafone shut down its entire Smart Tech line: devices including Neo became unusable from
  1 August 2024.** The eshop product page's videos point to a closed account.
  <https://www.karmactive.com/vodafones-smart-tech-shutdown-90-of-devices-turn-to-electronic-waste-by-august-2024/> ·
  <https://eshop.v.vodafone.com/uk/neo-smart-kids-watch>
- **This is the second documented instance (after Xplora) of a vendor bricking working hardware.
  Vodafone is also named by Xplora as a distribution partner.**
  <https://xplora.co.uk/pages/strategy-and-vision>
- Vodafone Spain historically retailed the Disney Neo alongside Movistar's Xplora X5 Play.
  <https://www.xatakamovil.com/movistar/xplora-x5-play-disney-neo-asi-relojes-inteligentes-para-ninos-que-comercializan-movistar-vodafone>

## 37. Deutsche Telekom (Germany)

- Does **not** make its own watch; **resells** third-party hardware on Telekom tariffs:
  **TCL MT42X** bundled with "Telekom Smart Connect S", and **Anio Kidswatch 6** as a Telekom SKU.
  <https://www.amazon.de/TCL-MT42X-Blau-Smartwatch-SIM-Bundle/dp/B0BXXS3X8M> ·
  <https://www.telekom.com/en/company/details/safe-children-s-phone-in-the-form-of-a-watch-603688> ·
  <https://www.handyhase.de/kinder-smartwatch-telekom/>
- Xplora names **Vodafone, Deutsche Telekom and Orange** as distribution partners.

## 38. Telekom Romania — **MyKi** (see section 31)

- The only Romanian-operator kids-watch programme found. `mobile.telekom.ro/myki/` plus a
  dedicated Google Play app. Age of the programme is the concern, not its existence.

## 39. Orange (Spain / France)

- Orange España runs a kids-smartwatch category page (reselling third-party devices, not an
  own-brand). <https://www.orange.es/dispositivos/smartwatch/ninos>
- No Orange own-brand kids watch found in France or Romania. **Orange Romania: no kids-watch
  programme found.**

## 40. Movistar (Spain)

- Retailed the **Xplora X5 Play**; SoyMomo offers an in-app "SoyMomo SIM by Movistar".
  Own-brand device: none.
  <https://www.xatakamovil.com/movistar/xplora-x5-play-disney-neo-asi-relojes-inteligentes-para-ninos-que-comercializan-movistar-vodafone> ·
  <https://www.soymomo.es/>

## 41. Nordic operators (Tre/3 Sweden, Telenor Sweden)

- Both retail **Safekid Zenit** rather than an own brand.
  <https://www.tre.se/handla/smartwatch/barn/safekid> ·
  <https://www.telenor.se/handla/smartwatch/safekid/safekid-zenit/>
- Telenor also historically ran MyKi campaigns. <https://myki.watch/en/news/>

## 42. Polish operators (Play, Orange PL, T-Mobile PL)

- Appear only as **compatible networks** in imoo's and Locon's carrier lists, not as own-brand
  vendors. <https://www.imoo.com/eu/products/z7>

## 43. TIM (Italy), Digi / Orange RO / Vodafone RO

- **No operator-branded kids smartwatch found for TIM Italia or for any Romanian operator other
  than Telekom's MyKi programme.** UNKNOWN whether Digi / Orange RO / Vodafone RO ever ran one.

---

# PART 10 — ASIAN MAJORS

## 44. imoo — BBK Electronics (China) — **top-2 candidate**

- **Origin / parent:** imoo, founded 2010 by Jin Zhijiang, part of **BBK Electronics** (Guangdong)
  — the same group behind vivo/OPPO/OnePlus. imoo is the leading kids-watch brand in China.
  <https://www.ceoinsightsasia.com/business-inside/the-leadership-behind-imoo-china-s-top-kidfriendly-smartwatch-nwid-13994.html>
- **European history:** imoo **exited Europe, then returned in June 2024** with the Z7, launching
  in the UK and Germany after a 3-year absence. That is itself a market-exit precedent worth noting.
  <https://www.prnewswire.co.uk/news-releases/imoo-is-returning-to-europe-after-3-years-with-the-newest-kids-flagship-sports-watch-phone-z7-302189692.html>
- **Current EU line-up and prices (imoo EU store):**
  - **Z7** — €186.15 (was €219). Flip design, dual camera, 14-day location history, 740 mAh.
    **LTE bands: FDD B1/B3/B8/B20 + TDD B34/38/39/40/41.** Covers B3 + B20 + B1 — good Romanian fit.
  - **Z3** — €126.65 (was €149). HD video calls, 20 m water resistance.
  - **Z1** — €119.00 (was €129). 740 mAh, vendor-quoted **~1–2 days**, daily charging recommended.
    **LTE bands: FDD B1/B3/B5/B28 + TDD B34/38/39/40.** **NO B20** — weaker indoor/rural RO coverage.
  - **X10** — flagship, detachable flip, 8 MP + 5 MP cameras, Snapdragon 4100, 1 GB/32 GB,
    CaremeOS, 20 m water resistance, 740 mAh silicon-anode.
    **LTE bands: FDD B1/B2/B3/B4/B5/B8/B12/B13/B17/B18/B19/B20/B26/B28/B66 + TDD B38/40/41.**
    Best band coverage of any watch in this report. Price UNKNOWN, release year UNKNOWN.
  <https://www.imoostore.com/eu> · <https://www.imoo.com/eu/products/z7> ·
  <https://www.imoo.com/eu/products/z1> · <https://www.imoostore.com/eu/products/imoo-smartwatch-x10>
- **App:** "imoo Watch" (Google Play + App Store), free.
- **ROMANIA — the two lists conflict:**
  - imoo's **official supported-country page** lists only: **Germany, United Kingdom, France, Italy,
    Ireland, Spain, Poland. Romania is NOT there.** <https://www.imoo.com/eu/countrys>
  - imoo's **EU store shipping policy** lists 20 destinations *including Romania*: "Ireland, Spain,
    Germany, Denmark, France, Netherlands, Belgium, Greece, Italy, Portugal, **Romania**, Slovenia,
    Sweden, Poland, Czech Republic, Luxembourg, Slovakia, Hungary, Lithuania, Bulgaria."
    <https://www.imoostore.com/eu/pages/shipping-policy>
  - Carrier compatibility is published only for UK/DE/ES/PL. **Whether the imoo app accepts a +40
    number is UNVERIFIED — this is the single most important thing to test.**
- **Requirement:** nano-SIM with **VoLTE enabled**, ~1 GB/month recommended. VoLTE availability on
  the chosen Romanian operator is a hard dependency.

## 45. Xiaomi — Mi Rabbit / Mi Bunny (China)

- Mi Bunny Watch 3 and **Mi Rabbit Children Watch 4C 4G** (2020, ~€49) — 4G + GPS/A-GPS.
  <https://www.gizchina.com/2020/06/23/xiaomi-released-a-xiaomi-mi-rabbit-4c-childrens-watch-with-4g-support/> ·
  <https://m.gsmarena.com/newscomm-32394.php>
- Xiaomi also sells a global "Xiaomi Smart Kids Watch" — but that is a **non-cellular** kids
  activity band, not a GPS phone watch. <https://www.mi.com/global/product/xiaomi-smart-kids-watch/>
- **VERDICT: the 4G Mi Rabbit line is China-market only; no EU release, Chinese app, no Romanian
  support. KILLED for the EU.** Current 2025-26 model status UNKNOWN.

## 46. Huawei — Children's Watch (China)

- **Huawei Children's Watch 4X** (announced 30 Jul 2020, released 20 Aug 2020) — GSMArena lists
  status as **discontinued**, ~€170, with LTE bands covering Europe.
  <https://m.gsmarena.com/huawei_children_s_watch_4x-10364.php>
- A "Kids Watch 5X" appears on grey-import sites but **no official EU launch was found.**
  Huawei's kids watches are tied to Huawei Mobile Services / AppGallery.
- **VERDICT: China-market line, no EU channel. KILLED.**

## 47. 360 / Qihoo 360 (China)

- Named as a major kids-smartwatch player in China alongside Xiaomi and imoo.
  <https://www.fortunebusinessinsights.com/kids-smartwatch-market-115628>
- **No EU distribution, no EU app-store presence found. KILLED.**

## 48. "Little Genius" — imoo's Chinese domestic line

- Overtook Apple Watch in China's home market on features such as remote body-temperature alerts.
  <https://www.scmp.com/tech/tech-trends/article/3233502/chinas-little-genius-smartwatch-kids-overtakes-apple-watch-home-market-thanks-features-such>
- Same company as imoo (BBK). Domestic SKUs are not EU-usable; buy the EU imoo SKUs instead.

## 49. ZTE (China)

- **ZTE K1 Pro** — kids smartwatch with HD camera and 4G calling, appearing in **Swedish**
  2025-26 comparison tests. Evidence of a Nordic channel.
  <https://www.smartahemtest.se/test/basta-gps-klocka-for-barn>
- Bands, app name, price, supported countries, Romania status: **ALL UNKNOWN.** Under-covered brand
  worth a follow-up.

## 50. TCL / Alcatel — MOVETIME (China/France)

- **TCL MOVETIME MT48**, announced 7 September 2025 (IFA), **available late October 2025**:
  - Dual-frequency **GPS L1+L5** with 1-second refresh — best-in-class positioning claim
  - Always-on 4G with VoLTE calls, video calls, SMS, voice messages
  - **900 mAh, vendor-quoted up to 2.5 days**
  - IP68 + 2ATM
  - **RRP €150**
  - App: **"TCL Connect"**
  - **Launch markets: Germany, UK, Spain, Italy, France.** Press release: "expansion into additional
    international markets is underway and will follow upon receiving local certifications."
  <https://www.prnewswire.com/news-releases/tcl-launches-tcl-movetime-mt48-kids-smartwatch-designed-with-advanced-safety-and-digital-well-being-for-families-302545322.html> ·
  <https://www.gizmochina.com/2025/09/07/tcl-movetime-mt48-kids-smartwatch-launched-specs-price/>
- Older **TCL MT42X** is sold in Germany bundled with a Telekom SIM. The MT48 already appears in
  Swedish tests ("stark debut … välgjord app och bra batteritid").
  <https://www.m3.se/article/2496863/gps-klocka-barn-test.html>
- **ROMANIA: explicitly NOT in the launch-market list.** LTE bands **UNKNOWN**.
  **VERDICT: promising hardware, but Romania is a "maybe later" market as of the launch PR.**

---

# PART 11 — US / UK / AUSTRALIAN BRANDS

## 51. Garmin — Bounce 2 (US/Taiwan) — **BEST DOCUMENTED ROMANIA FIT**

- **Origin:** Garmin Ltd. Active, mainstream, financially solid.
- **Model: Garmin Bounce 2**, announced via press release 17 September 2025.
  - AMOLED display, 41 mm, swim-friendly, two-way calling + text messaging, real-time LTE GPS
    tracking, music, School Mode, activity gamification
  - **Battery: "up to 2 days" between charges**, with Garmin's own caveat that "connected feature
    usage as well as LTE network conditions will have a significant impact on battery life"
  - **App: Garmin Jr.** (parent app; required for calling, messaging, tracking, parental controls;
    available on Android and iOS)
  - **Subscription: mandatory, billed by Garmin, not by a mobile operator** — $9.99/mo or
    $99.99/yr in the US; **€9.99–10.99/month reported in Romania**
  - **Price: $299.99 / £259.99 / €299; in Romania ~1,350–1,509 RON (~€270–300)**
  <https://www.garmin.com/en-US/p/1815501/> ·
  <https://the5krunner.com/2025/09/28/garmin-bounce-2-opinion-first-look-review-buyers-guide/>
- **ROMANIA — CONFIRMED BY GARMIN'S OWN COVERAGE TABLE.** The Bounce 2 LTE coverage list
  (31 countries) reads verbatim:
  > "Australia | Austria | Belgium | Canada | Czech Republic | Estonia | Finland | France | Germany
  > | Greece | Iceland | Ireland | Israel | Latvia | Lichtenstein | Lithuania | Luxembourg | Mexico
  > | Netherlands | New Zealand | Norway | Poland | Portugal | Puerto Rico | **Romania** | Slovenia
  > | Spain | Sweden | Switzerland | U.K. | U.S."

  with the disclaimer: "Coverage in specific areas within each of these countries is dependent on
  the network coverage and network conditions of each respective carrier. The network coverage
  represented in the coverage table does not provide a guarantee of coverage."
  <https://www.garmin.com/en-US/connectivity/bounce/bounce2-lte-coverage/>
  *(JS-rendered page; retrieved via r.jina.ai text proxy, read twice with consistent results.)*
- **Sold in Romania:** Altex lists it at 1,350 RON; Romanian tech press covered the launch.
  <https://altex.ro/smartwatch-garmin-bounce-2-41mm-wi-fi-lte-gps-android-ios-silicon-slate-gray/cpd/100339900/> ·
  <https://zonait.ro/garmin-bounce-2-smartwatch-pentru-copii-lte/> ·
  <https://www.mobilissimo.ro/stiri-ceasuri-inteligente/garmin-bounce-2-a-sosit-un-nou-smartwatch-dedicat-copiilor-cu-ecran-amoled-functii-de-siguranta-si-apeluri-vocale>
- **Coverage expanded vs Gen 1:** the original Bounce did **not** cover Poland (it covered Germany
  and Czechia instead); Bounce 2 adds Poland, Romania and others. Garmin also stated on X in
  September 2025 that Bounce 2 LTE coverage is **not** available in Czechia, "which may impact its
  availability" there — evidence the list is enforced, not decorative.
  <https://x.com/Garmin/status/1970886350447513667> ·
  <https://www.garmin.com/en-US/connectivity/bounce/lte-coverage/>
- **Cautions:** no camera; battery only ~2 days and heavily LTE-dependent; the subscription is a
  Garmin-side dependency (the same class of single-point-of-failure that killed Vodafone Neo,
  though Garmin's balance sheet is a different risk profile); **LTE bands not published — UNKNOWN.**

## 52. Fitbit / Google — Ace LTE (US) — **KILLED**

- **Fitbit Ace LTE**, launched 5 June 2024, ages 7+. $179.95 currently.
  Requires an **Ace Pass** data plan ($9.99/mo or $119/yr) — the device cannot be activated without one.
- **"LTE coverage is limited to the USA (excluding Alaska and US territories)."** Built-in
  connectivity, no SIM slot.
  <https://store.google.com/product/fitbit_ace_lte> ·
  <https://blog.google/products/fitbit/fitbit-ace-lte-smartwatch-kids/>
- Separately, Google discontinued the Fitbit smartwatch line in favour of Pixel Watch; the Ace LTE
  survived that as a standalone product but is **structurally US-only**.
  <https://www.tomsguide.com/wellness/smartwatches/google-just-killed-off-fitbit-smartwatches-and-nobody-should-be-surprised>
- **VERDICT: KILLED — no SIM slot, no EU LTE, no EU sale.**

## 53. Spacetalk (Australia) — **KILLED for Romania, and unstable**

- **Origin:** Spacetalk Ltd, ASX-listed (SPA), Australia.
- **Current models: Adventurer 2** (flagship) and **Loop** (value 4G).
- **Regions (site's own selector, 14):** Australia, Canada, **Denmark, Finland, France, Germany,
  Ireland, Netherlands, Spain, Sweden**, New Zealand, Norway, Singapore, UK, US.
  **Romania is NOT among them.** <https://spacetalk.co/en-gb>
- **Lock-in:** "Spacetalk Watches are soft locked to Spacetalk Watch Plans in Australia, the UK and
  USA." Third-party SIMs need an extra subscription fee. An active Spacetalk Watch Plan is
  **required** to enable calling, messaging and location. The UK version is "Made for the UK",
  powered by Spacetalk Mobile on **Vodafone**, roaming included. £143 (was £179).
  <https://spacetalk.co/en-gb/products/spacetalk-adventurer-2-smartwatch-uk>
- **SERVICE-RELIABILITY RED FLAG:** in late 2025 Spacetalk migrated to a new platform and
  "launched a new platform that unfortunately resulted in a system that stopped working, stopped
  pairing, and ultimately stopped doing what customers had bought the service and hardware to do",
  alongside support-team changes and a reduced engineering team; fixes were targeted for December.
  Earlier in July 2025 it took $3M new funding and had $1M of debt forgiven.
  <https://www.pickr.com.au/news/2025/spacetalk-looks-to-december-for-platform-fixes-future/>
- Retail partners: O2 UK, Sky Mobile UK.
  <https://news.virginmediao2.co.uk/spark-your-childs-imagination-with-the-new-spacetalk-adventurer-smartwatch-now-available-from-o2/> ·
  <https://www.skygroup.sky/article/sky-mobile-launches-spacetalk-kids-watch-a-smartwatch-offering-peace-of-mind-for-parents>
- **VERDICT: KILLED — Romania not a region, and the plan lock-in plus the 2025 platform failure
  make it exactly the Xplora-class risk to avoid.**

## 54. TickTalk (US) — effectively US-only

- **TickTalk 5** — 4G, FaceTalk video calls over WiFi+LTE, group chats, music, T-Cloud backup.
  Runs on **AT&T and T-Mobile** networks in the US.
  <https://www.myticktalk.com/products/ticktalk-5> · <https://www.myticktalk.com/pages/ticktalk-5-vs-others>
- **International:** the vendor's own comparison states "International customers have to add a line
  to their carrier to get service for the TickTalk 5" — no EU distribution, no EU support entity.
- **VERDICT: KILLED for Romania** (no EU channel; RO app-account support UNKNOWN; bands UNKNOWN).

## 55. Cosmo (US) — JrTrack

- **Cosmo Technologies**, Denver, Colorado. Models **JrTrack 4**, **JrTrack 5 / 5 SE**.
  SIM included, school lock, Spotify. Claims to be the #1-selling 4G kids smartwatch on Amazon (US).
  <https://cosmotogether.com/> · <https://www.amazon.com/JrTrack-Enhanced-Parental-Controls-Activity/dp/B0DJ24GP97>
- **No EU distribution found. Romania: no. KILLED.**

## 56. Gabb (US) — Gabb Watch 3e

- US-only MVNO-model kids device, referenced only in US comparison tables.
  <https://www.myticktalk.com/pages/ticktalk-5-vs-others>
- **KILLED (US-only).**

## 57. Bark (US) — Bark Watch

- Bark Watch is a rebadged **Schok Chronovolt CV16** with Bark's monitoring layer (text, video and
  phone monitoring, SOS, managed contacts). US-only service.
  <https://www.bark.us/learn/bark-watch-vs-cosmo/> ·
  <https://www.amazon.com/Bark-Watch-Tracking-Monitoring-Contacts/dp/B0DMW2JBM2>
- **KILLED (US-only).**

## 58. US carrier own-brands — all region-locked

- **Verizon GizmoWatch 3** — "locked exclusively to Verizon", $40 activation, 36-month commitment.
  <https://www.verizon.com/connected-smartwatches/verizon-gizmo-watch-3/> ·
  <https://cosmotogether.com/pages/cosmo-vs-gizmo>
- **T-Mobile SyncUP KIDS Watch 2** (July 2024) — "only available to current T-Mobile customers with
  at least one active voice line"; no standalone line on another carrier.
  <https://www.businesswire.com/news/home/20240722550248/en/Meet-T-Mobiles-SyncUP-KIDS-Watch-2-Keeping-Families-Connected-Safely-and-Affordably> ·
  <https://www.t-mobile.com/devices/iot/syncup-kids-smartwatch>
- **AT&T amiGo Jr.** — appears in US comparison tables; lock status not separately verified, but it
  is an AT&T-branded IoT device. <https://www.myticktalk.com/pages/ticktalk-5-vs-others>
- **ALL KILLED for Romania — carrier-locked to US networks.**

## 59. Angel Watch (UK/US) — **quietly one of the better technical fits**

- **Angel Watch Series R** — the only device in this report publishing a **full band list**:
  > "Supported Bands 1,2,3,5,7,8,12,17,20,28" plus GSM 850/900/1800/1900.

  Covers **B3 (1800), B20 (800), B7 (2600), B1 (2100), B28 (700)** — every band the brief asks for.
- **Unlocked:** "International customers can use just about any GSM worldwide 4G network."
  CDMA not supported. The UK SKU ships with an **EE** SIM.
- **App:** "Angel Watch app", iOS + Android, **no subscription cost for the app**.
- **Price:** £149.99 (was £169.99); optional UK service plans £12.99–£17.99/mo, no contract.
  <https://angelwatchco.com/products/angel-watch-series-r> ·
  <https://www.amazon.com/Angel-Watch-Royal-Cadet-Blue/dp/B094YJQDKB>
- **ROMANIA: UNKNOWN.** No supported-country list published; registration with +40 is untested.
  Because the device is SIM-unlocked and the app has no subscription gate, the geo-block risk is
  *structurally lower* than Xplora/Spacetalk — but it is not proven.
- **Battery, release year, corporate parent: UNKNOWN.**

## 60. Moochies (UK/Australia)

- **Moochies Connect** 4G smartwatch phone — video and voice calls, GPS, SOS, safe zones,
  parental control, IP67. Built-in 4G SIM; UK plans **from £10/month**, no monthly contract.
  Sold at Very.co.uk, Amazon.co.uk and Best Buy (US).
  <https://www.very.co.uk/moochies-connect-smartwatch-4g-pink/1600869705.prd> ·
  <https://www.amazon.co.uk/Moochies-Connect-children-Certified-Neutral/dp/B09KNWD6SG> ·
  <https://www.bestbuy.com/site/moochies-connect-smartwatch-phone-gps-tracker-for-kids-4g-black/6500779.p?skuId=6500779>
- **Subscription required.** Countries: UK, US, AU evident. **Romania: no evidence. Bands UNKNOWN.**
- The bundled-SIM + own-plan model is the same architecture as Spacetalk/Locon — geo-gating risk.

## 61. TechSixtyFour — "My Gator Watch" (UK)

- Standalone GPS/WiFi phone watch, no phone pairing needed. Connects to **Vodafone, O2 and EE**
  and **includes free roaming in most of the EU**.
  <https://www.amazon.co.uk/Techsixtyfour-Smartwatch-Wearable-Mobile-Tracker/dp/B07KX12FS5>
- **4G status of current models: NOT confirmed** (the Gator line historically was 2G/3G).
  Current 2025-26 line-up: **UNKNOWN**. Romania: no evidence.

---

# PART 12 — BRANDS THAT DIED, EXITED MARKETS, OR SHUT DOWN THEIR SERVERS

This is the failure mode that matters most for this purchase. Every entry here shipped working
hardware that later became a brick or a geo-locked paperweight.

| Brand | What happened | Date | Source |
|---|---|---|---|
| **Vodafone Neo (Vodafone Smart Tech)** | Entire Smart Tech line **switched off**; devices including the Disney-themed Neo became unusable — reported as ~90% of devices turning into e-waste | **1 August 2024** | <https://www.karmactive.com/vodafones-smart-tech-shutdown-90-of-devices-turn-to-electronic-waste-by-august-2024/> |
| **Pingonaut** (DE) | **Insolvency**; returns of defective watches no longer accepted, system support discontinued | **September 2020** | <https://www.netzwelt.de/pingonaut-kidswatch/testbericht.html> |
| **Xplora** (NO) | Not dead — but operates a hard **supported-country allow-list**; watches must be activated in a supported country. **Romania excluded.** This bricked a Romanian user's X6 Play. Premium/Activity features restricted to 9 countries; untested in South America, Australia, Asia, Africa | ongoing | <https://xplora.co.uk/products/x6play> · <https://support.xplora.com/hc/en-us/articles/25569193703058-The-Activity-Platform-and-Premium-Access-What-you-need-to-know> |
| **Spacetalk** (AU) | **Platform migration broke the service in late 2025** — watches "stopped working, stopped pairing"; support-team changes and reduced engineering headcount; fixes targeted for December. Earlier in 2025 needed $3M rescue funding and $1M debt forgiveness. The original "Spacetalk Kids Smart Watch Phone" is listed as **discontinued** | **2025** | <https://www.pickr.com.au/news/2025/spacetalk-looks-to-december-for-platform-fixes-future/> · <https://www.productreview.com.au/listings/spacetalk> |
| **imoo** (CN) | **Exited Europe entirely for ~3 years**, returned June 2024 with the Z7 in UK/DE only. A vendor that has walked away from Europe once | exit ~2021, return **June 2024** | <https://www.prnewswire.co.uk/news-releases/imoo-is-returning-to-europe-after-3-years-with-the-newest-kids-flagship-sports-watch-phone-z7-302189692.html> |
| **Garmin Bounce (Gen 1)** | LTE coverage list **excluded Poland**; Garmin publicly told a Czech customer in Sept 2025 that "LTE coverage for the Bounce 2 is not available in that country, which may impact its availability" — proof Garmin enforces its country list and that lists change between generations | 2022–2025 | <https://x.com/Garmin/status/1970886350447513667> · <https://www.garmin.com/en-US/connectivity/bounce/lte-coverage/> |
| **Huawei Children's Watch 4X** | GSMArena status: **discontinued**; no EU successor found | released Aug 2020 | <https://m.gsmarena.com/huawei_children_s_watch_4x-10364.php> |
| **Niceboy Watch Kids Patrol** (CZ) | Product page **404s**; model absent from Niceboy's current smartwatch navigation — probable quiet discontinuation | as of 2026 | <https://www.niceboy.eu/> |
| **MyKi / Allterco** (BG) | **Not confirmed dead**, but the official news feed has no items after **2017–2018**, the parent rebranded around Shelly home automation, and no 2024-26 MyKi model launches were found. The Romanian Telekom programme dates from the same era. **Freshness risk — verify before buying** | — | <https://myki.watch/en/news/> · <https://corporate.shelly.com/product-series/> |
| **Elari** (LV/RU) | Official product pages 404; current line-up and server locations unverifiable. Russian-origin brand — continuity and data-jurisdiction risk | — | <https://www.elari.net/> |
| **Weenect** (FR) | Not dead, but its kids product is **2G-only**, which Romania's network roadmap makes untenable | — | <https://www.weenect.com/fr/fr/traceur-gps-enfant/> |
| **Fitbit / Google Ace LTE** (US) | Google discontinued the wider Fitbit smartwatch line; Ace LTE survives but LTE is **USA-only** by design | 2025 | <https://www.tomsguide.com/wellness/smartwatches/google-just-killed-off-fitbit-smartwatches-and-nobody-should-be-surprised> · <https://store.google.com/product/fitbit_ace_lte> |
| **Prixton Watchii** (ES) | Legacy locator watch; no current 4G kids model found | — | <https://www.amazon.es/Prixton-Watchi-Reloj-localizador-color/dp/B015HG705Y> |

### Historical (pre-2020, listed for completeness)
Tinitell (SE), Filip (US), hereO (IL) — first-generation kids GPS phone-watch brands, all
wound down. **No live sources were gathered in this sweep; status noted from general knowledge,
not sourced — treat as unverified.**

---

# PART 13 — WHAT I COULD NOT ESTABLISH (open items for the next pass)

1. **LTE band lists** are unpublished for almost every European brand: Garmin Bounce 2, Xplora,
   SaveFamily, SoyMomo, Anio, Garett, Carneo, One2track, Qlokkie, DEPLAY, TCL MT48, MyKi.
   Only **imoo** (per model) and **Angel Watch** publish them. For a B20-sensitive Romanian
   deployment this is the biggest blind spot.
2. **Whether these vendors' apps accept a +40 phone number / RO country at registration.** Only
   Garmin (coverage table), Xplora (allow-list), imoo (two conflicting lists), Spacetalk (region
   list) and Fitbit (US-only) publish anything at all. For SaveFamily, SoyMomo, Anio, Garett,
   Carneo, One2track, Qlokkie, DEPLAY, Angel Watch and MyKi this must be tested empirically.
3. **Kidywatch (FR)** — site blocked automated retrieval; a genuinely French-only brand, unassessed.
4. **ZTE K1 Pro** — appears in Nordic tests, no spec/country data found.
5. **MyKi's 2024-2026 status** — the single most important verification: is the Telekom Romania
   MyKi programme still live, and is there a current 4G model?
6. **Garett's EU/RO service footprint** — garett.eu returns 403 to automated fetch; Garett is the
   largest CEE brand and its Romania position is unresolved.
7. **imoo X10 price and EU release date.**
8. **Whether any Romanian operator other than Telekom (Orange RO, Vodafone RO, Digi) runs a
   kids-watch programme.** None found.

---

## Method note

Roughly 30 web searches across English, German, Italian, Spanish, French, Polish, Dutch, Czech,
Swedish, Hungarian and Romanian, plus ~40 direct page fetches of vendor sites. The session's
web-search quota was exhausted partway through; the remaining gaps in Part 13 are a direct
consequence and are listed rather than guessed.
