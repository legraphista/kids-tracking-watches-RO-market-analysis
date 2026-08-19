# Lens 1 — EU Retail Sweep: 4G Kids' GPS Smartwatches Buyable in Europe

**Compiled:** 2026-08-18
**Lens:** breadth of what can *actually be bought* from mainstream EU online retail and brand webshops, with an eye on whether it reaches and works in Romania.
**Not in scope:** deep technical teardown, app privacy analysis, SIM tariff economics.

**Models catalogued:** 60+ distinct, across four tiers — viable candidates, disqualified, white-label, and brands that have vanished.

## How to read this

- Every factual claim carries a source URL. Sources older than 2024 are marked explicitly.
- `UNKNOWN` means I could not find it. It is never a guess or an inference.
- Prices are what the page showed on the date noted. "Live 2026-08-18" means the page was actually fetched that day; "snippet-derived" means it came from a search-result title and is weaker evidence.
- Marketing copy is attributed ("the listing claims…"), never restated as fact.

## Method and its limits — read before trusting any gap

**What fetched successfully:** eMAG.ro (search *and* product pages — by far the best data source), Geizhals product pages, carneo.eu, canyon.eu, lamax-electronics.com, smartwatch.de, morele.net, savefamilygps.com, soymomo.es, xplora.co.uk, imoo.com, tradeinn.com, gpshorlogekids.nl.

**What returned HTTP 403 and blocked the sweep:** Amazon (all marketplaces), Alza (all storefronts, search *and* product), MediaMarkt.de/.es, Saturn.de, Otto.de, Kaufland.de, notebooksbilliger.de, Bol.com, Coolblue.nl, MediaWorld.it, El Corte Inglés, Fnac, Worten, ePrice, PcComponentes, Mediaexpert.pl, x-kom.pl, Empik.pl, garett.com.pl, spottergps.com. Galaxus timed out.

**The session web-search budget was exhausted (200/200 calls).** Several brands were never reached. Absence below means **not searched**, not **not sold**.

**⚠️ One methodological warning:** smartwatch.de's own "4G: yes/no" filter column reads "No" for the Xplora X6Play, which is demonstrably 4G. **That column is unreliable and was not used.**

---

# The Romania filter — three gates, and most candidates fail one

| Gate | Why it bites |
|---|---|
| **Delivery** | Several strong brands are geo-fenced. Anio ships **only to DE + AT**. SoyMomo's own shop ships **only to mainland Spain + Balearics**. Alza has no Romanian storefront. |
| **Radio** | Romania has shut down 3G. 2G/3G-only devices are dead — and are still openly on sale, including on eMAG.ro. **B20 (800 MHz)** carries indoor and rural coverage; several Chinese white-label modules ship **B1/B3/B5/B8 only, no B20**. |
| **Service/app** | Distinct from delivery. Garmin's Bounce LTE is a closed carrier service with a country whitelist. Xplora's own market list omits Romania. imoo's published EU carrier list covers UK/DE/ES/PL only. |

**Trap 1 — vendor connectivity.** A watch can ship to Romania and have the right bands and still be a brick if the vendor runs its own MVNO or eSIM and Romania isn't whitelisted. **Prefer devices taking an ordinary nano-SIM from Orange/Vodafone/Digi RO.**

**Trap 2 — VoLTE.** SaveFamily lists its network as "4G/3G/H+", SoyMomo Space Lite as "GSM · WCDMA · LTE/4G", Garett Twin 2 as "2G/3G/4G LTE". On a network with no 3G, a device that routes *voice* over a 2G/3G fallback rather than VoLTE will still send LTE location data but **fail to place calls**. Only the **TCL MT48**, **Canyon Sunny KW-48** and **imoo** explicitly advertise VoLTE.

**Trap 3 — the Digi tell.** Several Romanian listings and user reviews report watches that work on Vodafone but not Digi, or only partially on Orange. That failure pattern is the signature of a non-LTE or partial-LTE radio. It is the single most useful real-world signal available on eMAG, and it is buried in the review sections.

---

# A. Top candidates — published bands, confirmed Romanian stock

Only **five** devices in this entire sweep publish their LTE bands anywhere. Four of them are Romania-complete, and three of those are in stock on eMAG.ro.

## 1. Canyon Zefir KW-49 (CNE-KW49PB) — best-documented option actually stocked in Romania

- **Price:** **650.53 RON** (from 797.22), **in stock on eMAG.ro**, seller OVOLT România, live 2026-08-18. Also 650.53 RON seen in a second eMAG sweep.
- **4G:** Yes. **LTE bands: FDD B1, B2, B3, B5, B7, B8, B20, B28A + TDD B38/39/40/41.** **B20, B3, B7, B1, B28 all present — fully Romania-complete.**
- **Battery:** **900 mAh**, Canyon claims up to 3 days (~71 h tested).
- **App:** **Canyon Life** (iOS 14+ / Android 8+).
- **Other:** 1.44" IPS 240×240, IP67, GPS + Wi-Fi + LBS, Bluetooth 5.0. Nano-SIM, operator-agnostic.
- **Release year:** UNKNOWN.
- **URLs:** https://www.emag.ro/smartwatch-pentru-copii-canyon-zefir-kw49-4g-gps-roz-900mah-cne-kw49pb/pd/DMH1SM2BM/ · https://canyon.eu/product/cne-kw49pb/
- **Verdict:** **The strongest single find of this sweep.** Published Romania-complete bands, a 900 mAh battery, a plain nano-SIM, an English app, and domestic Romanian stock at a mid price. The 1.44" 240×240 screen is small and plain — that is the trade-off.

## 2. CARNEO GuardKid+ 4G ULTRA (2nd Generation)

- **Price:** **865.41 RON on eMAG.ro, in stock**, black/blue/pink, live 2026-08-18. €129.00 on carneo.eu.
- **4G:** Yes. The eMAG listing states "**4G - orice operator**" (any operator) — no vendor lock.
- **LTE bands (1st-gen ULTRA and Platinum, published):** **FDD-LTE B1 B2 B3 B5 B7 B8 B20 B28A**; WCDMA B1/B2/B5/B8; GSM B2/B3/B5/B8. **Romania-complete.** ⚠️ **Bands for the 2nd generation specifically are UNKNOWN — do not simply assume they carried over.**
- **Battery:** **1000 mAh** Li-Po — the largest here. Carneo claims ~4 days typical, 96 h standby.
- **App:** CARNEO Guard, Android + iOS, English available.
- **Other:** Android 8.1, 1 GB + 8 GB, IP67, 41×47×16 mm, 52 g. ⚠️ **Screen conflict:** carneo.eu says 1.69" IPS 240×280; Alza's marketing says 1.72" AMOLED. Unresolved.
- **⚠️ Caveat:** the listing claims an app store with WhatsApp / Instagram / TikTok / YouTube. For a 7-year-old that is a liability, not a feature — verify it can be locked down.
- **Release year:** UNKNOWN.
- **URLs:** https://www.emag.ro/search/CARNEO%20GuardKid · https://www.carneo.eu/en/product/smart-watch-carneo-guardkid-4g-ultra-black/ · https://www.alza.de/carneo-guardkid-4g-ultra-black-d12509132.htm
- **Verdict:** Biggest battery, operator-agnostic, domestic RO stock. Chase the 2nd-gen band sheet.

## 3. TCL MOVETIME MT48 — best hardware, one critical unknown

- **Price:** **897.99 RON on eMAG.ro, in stock, sold by eMAG itself** (not a marketplace reseller), Galactic Blue / Cosmic Pink / Nebula Grey, live 2026-08-18. €150 RRP at launch; ~€130 street outside the US; €157.00 at mobileshop.eu. Also stocked at MediaMarkt.es.
- **4G:** Yes, with **VoLTE explicitly stated**. eSIM **or** nano-SIM.
- **LTE bands:** **UNKNOWN.** Not on TCL's product page, its support page (404), or any retailer listing. **The one gap on an otherwise excellent candidate.**
- **Battery:** **900 mAh**; TCL claims up to 2.5 days use / 7 days standby.
- **GPS:** Dual-frequency **L1 + L5** — the only dual-band GNSS device in this entire sweep, and a genuine technical advantage in urban canyons and near buildings. TCL claims per-second updates and anti-interference.
- **App:** TCL Connect. TCL claims GDPR, ISO 27701 and ISO 27001 compliance.
- **Other:** IP68 + 2ATM, 1.68" display, 2 MP camera, School Time Mode, Good Design Award 2025.
- **Release:** announced 2025-09-07; EU retail Germany/UK/Spain/Italy/France from late October 2025. **Current generation.**
- **URLs:** https://www.emag.ro/ceas-smartwatch-pentru-copii-tcl-movetime-kids-watch-mt48-1-68-4g-gps-ip68-2atm-camera-2mp-galactic-blue-mt48x-3glca11/pd/D1418N2BM/ · https://www.tcl.com/global/en/watches/mt48 · https://www.prnewswire.com/news-releases/tcl-launches-tcl-movetime-mt48-kids-smartwatch-designed-with-advanced-safety-and-digital-well-being-for-families-302545322.html · https://www.gizmochina.com/2025/09/07/tcl-movetime-mt48-kids-smartwatch-launched-specs-price/
- **Verdict:** Best GNSS in the field, VoLTE confirmed, sold direct by eMAG rather than a marketplace reseller, current generation. Chase the CE/RED declaration of conformity for bands.

## 4. CARNEO GuardKid+ 4G Platinum

- **Price:** **565.52–707.65 RON on eMAG.ro, in stock**, live 2026-08-18. €155.00 on carneo.eu; €99.90–€105.90 at Alza; 45,790 Ft at Alza.hu (snippet-derived).
- **LTE bands:** **FDD-LTE B1 B2 B3 B5 B7 B8 B20 B28A** — Romania-complete.
- **Battery:** 1000 mAh; ~4 days / 96 h standby. **App:** CARNEO Guard.
- **Other:** 1.44" IPS 240×240, 512 MB + 4 GB, IP67, GPS+LBS+WiFi, video calling.
- **Release: 2023.** ⚠️ **Old-stock signal:** carneo.eu prices it (€155) *above* the newer ULTRA (€129) — classic end-of-life pricing.
- **URLs:** https://www.carneo.eu/en/product/smart-watch-carneo-guardkid-4g-platinum-black/ · https://www.emag.ro/search/CARNEO%20GuardKid
- **Verdict:** Confirmed B20 at the lowest CARNEO price on eMAG, but a generation old and oddly priced on the brand's own site.

## 5. Xplora XGO3 / XGO3 G2 — good bands, ⚠️ service-country doubt

- **Price:** **985.62 RON (blue) / 1,126.69 RON (black) on eMAG.ro, in stock**, seller GSM KLINIKA, live 2026-08-18. €99.00–€112.96 at German retail (Geizhals, 2026-08-18). €149.00 smartwatch.de. £99 (from £139) Xplora UK. Xplora's own DE shop wants **€159.00 without contract**, or €49.00 tied to 24 months at €6.99/mo. **The Romanian price is roughly double the German one.**
- **4G:** Yes. **LTE bands: EU model B1/B3/B7/B8/B20** (3G B1/B8, 2G B2/B3/B5/B8). **Romania-complete except B28.** The US model is a different SKU (B2/4/5/7/12) — don't buy that one.
- **Battery:** **900 mAh, ~72 h** (Xplora UK and eMAG). Geizhals and Xplora DE say 850 mAh — **sources conflict**.
- **App:** "Xplora App", **renamed Xplora Guardian App as of June 2025** (iOS 17+ / Android 7+).
- **Other:** 1.3" TFT 240×240, Unisoc W307, 128 MB RAM, 2 MP, IP68, 47.5 g, Pogo-pin charging, school mode.
- **⚠️ Romania problem:** Xplora's stated online-purchase markets are **Spain, Norway, Denmark, Finland, US, UK, Germany, Sweden, France, Poland — Romania is not among them.** The eMAG listings are third-party marketplace sellers. **Whether the Guardian app accepts a +40 registration is UNKNOWN and must be verified before purchase.** Amazon.de bundles a **12-month-minimum Xplora Connect SIM**.
- **Also stocked at:** Coolblue.nl, El Corte Inglés (A55311885/6/7), Fnac.fr (with nano-SIM), MediaMarkt.de, Otto.de, smartwatch.de.
- **URLs:** https://www.emag.ro/smartwatch-pentru-copii-xplora-xgo3-g2-nano-sim-negru-xplora-go3g2-bk/pd/DZRF78YBM/ · https://geizhals.de/xplora-xgo3-v113036.html · https://support.xplora.com/products/xgo3-technical-specifications · https://xplora.co.uk/products/xgo3
- **Verdict:** Good bands, mainstream, cheap in Germany. **The service-country question is the blocker, not the hardware.**

---

# B. Further viable candidates

## 6. Canyon Sunny KW-48 (CNE-KW48BL / KW48YG / KW48VL)

- **Price:** **529.99 RON** (from 641.30), **in stock on eMAG.ro**, sellers Prestigio Plaza and others, live 2026-08-18. Also at MediaWorld.it (price 403).
- **4G:** Yes — **4G VoLTE explicitly**. **Bands UNKNOWN** (Canyon publishes them for the KW-49 but not the KW-48).
- **Battery:** mAh **UNKNOWN**; Canyon claims up to 2 days active, 5 days standby with SIM, 7 days without.
- **App:** **Canyon Life**. Includes "Canyon Safetrack AI", a Wi-Fi-scan indoor positioning feature. Nano-SIM, IP67.
- **URLs:** https://www.emag.ro/ceas-copii-canyon-electronic-4g-gps-albastru-cne-kw48bl/pd/D861M13BM/ · https://canyon.eu/product/cne-kw48bl/
- **Verdict:** Cheaper than the KW-49 and VoLTE-confirmed, but bands unpublished. If price matters, this; if certainty matters, the KW-49.
- **⚠️ Related warning:** eMAG also carries **Canyon KW-37, KW-41, KW-43, KW-44** at ~130–650 RON. These are the older Cindy/Sammy generation, canyon.eu 404s on those SKUs, and their network type could not be verified. **Treat as likely 2G — verify before purchase.**

## 7. imoo Watch Phone Z3

- **Price:** **€126.65** (from €149.00) on the official imoo EU store, live 2026-08-18. Grey-market on eMAG.ro at 967.44–2,215.68 RON for the same watch in different colours — a red flag on those sellers.
- **Retailer:** imoostore.com/eu, which **explicitly delivers to Romania**, alongside UK, DE, IE, ES, DK, FR, NL, BE, GR, PT, SI, SE, PL, CZ, LU, SK, HU, LT, BG, AT.
- **4G:** Yes, **VoLTE supported**. **LTE bands: FDD-LTE B1/B3/B5/B7/B8/B20/B28** + TD-LTE B34/B38/B39/B40/B41. **Romania-complete.**
- **Battery:** 740 mAh. imoo claims all-day use with a power-saving mode; **no hour figure published**.
- **GPS:** GPS + GLONASS + QZSS + Wi-Fi + LBS. **App:** imoo App; imoo states no subscription fee.
- **Other:** 1.5" TFT 320×360, 8 GB, Spreadtrum UWS6135E, 2 MP front camera, water-resistant to 20 m per ISO 22810:2010.
- **⚠️ Caveat:** imoo's published European carrier list names only UK, German, Spanish and Polish operators. **Romanian carriers are not listed.** Delivery to RO is confirmed; *network certification* in RO is UNKNOWN.
- **URLs:** https://www.imoo.com/eu/products/z3 · https://www.imoostore.com/eu/products/imoo-smartwatch-z3 · https://eu.imoostore.com/blogs/order-shipping/where-do-you-deliver
- **Verdict:** Excellent bands, confirmed RO delivery, good price, best water resistance in the field. Ask imoo support about RO carriers first.

## 8. imoo Watch Phone Z7

- **Price:** **€186.15** (from €219.00) imoo EU store, live 2026-08-18. £189 UK. 1,114.56 RON eMAG.ro marketplace.
- **Bands: FDD-LTE B1/B3/B8/B20** + TD-LTE B34/38/39/40/41; WCDMA B1/B8; GSM 900/1800. **B7 and B28 absent**, but B3 + B20 + B1 present.
- **Battery:** 740 mAh. A reviewer claims "almost three days" (whatgadget.net — a reviewer's claim, not a spec).
- **GPS:** GPS, GLONASS, BeiDou, Galileo, QZSS + Wi-Fi + LBS. 2 MP front + 5 MP rear flip camera. 20 m water resistance.
- **Stated EU carriers:** UK O2/Vodafone; DE Telekom/O2/Vodafone; ES Movistar/Vodafone/Orange; PL Play/Orange/T-Mobile. **Romania not listed.**
- **URLs:** https://www.imoo.com/eu/products/z7 · https://www.imoostore.com/eu/products/imoo-smartwatch-z7

## 9. imoo Watch Phone X10 — flagship

- **Price:** **€299.00** imoo EU store. eMAG.ro marketplace 1,610.50 RON (pink) to 3,579.99 RON (grey) — pricing chaos.
- **Bands:** FDD-LTE **B1/B2/B3/B4/B5/B8/B12/B13/B17/B18/B19/B20/B26/B28/B66** + TD-LTE B38/B40/B41. B3, B20, B1, B28 present. ⚠️ **B7 (2600) absent.**
- **Battery:** 740 mAh, silicon-anode. imoo claims "ultra-long battery life" but **publishes no runtime** — conspicuous, given the hardware below.
- **GPS:** 5 GNSS constellations + Wi-Fi + LBS + **barometric floor detection**.
- **Other:** **Snapdragon Wear 4100**, 1.6" AMOLED, 1 GB + 32 GB, 8 MP + 5 MP, flip/detachable, 20 m water resistance, CaremeOS. **VoLTE required for calling.**
- **Age positioning:** imoo markets X10 for **ages 7–15** — the upper half of that range, realistically.
- **URLs:** https://www.imoo.com/eu/products/x10 · https://www.imoostore.com/eu/products/imoo-smartwatch-x10
- **Verdict:** Technically the most capable device here. €299 buying an AMOLED plus a Snapdragon 4100 on 740 mAh raises a real school-day battery question that imoo declines to answer.

## 10. imoo Watch Phone Z1 — ⚠️ **no B20**

- **Price:** €119.00 imoo EU store; **€88.46** German retail (Geizhals 2026-08-18). 699.99 RON eMAG.ro ("last item").
- **Bands: FDD-LTE B1/B3/B5/B28 + TD-LTE B34/B38/B39/B40.** ⚠️ **No B20.** For a child who must be reachable *inside* a Romanian school building, that is a material weakness.
- **Battery:** 740 mAh; imoo states **approximately 1–2 days**.
- **Other:** 1.3" TFT 240×240, 2 MP, **IPX8 splash-only** — imoo explicitly says not for swimming or showering. 128 MB RAM/ROM.
- **URLs:** https://www.imoo.com/eu/products/z1 · https://geizhals.de/imoo-watch-phone-z1-v119159.html
- **Verdict:** **Flag — no B20.** Cheap, wrong compromise here.

## 11. Garett Kids family (Poland) — the volume play in Romania, and completely undocumented

Garett has the deepest 4G kids line in CEE and **six SKUs in stock on eMAG.ro sold via an official GARETT vendor account**. Polish retail (morele.net) is roughly 40–55% cheaper.

| Model | eMAG.ro (live 2026-08-18) | morele.net PL (live 2026-08-18) | Documented specs |
|---|---|---|---|
| **Kids Tech 4G** | **311.25 RON** (from 373.75), in stock | 245 zł | 1.69" IPS HD, IP67, GPS+LBS+WiFi. Battery/app UNKNOWN |
| **Kids Cute 2 4G SET** | **411.25 RON**, in stock | UNKNOWN | 1.83", IP67, face unlock, 7 games. Rest UNKNOWN |
| **Kids Twin 2 4G** | **423.75 RON**, in stock (blk/blu/pink) | 274.99 zł blk *(last unit)* / 298 zł blu | **900 mAh, up to 3 days**, 1.83" IPS 240×284, 8 GB, dual cam, IP67, "**2G/3G/4G LTE**", EAN 5904238486283 |
| **Kids Essa 4G** | **517.42 RON**, in stock | 349 zł | 1.83" IPS HD, Android 8.1, 1 GB+8 GB, IP67, "up to 4 days with active SIM". ⚠️ morele lists **120 mAh** — near-certainly a listing error; treat as UNKNOWN |
| **Kids Rel 4G** | 411.25 RON | — | 1.85". Rest UNKNOWN |
| **Kids Hero Pro 4G** | 423.75–895 RON | — | 1.85". Rest UNKNOWN |
| **Kids Nice Pro 4G** | 373.75 RON | 249 zł | Also at MediaWorld.it. Specs UNKNOWN |
| **Kids Essa GO** | 698.75 RON | — | 1.69". Specs UNKNOWN |
| **Kids Essa 2 4G AI** | — | 528 zł | Newest gen. Specs UNKNOWN |
| **Kids Vibe AI 4G** | — | 439 zł | Specs UNKNOWN |
| **Kids Rock 4G RT** | — | 198 zł | Cheapest 4G Garett. Specs UNKNOWN |
| **Kids eSIM 4G** | 736.16–807 RON (from 844.35) | 478.69 zł | ⚠️ **eSIM-only, no physical SIM slot** — a real RO deployment constraint |
| Kids Sun 4G / Sun Pro 4G / Protect 4G / Neon 4G / Kids 4G (base) | — | UNKNOWN | x-kom.pl / Mediaexpert.pl, prices 403 |
| ⚠️ **Kids Twin 4G (gen 1)** | — | 319 zł | Superseded by Twin 2 → **old-stock signal** |

- **⚠️ LTE bands: UNKNOWN across the entire Garett line.** garett.com.pl returns 403 and no retailer publishes them. **Companion app name: UNKNOWN** — not stated on any reachable page. Note the Twin 2's "2G/3G/4G LTE" phrasing raises the VoLTE question.
- **URLs:** https://www.emag.ro/search/smartwatch+copii+Garett · https://www.emag.ro/ceas-smartwatch-pentru-copii-garett-twin-2-gps-8gb-negru-1-8-twin-2-4g-blk/pd/D0SCRQYBM/ · https://www.morele.net/wyszukiwarka/?q=garett+kids+4g
- **Verdict:** Best price-to-availability ratio in Romania by a wide margin, backed by an official vendor account. **And the single biggest documentation gap in this dataset** — no bands, no app name, no reliable battery figures.

## 12. LAMAX WatchY4 Play (Czech Republic)

- **Price:** **1,294.32 RON, in stock on eMAG.ro**, seller BRANDSLANDIA GROUP, live 2026-08-18. 2,249.10 Kč (from 2,499) on lamax-electronics.com, live 2026-08-18.
- **4G:** Yes — "2G, 3G, 4G LTE". **Specific bands UNKNOWN.**
- **Battery:** 3.8 V **680 mAh** Li-Pol; LAMAX claims 120 h standby / 2–3 days normal.
- **App:** **LAMAX Connect**. Positioning branded "PinPoint®".
- **Other:** 1.4" 240×240 Gorilla Glass, IP68, 52 g. Described as fourth-generation.
- **⚠️ Bundle note:** ships with a free 200 MB T-Mobile nano-SIM, a Czech-market bundle irrelevant in Romania.
- **URLs:** https://www.emag.ro/lamax-ceas-smartwatch-curea-din-silicon-pentru-copii-watchy4-play-roz-890558/pd/D30PVK2BM/ · https://www.lamax-electronics.com/en/products/lamax-watchy4-play-blue
- **Verdict:** Reputable CEE brand, IP68, in RO stock — but 680 mAh and unpublished bands at ~1,294 RON is poor value against the Canyon KW-49 at 650 RON with published bands and 900 mAh.

## 13. LAMAX WatchY4 Plus
2,969.10 Kč (from 3,299), live 2026-08-18. ⚠️ **4G UNCONFIRMED** — the Plus page, unlike the Play page, does not state network type. 680 mAh, 120 h standby, LAMAX Connect, 1.7" 240×280 Gorilla Glass. https://www.lamax-electronics.com/en/products/lamax-watchy4-plus

## 14. SaveFamily Iconic Plus 2 (Spain)

- **Price:** **€129** (from €149) savefamilygps.com, live 2026-08-18. Refurbished customer returns at 364.99 RON on TradeInn/Kidinn.
- **Retailers:** savefamilygps.com — **shipping policy explicitly lists Romania**, €10 standard (free over €76) / €12.50 express, 2–4 days UPS. Also Amazon.es, TradeInn/Kidinn (prices in RON).
- **4G:** Spec sheet says "**4G/3G/H+**". **Bands UNKNOWN. VoLTE UNKNOWN** — see Trap 2.
- **Battery:** 850 mAh, no runtime published. SaveFamily claims "20% more battery life" with their own SIM (marketing claim).
- **Other:** 1.78"/1.85" FHD touchscreen, 1 GB + 8 GB, Android 8.1, 0.3 MP camera, **NFC**, IP67.
- **App:** SaveFamily (Android + iOS), includes "MarIA", a Spanish children's AI.
- **Release:** marketed as "Best Smartwatch 2024".
- **URLs:** https://savefamilygps.com/en/products/iconic-plus-2 · https://savefamilygps.com/en/policies/shipping-policy
- **Verdict:** **Confirmed shipping to Romania** with a real brand warranty. But unpublished bands, a 0.3 MP camera on a €129 device, and a big FHD screen on 850 mAh.

## 15. SaveFamily Iconic Plus (gen 1)
€105 (from €115). **Battery: 1000 mAh — larger than the newer Iconic Plus 2.** "4G/3G/H+", bands UNKNOWN. 1.4" IPS, SC8521E, Android 8, 1 GB + 8 GB, 0.3 MP, IP67. Release year UNKNOWN. https://savefamilygps.com/en/products/watch-with-gps-and-call-with-new-more-advanced-functions-new-iconic-plus-4g
**Verdict:** Arguably the better buy of the two on battery grounds alone.

## 16. SaveFamily Slim — ⚠️ battery
€89 (from €95); 427.99–428.49 RON at TradeInn/Kidinn. **Release year: 2025.** **Battery: 550 mAh — the weakest in this document.** "4G/3G/H+" (ASR3603S), bands UNKNOWN. 1.28" IPS, 128 MB / 198 MB, 1 MP side camera, **IPX7**. Positioned "Junior +8 years". https://savefamilygps.com/en/products/4g-watch-with-gps-and-call-slim-model-the-most-stylish-and-discreet-smartwatch-for-kids
**Verdict: flag — 550 mAh is unlikely to survive a school day with active GPS polling.** Also aimed at 8+, not 7.

## 17. SaveFamily Enjoy / SaveWatch Plus / SaveWatch Plus 2
- **Enjoy** — €89 (from €95), **650 mAh**, **CAT1 modem (ASR3603)**, 1.4" IPS, 128 MB/196 MB, IP67. Kids 4–7 bracket — right age band, but a CAT-1 modem and 650 mAh are both modest. https://savefamilygps.com/products/reloj-gps-enjoy
- **SaveWatch Plus 2** — €139 (from €159); 686.49 RON TradeInn. 4G LTE, GPS+Wi-Fi+LBS, 1.4" IPS, IP67. SaveFamily markets it as the only kids' watch with face unlock. **Battery and bands UNKNOWN.** https://savefamilygps.com/en/products/reloj-savewatch-plus-2
- **SaveWatch Plus** — €129 (from €149); football-club editions (Valencia CF, Atlético Madrid, Athletic Club) at 675.99–676.99 RON on TradeInn. Specs UNKNOWN.
- **Iconic Plus Mr. Wonderful** — €105, cosmetic variant.

## 18. Elari KidPhone 4GR
- **Price:** €119.00 (black) / €129.00 (yellow) on elari.tech — **both showing sold out** when checked. **Available via TradeInn/Kidinn, which explicitly ships to Romania and prices in lei.** Also Amazon.de/.co.uk/.be/.fr.
- **4G:** Yes. **Bands UNKNOWN** — Elari's "technical specifications" page is a disclaimer page with no specs, warning that "CPU model, RAM and ROM module are also subject to change without additional notice." A meaningful transparency problem in a device you're buying for its radio.
- **Battery:** **580 mAh, up to 48 h standby** per TradeInn (Elari's own page doesn't say).
- **Other:** 1.3" round 240×240, 2 MP, GPS/Wi-Fi/LBS/GLONASS, MP3, pedometer, 4 games, class mode.
- **App:** Elari's own, with **KidGram**, a parent-controlled Telegram variant; Elari states own servers and full control.
- **URLs:** https://www.elari.tech/products/kidphone-4gr · https://www.tradeinn.com/kidinn/en/elari-kidphone-4gr-smartwatch/139880660/p

## 19. Elari KidPhone 4G Lite
€99.00 elari.tech; **€75.99 at TradeInn/Kidinn**, in stock, free shipping, ships to Romania. 4G, bands UNKNOWN. **Battery 600 mAh**, USB-C. 1.3" IPS 240×240, GPS + Wi-Fi + LBS, safe zones. https://www.tradeinn.com/kidinn/en/elari-kidphone-4g-lite-smartwatch/142635017/p
**Verdict:** Cheapest confirmed ship-to-Romania named brand. 600 mAh is thin for a full day.

## 20. Elari KidPhone 4G WINK
€139.00 elari.tech. All specs UNKNOWN. https://www.elari.tech/

## 21. Xplora X6 Play / X6 Play (2nd Gen)
- **Price:** **€139.95** (black) / €169.00 (pink) German retail (Geizhals 2026-08-18); 2nd Gen ~€142 blue / €169.89 eSIM. **€199.00–€199.95 at smartwatch.de** (live 2026-08-18). £109.99 (from £179) UK + £7.99/mo, 12-month minimum.
- **4G:** Yes (nano-SIM or eSIM by SKU). **Bands UNKNOWN** — Xplora's technical-specs repository does not publish them.
- **Battery:** 880 mAh (Geizhals) / 900 mAh ~72 h (Xplora UK) — **sources conflict**. 1.52" TFT 360×400, **Snapdragon Wear 2500**, 1 GB + 8 GB, 5 MP, IP68. Geizhals dates it 2022–2025.
- **App:** Xplora Guardian. Same RO service-country doubt as the XGO3.
- **URLs:** https://geizhals.de/xplora-x6-play-v221128.html · https://www.smartwatch.de/smartwatch/xplora-x6play-2-gen/ · https://www.otto.de/p/xplora-x6play-esim-2-gen-kinderuhr-mit-gps-anruffunktion-smartwatch-4g-CS0MF30XZ/

## 22. Xplora X6 Pro — ⚠️ eSIM-only, and carrier-locked in Germany
- **Price:** from **€226.00**, most retailers ~€229.00 (Geizhals 2026-08-18). Saturn, MediaMarkt, Galaxus.
- **Battery: 760 mAh, ~3 days typical** per Geizhals — the clearest battery claim of any Xplora.
- **Other:** 1.2" **round OLED 390×390**, Snapdragon Wear 4100, 1 GB + 8 GB, 5 MP, IPX8, **eSIM**. Listed since 2024-09-30. Bands UNKNOWN.
- **⚠️ The Otto.de variant is a Telekom-or-Freenet-locked eSIM.** Combined with unknown bands and unknown RO service, this is the highest-risk Xplora.
- **URLs:** https://geizhals.de/xplora-x6-pro-grau-a3318029.html · https://www.otto.de/p/xplora-xplora-x6pro-smartwatch-fuer-kinder-smartwatch-fuer-kinder-geeignet-gps-tracking-integriert-gps-tracking-integriert-C1913521898/

## 23. SoyMomo Space 3.0 / 2.0 / Space 4G / Lite — ⚠️ no direct RO shipping
- **Price (soymomo.es, live 2026-08-18):** Space 3.0 **€99** (was €169); Space 2.0 **€69** (was €129); Space Lite **€59** (was €99.99). **Space 4G €109.00 "Verfügbar" at smartwatch.de**; Space Lite €89.99 there. 41–46% off across the range is an old-stock signal.
- **Battery (published — better than most):** Space 3.0 **1000 mAh, up to 48 h**; Space 2.0 **1000 mAh, "full day"**; Space Lite **680 mAh, 32 h standby / 16 h use**; Space 4G **680 mAh, 2–5 days**.
- **4G:** Space 3.0 "LTE/4G, BT 5.0, Wi-Fi 2.4"; Space Lite "**GSM · WCDMA · LTE/4G**"; Space 4G "2G 3G 4G GSM LTE WCDMA". **Bands UNKNOWN for all.** The WCDMA in these stacks is the VoLTE worry.
- **Other:** Space 3.0 = 1.85" 384×320, quad A53 1.3 GHz, 1 GB/8 GB, 2 MP, IP67, 68 g, SoyMomo OS 3.0. Space 2.0 = 1.4" TFT, IP65. Lite = 1.4" 240×240, RTOS, IP65. smartwatch.de's Space 4G page references 2020 testing → **older platform**.
- **App:** SoyMomo Watch (iOS 16+ / Android 8+).
- **A "Space 4.0" appears on the collection page but its product page 404s** — price and specs UNKNOWN.
- **⚠️ Shipping:** SoyMomo's own shop ships **only to mainland Spain and the Balearics** and explicitly says it does not ship to other EU member states. **Romania not served directly.** Route to RO would be Amazon.es, PcComponentes.es, MediaMarkt.es or smartwatch.de.
- **URLs:** https://soymomo.es/collections/smartwatches · https://soymomo.es/policies/shipping-policy · https://soymomo.es/products/space-3-0 · https://www.mediamarkt.es/es/product/_smartwatch-soy-momo-smartwatch-space-negro-4g-vi-79187290.html
- **⚠️ Note:** a recurring user complaint surfaced in review synthesis is that the battery does not last a full school day.

## 24. TCL MOVETIME MT46 / MT42X / MT40 — previous generations
- **MT46** — 4G nano-SIM, bands UNKNOWN, **680 mAh, 2 days working / 6.5 days standby**, 1.54", 2 MP, GPS/BeiDou/AGPS/GLONASS, **IP65 only**. EU price UNKNOWN. https://www.tcl.com/global/en/watches/mt46
- **MT42X / Family Watch 2** — **€149.90 at smartwatch.de** (live 2026-08-18). On Amazon.de with Telekom (+€30 voucher) and Vodafone (+€50 voucher) SIM bundles. 4G confirmed, two-way video calling, TCL Kids OS, 57 g, "up to 7 days standby", IP65. No mAh, no bands.
- **MT40 (Family Watch Kids)** — €129.90 smartwatch.de. Predecessor to the MT48 → old stock.
**Verdict:** all superseded by the MT48; no reason to choose them.

## 25. Forever (Poland)
- **Kids Boost KW-530** at MediaWorld.it — the SKU title itself states **4G (LTE), waterproof, 48 h battery life**. Bands/mAh/app UNKNOWN, price 403. https://www.mediaworld.it/it/product/_smartwatch-per-bambini-forever-kids-boost-kw-530-4g-lte-cm-waterproof-48-h-blu-165777229.html
- **Look Me 3 KW-520** at Mediaexpert.pl — 4G LTE + Wi-Fi, voice + video calls, GPS + travel history. Price 403.
- **Kids See Me 3 KW-320** at Mediaexpert.pl — nano-SIM, 4G LTE, geofencing. Price 403.

## 26. Celly KidsWatch 4G (Italy)
At MediaWorld.it — 4G, SIM slot, 1.40" colour display, camera, video calls. Price/bands/mAh UNKNOWN. ⚠️ A **separate "Celly KIDSWATCH" SKU without "4G"** is also on sale — generation UNKNOWN, **2G-suspect**. https://www.mediaworld.it/it/content/salute-e-benessere/salute-e-benessere-smartwatch/celly-kidswatch-4g

## 27. Vidimensio (Germany) — animal-named range at smartwatch.de
"Kleiner Leopard" €169.00 (**flagged 4G on the category page — but see the smartwatch.de reliability caveat, treat as unconfirmed**) · Kleiner Gorilla II €179.00 · Kleiner Leopard II / Hase II €139.00 each · Kleiner Panda €112.90 · Kleiner Biber €119.90. All prices live 2026-08-18. **Bands, battery, app, network type UNKNOWN.** https://www.smartwatch.de/kinder-smartwatch/

## 28. Mibro P6 4G LTE (Poland)
**230.53 zł, listed as "outlet"** on morele.net, live 2026-08-18. **"Outlet" is an explicit old-stock signal.** Specs UNKNOWN.

## 29. Calmean (Poland)
Calmean Go 139.99 zł (1.4", GPS) · Calmean Sport 219.99 zł (1.3", IP67) · Calmean Child Watch Easy 119.00 zł (1.44", IP67). All morele.net, live 2026-08-18. **Network type UNKNOWN for all; the price points strongly suggest 2G — verify.**

## 30. GPSHorlogeKids (Netherlands) — Wonlex-platform reseller
Own webshop, prices live 2026-08-18: **CURVE 4G €79.95 · PAX 4G €79.95 · TINY 4G €79.95 · EDGE 4G €94.95–99.95 · JUNIOR MAX 4G €89.95–99.95 · OMNI 4G €89.95–99.95.** Apps: **Wonlex** and **SeTracker2** — i.e. rebadged Wonlex hardware, so see the Wonlex band warning below. Battery UNKNOWN. Also sells via Bol.com. RO shipping UNKNOWN. https://www.gpshorlogekids.nl/

---

# C. Explicitly disqualified — recorded so nobody re-researches them

## 31. Kruger&Matz Smartkid (KM0469BL) — ⚠️ **2G ONLY, AND THE LISTING ADMITS IT DOESN'T WORK ON DIGI**
**181.25 RON, "ultimul produs in stoc", seller VEXIO, on eMAG.ro, live 2026-08-18.** GSM 850/900/1800/1900 only — **no 3G, no LTE**. The listing itself states *"NU FUNCTIONEAZA IN RETEAUA DIGI SI PARTIAL IN VODAFONE"*. 400 mAh, 1.44", IP67, 0.3 MP, GPS+LBS. **The app is orphaned** — users report the KrugerMatz Smartkid app no longer exists and vendor support tells buyers to use SeeTracker2 instead. Abandonware.
https://www.emag.ro/ceas-pentru-copii-kruger-matz-smartkid-negru-km0469bl/pd/DDBW72MBM/

## 32. CARNEO GuardKid+ MINI — ⚠️ **2G/3G ONLY, sold at €109 by a brand whose other models are fine**
€109.00 on carneo.eu, live 2026-08-18. **"2G/3G" SIM support, no LTE. Dead in Romania.** 450 mAh, ~2–3 days real / 96 h standby, Carneo Guard app, 1" IPS 240×240. The trap here is brand halo: CARNEO's ULTRA and Platinum are among the best-documented 4G options in this document, and the MINI sits in the same catalogue.
https://www.carneo.eu/en/product/smart-watch-carneo-guardkid-mini-black/

## 33. Wonlex KT24S — ⚠️ **2G, in stock in Romania right now**
**300.82–369.05 RON on eMAG.ro** (black/pink/blue), live 2026-08-18. Dead network, actively sold.
https://www.emag.ro/pd/DY623VMBM/ · https://www.emag.ro/pd/DSDTFCMBM/ · https://www.emag.ro/pd/DDV3Y1MBM/

## 34. SaveFamily Junior 2G — ⚠️ **2G, on eMAG.ro at 142.49 RON**
A 2G watch on sale in a Romanian storefront in 2026. Also **SaveFamily Superior / "Full Aquatic"** on Amazon.es carry no 4G claim on 2019-era ASINs.

## 35. Elari KidPhone 2 (2G) and KidPhone 3G — ⚠️ **still on Amazon.fr in 2026**
Both label their generation in the listing title. Romania's 3G is off.
https://www.amazon.fr/ELARI-KidPhone-Intelligente-t%C3%A9l%C3%A9phone-Satellite/dp/B07GBQBGYC · https://www.amazon.fr/ELARI-KidPhone-Rouge-Tracker-Personentracker/dp/B07MTCGFYN

## 36. MyKi Watch 4 / Watch 4 Lite (Bulgaria) — ⚠️ **network type unconfirmed, brand in decline**
- **467.99 RON on eMAG.ro, "ultimul produs in stoc"**, seller eMAG, live 2026-08-18. Also Watch 4 Lite pink 339.99 RON refurbished; Watch 4 4G variants 409.99–469.99 RON **refurbished**.
- **⚠️ Network type UNCONFIRMED** — the eMAG listing does not state 2G/3G/4G. **Reviews report it does not work on Digi and has problems on Orange (series 21), working only on Vodafone** — the classic signature of a non-LTE or partial-LTE radio.
- **⚠️ Battery figures conflict:** the eMAG listing says **450 mAh, "up to 50 h"** (users report 1–3 days); mykifamily.com says **800 mAh, up to 30 h standby, ~1 h talk time** for the MyKi 4. Either way it is weak.
- Micro-SIM (not nano), 1.3", IP67, GPS+LBS+WiFi. App: MyKi Watch.
- **⚠️ Vendor health:** **myki.watch has an expired TLS certificate** as of 2026-08-18 — the brand's own site is unreachable. **Four of five eMAG SKUs are refurbished and the one new unit is last-in-stock.**
- https://www.emag.ro/smartwatch-copii-myki-watch-4-lite-cu-tripla-localizare-lbs-gps-wi-fi-impermeabil-negru-myki-4-lite-black/pd/DX8WTXMBM/
- **Verdict:** a brand exiting the Romanian channel. Avoid.

## 37. Fitbit Ace LTE — ⚠️ **not available in Europe at all**
US-only (excluding Alaska and territories), device *and* app. Connectivity depends on "Ace Pass", US-only; even on Wi-Fi abroad, location/calls/text do not work. Fitbit staff stated in Dec 2024 there was no ETA for Spain and it would not arrive within six months. **Reason: geographic.**
https://support.google.com/product-documentation/answer/14953333

## 38. Pingonaut (Germany) — ⚠️ **manufacturer insolvent AND 2G hardware**
Geizhals annotates the Kidswatch Panda listing "der Hersteller ist insolvent". All Amazon.de listings are 2017–2020 editions with no 4G claim. A cloud-dependent child tracker from an insolvent vendor is a compound risk: dead radio *and* a backend that may switch off. Models: Kidswatch Panda, Puma, 2019/2020 editions.
https://geizhals.de/pingonaut-kidswatch-panda-speed-blau-a2122964.html

## 39. Anio 6 (Germany) — ⚠️ **excluded on shipping only; otherwise the most honest vendor here**
€199.00 anio.eu / €198.90 German retail (Geizhals 2026-08-18) / €199.00 smartwatch.de / also Kaufland.de and Telekom. 4G (first Anio with LTE). **Bands UNKNOWN. Battery 595 mAh, and Anio states 24–48 h depending on location-polling interval and signal strength** — the most honest battery disclosure of any vendor in this document. App: Anio App, German-hosted GDPR stack, German-language phone support. 45 mm case, 1.09" IPS, IP67, nano-SIM needing ≥300 MB + minutes + SMS.
**⚠️ Anio's shipping policy states products are currently sold only to Germany and Austria. Romania is not served.** (The product page's country selector is misleading; the policy page is authoritative.) Would require a German forwarding address, and support is German-only.
https://anio.eu/products/anio6-kids-smartwatch · https://anio.eu/policies/shipping-policy

## 40. Anio 5 / Anio 3 Touch — ⚠️ **2G only**
Anio's own positioning: the 5 transmits location over 2G because it has no 4G interface. Still €168.50 (Anio 5) and €119.00 (Anio 3 Touch) at smartwatch.de, live 2026-08-18. Dead in Romania. https://smartwatch-kids.de/anio-5/

## 41. Garmin Bounce / Bounce 2 — ⚠️ **closed carrier service, Romania status unresolved**
Bounce 2: ~**€299** Europe / £259 UK, announced 2025-09-17. Original Bounce: **€179.99 at smartwatch.de**, live 2026-08-18. LTE with two-way calling, texting, real-time tracking, Amazon Music, geofencing.
**The blocker:** Bounce runs on **Garmin's own LTE service with a country whitelist and a mandatory subscription** ($9.99/£9.99 monthly or $99/£99 yearly). The original Bounce covered nine European countries; Bounce 2 is described as broader (Canada, UK, Netherlands named). **Whether Romania is on the list: UNKNOWN — Garmin's coverage page would not render to automated fetching and must be checked by hand.** Bands and mAh UNKNOWN.
https://www.garmin.com/en-US/connectivity/bounce/bounce2-lte-coverage/ · https://forums.garmin.com/sports-fitness/healthandwellness/f/bounce/407664/available-garmin-bounce-in-poland-and-lte-subscription
**Verdict: the highest-priority manual check on this list.** If RO isn't whitelisted, this is a €299 brick.

## 42. Vodafone Neo (Disney) — ⚠️ **discontinued**
Launched 2021 at £99 + £7/mo; reported discontinued as of 2023, with the official product videos' account closed. (Source predates 2024.)
https://www.techadvisor.com/article/722147/vodafone-neo-review.html

## 43. Spotter (Netherlands) — ⚠️ **Dutch prepaid ecosystem, and the brand looks defunct**
€99.95 one-off, prepaid-credit, no subscription; sold at Coolblue.nl, Bol.com, Amazon.de. The "Explorer 4G" SKU is 4G, but ⚠️ **an Amazon.de listing exists for a "Spotter GPS Watch Blue-2G"** — the range spans generations. Ships with a **secured prepaid SIM**; whether it works on a Romanian number or address is **UNKNOWN and doubtful**. Bands/mAh/app UNKNOWN (site 403s). **spotter.nl is now a parked domain on Nameshift** — a strong defunct signal.
https://www.coolblue.nl/product/864706/spotter-gps-watch-black.html · https://www.amazon.de/Spotter-GPS-Watch-Blue-2G-schwarz/dp/B09R5SRF1M

## 44. TCL MT40X / Alcatel MoveTime MT40 — ⚠️ **old stock, no 4G claim**
MT40X ASINs date to ~2019; the Alcatel-branded MT40 is pre-rebrand, still €99 on Geizhals. Neither claims 4G.
https://geizhals.de/alcatel-move-time-mt40-blau-a2346590.html

## 45. Xplora XGO2 / X5 Play / X4 / 3S / Go / Go 2 / Kidzi / Let's Go — ⚠️ **clearance / EOL**
XGO2 at €49.00–49.49 on Geizhals 2026-08-18 is clearance pricing; X5 Play eSIM shows no Geizhals offers but is €158.98 at smartwatch.de. Also live at smartwatch.de 2026-08-18: X4 €139.00, 3S €169.90, Go €113.08, Go 2 €109.00, "Xplora KIDS Smartwatch" €139.90. Still on shelves at **Coolblue.nl** (X5 Play 896122-4, XGO2 896125-8), Fnac.fr marketplace, and **Xplora Go3 at El Corte Inglés**. **Network type per model UNKNOWN.** Coolblue notes X5 Play / XGO2 ship without a SIM.

## 46. dokiPal / dokiWatch — ⚠️ **brand appears defunct**
$179, Snapdragon Wear 2100, 1.4" TFT, 48 h use / 72 h standby, **announced 2019** with no later coverage found. **doki.com does not resolve (DNS ENOTFOUND) as of 2026-08-18.** Still catalogued at Alza.cz but unmaintained. (2019-era sources.)
https://www.alza.cz/dokipal-4g-lte-s-videotelefonem?dq=5678565

## 47. US/UK-carrier-locked — TickTalk 5, T-Mobile SyncUP Kids, Verizon GizmoWatch, Angel Watch Series R
All tied to US or UK carrier services. Angel Watch ships a UK EE SIM and tells international buyers to "activate a SIM card with a local provider" — no EU distribution, no EU warranty, bands UNKNOWN.
https://angelwatchco.com/products/angel-watch-series-r · https://www.myticktalk.com/products/ticktalk-5

## 48. Huawei Watch Kids 4 Pro — ⚠️ **no EU retail channel found**
Huawei's global page claims 4G voice + HD video call, 9-system AI positioning, 5 ATM. But every buy-link routes to Malaysia, Philippines, or grey-market sellers; a UK price-comparison page showed **£0–£0, i.e. no live offers**. **EU price and availability UNKNOWN.** Also carries the Huawei/GMS question for the companion app.
https://consumer.huawei.com/en/wearables/k4-pro/specs/

## 49. Niceboy — **not a player**
niceboy.cz fetched live 2026-08-18: the catalogue has Watch Pixel 2, Watch GTX GPS, PIXEL 5 PRO, kids payment bands and baby monitors, but **no kids GPS/LTE smartwatch**.

## 50. Locon, Watchout, Bemi, Manta — **zero hits**
No results on eMAG.ro or morele.net searches, except a single unbranded "Bemi GPS 4G 1.4"" at 274.44 RON on eMAG.

---

# D. White-label — the bulk of the market

These dominate first-page results on Amazon DE/IT/FR/ES, Otto.de, Kaufland.de, MediaMarkt.de, Bol.com and eMAG.ro. They matter because they are what a parent actually *sees*, and because **a subset are fine hardware while another subset lacks B20 — and the listing gives you no way to tell which.**

## 51. Wonlex (Shenzhen) — the ODM behind much of the white-label market
- **KT30 published bands: FDD B1/B3/B5/B8, TDD B38/B39/B40/B41, WCDMA B1/B8, GSM B3/B8.** ⚠️ **No B20, no B7, no B28.** This is the exact Romanian failure mode, on the reference module for a great deal of rebadged product.
- **KT27:** 1.28" IPS 240×240, Android 8.1, **900 mAh**, 0.3 MP, IP67, **up to 48 h**, nano-SIM. Wonlex states KT25–KT27 share hardware and differ only in case design.
- **4G Wonlex on eMAG.ro (live 2026-08-18):** KT26 ~350 RON (last units), KT32 376.73–417.45 RON, KT34 370–390 RON, KT37 351–409 RON, KT38 399 RON, KT17 339.00, KT36 360.00, KT15 PRO 363.23, KT24S-P 707.10 RON. Bands/battery/app UNKNOWN for all. **119 Wonlex SKUs on eMAG, mixing 2G and 4G.**
- Sold on Bol.com and GPSHorlogeKids under reseller names, identifiable by "**Wonlex app**" in the listing.
- https://www.iwonlex.net/products/wonlex-4g-android-8-1-kids-videocall-gps-smartwatch-kt32-colorful-color-matching/ · https://www.dinesaw.com/products/wonlex-4g-gps-wifi-video-calling-kids-smart-watch-kt30
- **⚠️ Verdict: if a listing mentions the Wonlex or SeTracker2 app, assume no B20 until proven otherwise.**

## 52. eMAG.ro Romanian white-label (all claim 4G, all live 2026-08-18)
| Model | Price RON | Stock | Documented |
|---|---|---|---|
| **WIRSEN 1.91" Super AMOLED 4G** | 295.00 (PRP 397) | In stock | https://www.emag.ro/pd/DB9PS4YBM/ |
| **Wingereich 1.91" Super AMOLED 4G** | 399.98 (PRP 727.21) | In stock | dual camera variant 389.98 |
| **MiniWATCH eKiD21 Infinity 4G** | 258.99 (PRP 605) | In stock | eKiD10 variant claims 800 mAh |
| **Medeyatech 4G LTE SIM** | 445.81 (PRP 1,196.69) | Last 2 units | **63% "discount" off a fictional PRP** |
| **LAGENIO K10 4G** | 342.98 (PRP 411.58) | In stock | |
| **TehnoTek 4G GPS** | 375.88–450.27 | In stock | |
| **Techone KT42 / TrackMe KT34 Maxi / KT19T / KT18** | 379.09–419.87 | In stock | KT34 Maxi is 1.91" Super AMOLED |
| **NEOVANCE T49** | 399.90 | In stock | |
| **Evolve-x EvoWatch KIDS** | 366.04 | In stock | |
| **ELYTHEN D35 (GI030)** | 409.00 | **Out of stock** | 900 mAh, **130 h**, SeTracker2, 1.65" IPS, "4G inclusiv pe DIGI" |
| **NOVOTIM D35Black** | UNKNOWN | **Out of stock** | 900 mAh, 2–4 days real, SeTracker2, 1.69" IPS |
| **Qyntech GE-31** | 327.91 (from 590.19) | **Out of stock** | 1000 mAh, 72 h use / 8–9 d standby, SeTracker2, 2" |
| **WIRSEN W-040 / W-077** | UNKNOWN | **Out of stock** | W-077: 800 mAh, 1.7" IPS, SeTracker2, 1 ATM |

**Pattern: every white-label unit on eMAG runs SeTracker2** — an old, widely-criticised Chinese tracking app requiring manual "Europa" region selection. **None publish LTE bands.** Many carry inflated PRP anchors and several are already out of stock.

## 53. German retail white-label
**MediaMarkt.de** (all prices 403): BYTELIKE 4G, RALIO D39, SYTIFRO D35, Blackview Z30. Category: https://www.mediamarkt.de/de/category/smartwatches-für-kinder-2063.html
**Otto.de / Kaufland.de:** blackview Z10 (1.83", 8 GB, 4G-LTE, IP67) · IOWODO Z30-4G · Vashoy T86 (2 GB + 16 GB, AMOLED 368×448) · Ralio / Yuede (1.69"/1.43", dual camera, IP68) · Ele Eleoption T29 4G.
**Bands, mAh, app names UNKNOWN for all.**

## 54. Amazon-native semi-brands
**LAGENIO K9** (DE/IT/FR) 1.78" AMOLED, IP68, ages 6+ · **PTHTECHUS** (IT/ES) IP68 or IPX7 by SKU · **MiracDan** (FR) **500 mAh stated in the listing title**, one of the very few white-labels publishing capacity · **Kesasohe** (IT) IP68, filed under "Moda" not "Elettronica", a category-gaming tell · plus **Fitnynxos**, **TKMARS**, **TotsyFun**, **POKUJNFY**, **LiveGo T13**.

## 55. Iberia/Italy retailer white-label
**Klack RELOJNINOS4G** (MediaMarkt.es) 4G nano-SIM, video calls, geofence · ⚠️ **Klack RELJNINOSY36** — "Y36" is a classic 2G Wonlex-family SKU, **2G-suspect** · **DAM Electronics LT21** (MediaMarkt.es) 4G + Wi-Fi, 3-way calling · ⚠️ **Watchmark GPS Watch Kids** (MediaWorld.it) generation UNKNOWN · ⚠️ **Klack GPS/SOS SKU** (MediaWorld.it) no 4G stated, **2G-suspect**.

## 56. Benelux reseller brands on Bol.com
**JuniorCompass** (SIM incl., ages 8+) · **Protectly** (SIM incl., WhatsApp + SMS) · **Techgenics** · **WyWiS** (IP65, geofencing) · **Xelar** · generic "GPS 4G Smartwatch voor Kinderen" running the **Wonlex app**. All marketed as 4G; bands/mAh UNKNOWN. **Bol's own category copy states these watches "automatically fall back to 3G or 2G where there is no 4G coverage" — a reassurance that is meaningless, and actively misleading, in Romania.**

---

# Notes and patterns

## 1. The band-disclosure blackout is the defining problem of this market
Out of 60+ models, **only five publish LTE bands anywhere** — and never on a retail listing, only on a manufacturer spec page:

| Device | Bands | Romania verdict |
|---|---|---|
| **Canyon Zefir KW-49** | FDD B1/2/3/5/7/8/20/28A + TDD B38-41 | ✅ complete |
| **CARNEO GuardKid+ ULTRA & Platinum** (1st gen) | FDD B1/2/3/5/7/8/20/28A | ✅ complete |
| **imoo Z3** | FDD B1/3/5/7/8/20/28 + TDD | ✅ complete |
| **Xplora XGO3** (EU SKU) | B1/3/7/8/20 | ✅ complete bar B28 |
| **imoo Z7** | B1/3/8/20 | ✅ the essentials |
| **imoo X10** | long list incl. B20/B3/B1/B28 | ⚠️ no B7 |
| **imoo Z1** | B1/3/5/28 | ❌ **no B20** |
| **Wonlex KT30** (ODM reference) | B1/3/5/8 | ❌ **no B20, no B7, no B28** |

TCL, SaveFamily, SoyMomo, Elari, Anio, Garett, LAMAX, Forever, Celly, Vidimensio and the entire white-label mass publish nothing. **The market gives a buyer almost no way to choose informedly on the criterion that matters most**, and the fallback is chasing CE/RED declarations of conformity or emailing vendor support.

## 2. Vendor-run connectivity is the hidden geo-lock — worse than shipping
Garmin Bounce runs its own subscription LTE with a country whitelist. Xplora sells "Connect" SIMs on 12–24-month minimums and lists ten European markets, **Romania not among them**; its X6 Pro at Otto is Telekom-or-Freenet-locked. Spotter is a Dutch prepaid-credit ecosystem. Garett Kids eSIM 4G has **no physical SIM slot**. imoo publishes a carrier list covering UK/DE/ES/PL only. **Devices taking a plain nano-SIM from a Romanian carrier — Canyon, CARNEO (its eMAG listing literally says "orice operator"), TCL MT48, Elari, SaveFamily, Garett non-eSIM, LAMAX — are structurally safer.**

## 3. Romania is well served, but through a different channel than Western Europe
eMAG.ro is the practical route and it has real depth in *named* brands, not just white-label: **Canyon Zefir KW-49 at 650.53 RON and Sunny KW-48 at 529.99 RON**, **CARNEO across three tiers (498–865 RON)**, **TCL MT48 at 897.99 RON sold by eMAG itself**, **six Garett 4G SKUs at 311–517 RON via an official vendor account**, **LAMAX WatchY4 Play at 1,294 RON**, plus Xplora, imoo and Wonlex.

But international brands arriving via **third-party marketplace sellers carry heavy markups**: Xplora XGO3 at ~986 RON (~€194) against €99 in Germany; imoo Z3 at 967–2,216 RON for the same watch in different colours; imoo X10 from 1,610 to 3,580 RON; Garett at 40–55% above Polish retail. Buying from Germany or Poland, or from a brand shop that ships to RO, is often far cheaper and comes with a proper warranty.

## 4. Confirmed delivery paths to Romania
| Vendor | Ships to RO? | Evidence |
|---|---|---|
| **eMAG.ro** | Yes (domestic) | direct — carries Canyon, CARNEO, TCL, Garett, LAMAX, imoo, Xplora, MyKi, Wonlex |
| **imoo EU store** | **Yes**, explicitly listed | https://eu.imoostore.com/blogs/order-shipping/where-do-you-deliver |
| **SaveFamily** | **Yes**, €10 std / free over €76 | https://savefamilygps.com/en/policies/shipping-policy |
| **TradeInn / Kidinn** | **Yes**, prices render in RON | https://www.tradeinn.com/kidinn/en/elari-kidphone-4gr-smartwatch/139880660/p |
| **Anio** | **No** — DE + AT only | https://anio.eu/policies/shipping-policy |
| **SoyMomo (own shop)** | **No** — Spain mainland + Balearics only | https://soymomo.es/policies/shipping-policy |
| **Alza** | **No Romanian storefront** (CZ/SK/HU/AT/DE only). Cross-border delivery to RO **UNKNOWN** — shipping FAQ pages 403'd; a third-party aggregator lists destinations as AT/CZ/FR/DE/HU/SK/UK only. **Verify by test checkout before relying on it.** | https://en.wikipedia.org/wiki/Alza.cz · https://www.whatshipswhere.com/s-alza |
| Amazon.de/.es/.it/.fr, Bol, Coolblue, MediaMarkt, Fnac, El Corte Inglés, MediaWorld, morele.net, x-kom | **UNKNOWN — not verified** | — |

The Alza question is largely neutralised by CARNEO being stocked directly on eMAG.ro.

## 5. Dead-radio stock is still being sold, prominently, in Romania in 2026
This is the most actionable warning in the document. **On eMAG.ro right now:** Kruger&Matz Smartkid (2G, 181.25 RON, and **the listing itself admits it does not work on Digi**, with an orphaned app), Wonlex KT24S (2G, 300–369 RON, in stock), SaveFamily Junior 2G (142.49 RON), and probably the older Canyon KW-37/41/43/44 series. **Elsewhere in the EU:** CARNEO GuardKid+ MINI (2G/3G, €109, from a brand whose other models are excellent), Elari KidPhone 2 and 3G on Amazon.fr, all Pingonaut models, Anio 5 and 3 Touch at smartwatch.de, SoyMomo Space H2O and Space 1.0, TCL MT40X / Alcatel MT40, Spotter's 2G variant, Klack RELJNINOSY36 and the non-4G Celly KIDSWATCH.

Listings rarely flag "2G" prominently, and Dutch listings actively advertise 2G/3G *fallback* as a selling point. In Romania that fallback is fiction.

## 6. Brands that have vanished or are vanishing
- **doki / dokiPal** — **doki.com does not resolve (DNS ENOTFOUND)**. Defunct.
- **Spotter (NL)** — spotter.nl is a parked domain on Nameshift. Stock persists at Coolblue and Bol.
- **Pingonaut** — manufacturer insolvent per Geizhals; line frozen at 2G.
- **MyKi** — **myki.watch TLS certificate expired**; four of five eMAG SKUs refurbished, one new unit last-in-stock. Exiting Romania.
- **Vodafone Neo** — discontinued since ~2023.
- **Xplora XGO2 / X5 Play / Go3 / X4 / 3S / Go / Go 2** — clearance and legacy SKUs still on Coolblue, El Corte Inglés and smartwatch.de shelves.
- **Fitbit Ace LTE** — never arrived in Europe; per Fitbit staff Dec 2024, no ETA.
- **Huawei Watch Kids 4 Pro** — exists globally, no functioning EU retail channel.
- **Niceboy** — never entered the kids GPS category at all.
- Other unreachable domains: kidiwatch.com and mykiwatch.com (NXDOMAIN), nubki.com (expired TLS), elari.store (DNS timeout). **LeoTec, Kidiwatch, Wearizon, Cellys, Nubki, Blackview, IOWODO: UNKNOWN, not confirmed absent — the search budget ran out.**

## 7. Battery is the second information blackout, and the disclosed numbers are not reassuring
**1000 mAh:** CARNEO ULTRA / Platinum (4 days claimed), SoyMomo Space 3.0 / 2.0 (48 h), Qyntech GE-31, SaveFamily Iconic Plus gen 1.
**900 mAh:** Canyon Zefir KW-49 (3 days), TCL MT48 (2.5 days), Garett Twin 2 (3 days), Xplora XGO3 (72 h), Wonlex KT27 (48 h), ELYTHEN D35 (130 h claimed).
**Mid:** Xplora X6 Play 880 mAh, SaveFamily Iconic Plus 2 850 mAh, MyKi 800 mAh, Xplora X6 Pro 760 mAh (~3 days), **imoo 740 mAh across Z1/Z3/Z7/X10**.
**Low, and a concern:** SoyMomo Lite and LAMAX WatchY4 680 mAh, TCL MT46 680 mAh, SaveFamily Enjoy 650 mAh, Elari Lite 600 mAh, Anio 6 595 mAh (24–48 h, honestly stated), Elari 4GR 580 mAh, **SaveFamily Slim 550 mAh**, MiracDan 500 mAh, MyKi Watch 4 Lite 450 mAh, CARNEO MINI 450 mAh, Kruger&Matz 400 mAh.

Two things stand out. **SaveFamily regressed**: Iconic Plus 1000 mAh → Iconic Plus 2 850 mAh. And **imoo standardises on 740 mAh across its whole range**, which for the AMOLED Snapdragon-4100 X10 is a genuine question mark — imoo declines to publish a runtime for it, which is itself informative. Against a full-school-day requirement, **anything under roughly 700 mAh with active GPS polling should be treated as suspect.**

## 8. Pricing structure and its distortions
Named-brand 4G clusters at **€89–€160**, with a premium tier at **€199–€299** (Anio 6, Xplora X6 Play/Pro, imoo X10, Garmin Bounce 2). White-label sits at **€50–€110**.

Four distortions worth knowing:
- **Brand shops are sometimes dearer than retailers** — CARNEO Platinum €155 direct vs ~€100 at Alza; Xplora XGO3 €159 direct vs €99 at German retail.
- **End-of-life pricing inverts** — CARNEO prices the 2023 Platinum (€155) *above* the newer ULTRA (€129).
- **Subsidised prices are contract-locked** — Xplora XGO3 "€49" is 24 months at €6.99/mo; X6Play "£109.99" carries £7.99/mo for 12 months minimum.
- **PRP anchors on eMAG white-label are fictional** — Medeyatech shows a "63% discount" off a PRP of 1,196.69 RON that no one ever paid.
Heavy discounting signals transitions: Xplora UK cut X6Play by £69 and XGO3 by £40; SoyMomo cut its whole range 41–46%.

## 9. Open questions this lens could not close
1. **Garmin Bounce 2 LTE country list — is Romania on it?** The coverage page will not render to automated fetching. Highest-value manual check on this list.
2. **TCL MT48 LTE bands.** The best-hardware candidate's most important unknown. Chase the CE/RED declaration of conformity.
3. **CARNEO GuardKid+ 4G ULTRA *2nd Generation* bands.** The 1st gen's list is excellent; the 2nd gen's is unpublished and should not be assumed identical.
4. **Canyon Sunny KW-48 bands.** Canyon published them for the KW-49 but not the KW-48, so the data clearly exists internally.
5. **Garett's band sheets and companion app name.** The widest range actually stocked in Romania, and completely undocumented — the biggest single gap in the dataset.
6. **Does the Xplora Guardian app accept a +40 registration?** Xplora's own market list omits Romania.
7. **Do imoo watches carry Romanian carrier certification?** Delivery to RO is confirmed; the published carrier list stops at UK/DE/ES/PL.
8. **VoLTE support** for SaveFamily, Elari, Garett, LAMAX and the white-labels. With no 3G in Romania, a non-VoLTE device can track but cannot call.
9. **Does Alza cross-border deliver to Romania?** Needs a test checkout.
10. **Unswept brands** (budget exhausted): LeoTec, Kidiwatch, Blackview, IOWODO, Wearizon, Cellys, Nubki, and the Worten / Unieuro / ePrice / Darty / Boulanger / Galaxus / PcComponentes / MediaMarkt NL-IT retail channels.
