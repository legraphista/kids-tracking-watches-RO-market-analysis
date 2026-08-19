# SaveFamily Iconic Plus 2 (with Iconic Plus gen 1 as variant)

```yaml
---
model:                  SaveFamily Iconic Plus 2   # variant covered: SaveFamily Iconic Plus (gen 1)
brand:                  SaveFamily / Grupo SaveFamily S.L. (Abanto-Zierbena, Bizkaia, Spain)
release_year:           UNKNOWN                    # vendor publishes no release date; marketed as "Best Smartwatch 2024" — **unverified**
still_sold:             yes                        # both generations listed and orderable on savefamilygps.com, checked 2026-08-19

# --- Romania verdict (the pass/fail question) ---
ro_status:              unknown                    # leaning negative; see "Does it work in Romania?"
ro_evidence_tier:       1                          # tier 1 reached on SHIPPING ONLY — vendor's own shipping policy
                                                   # names "Rumanía (EUR €)". Tier 2 also reached (app in RO
                                                   # storefronts). Tier 3 evidence exists and is NEGATIVE.
                                                   # "app accepts +40" — the other half of tier 1 — is UNTESTED.
ro_killer:              n/a

# --- Radio (Romania has no 3G; B20 drives indoor/rural coverage) ---
lte_bands:              [B3, B7, B20]              # **unverified for this model.** Vendor support article states
                                                   # SaveFamily devices "generalmente" use B3/B7/B20 — a brand-wide,
                                                   # hedged statement in a SIM-troubleshooting page, not a model
                                                   # spec sheet. No CE/RED declaration found. No band list on the
                                                   # product page, the manual, or the technical-characteristics article.
band_b20:               UNKNOWN                    # brand-level claim only; not confirmed for the Iconic Plus 2 SKU
band_b28:               UNKNOWN
volte:                  UNKNOWN                    # word "VoLTE" appears nowhere in any SaveFamily source found
voice_fallback:         UNKNOWN                    # vendor network string is "4G/3G/H+" — see "Network & bands"
modem_chipset:          UNKNOWN                    # Iconic Plus 2 page says only "Dual Core at 1.2MHz" [sic].
                                                   # gen 1 = UNISOC SC8521E (vendor page)

# --- Positioning (the #1 criterion) ---
positioning:            [GPS, WiFi, LBS]           # vendor: "Geolocalización a través de 3 sistemas de
                                                   # posicionamiento diferentes: GPS, Wi-Fi y LBS"
wifi_positioning:       true
update_interval_min:    UNKNOWN                    # vendor documents no interval; support article on live tracking
                                                   # states only that route history covers "las últimas 24 horas"

# --- Battery (claimed and observed are SEPARATE facts) ---
battery_mah:            850                        # Iconic Plus gen 1: 1000 mAh — a REGRESSION in the newer model
battery_claimed_h:      24                         # vendor support, Iconic+2: "Aprox. 24 horas" moderate use;
                                                   # "8-12 horas" with GPS active; "Hasta 36 horas" savings mode.
                                                   # gen 1: 24 h / "9-14 horas" GPS active / "Hasta 40 horas" saving.
battery_observed_h:     UNKNOWN                    # no dated owner measurement found for the Iconic Plus 2
                                                   # specifically. Brand/gen-1 level, ES: "no le aguanta un día
                                                   # entero" (Beatriz, 05/06/2023) and "no aguanta dos días".
                                                   # Do NOT read these as Iconic Plus 2 figures.

# --- App & service ---
app_name:               SaveFamily
app_android_min:        5.0
app_ro_playstore:       true                       # 100K+ installs, present in RO Play storefront (prior sweep);
                                                   # corroborated by the existence of dated Romanian-language reviews.
                                                   # iOS: com.savefamily.watch live in the RO App Store, priced in RON.
app_last_update:        2026-07                    # Android v1.3.9 rel. 2026-07-21; iOS v1.3.9 rel. 2026-07-10
data_region:            China                      # **unverified for SaveFamily specifically.** Platform-level
                                                   # finding (DEF CON 34, Aug 2026): "The data sits on Alibaba
                                                   # Cloud in China." SaveFamily is named on the researchers'
                                                   # "39 brands, one server" slide. SaveFamily's own privacy
                                                   # policy discloses NO storage location at all.

# --- Practical ---
sim:                    nanoSIM
water_rating:           IP67
weight_g:               UNKNOWN                    # not published for Iconic Plus 2. gen 1: 55 g (vendor support)
camera:                 true                       # 0.3 MP — on a €129 device
games:                  true                       # plus full Google Play Store access on Android 8.1
extras_disableable:     partial                    # "Supervisión de aplicaciones" (App Monitor) can enable/disable
                                                   # watch apps; "Modo inactivo en clase" / "No Molestar" reduces the
                                                   # watch to a clock on a schedule with SOS+GPS still live.
                                                   # Whether the CAMERA specifically can be killed: UNKNOWN.
price_eur:              129                        # savefamilygps.com, from €149. gen 1: €105, from €115
buy_from:               savefamilygps.com (Spain, ships to Romania via UPS); also Amazon.es, TradeInn/Kidinn
price_ro_eur:           n/a                        # no Romanian retailer, distributor or warranty entity exists
---
```

## Verdict

A Spanish brand that will genuinely post a box to Romania, running on a Chinese
white-label backend that a DEF CON 34 team took apart in August 2026, behind a
companion app rated **1.7/5 on Google Play**. It clears the shipping floor and
nothing else: bands are a hedged support-page aside, VoLTE is undocumented, and the
newer generation has *less* battery than the one it replaced.
**Do not buy this to solve a Romania problem — the shipping is the only part that is proven.**

## Does it work in Romania?

**Tier 1 is reached, but only on shipping.** SaveFamily's own shipping policy country
list contains **"Rumanía (EUR €)"** verbatim, with the Rest-of-Europe rate card:
UPS Standard 2–4 days, **free over €76, €10.00 under €76**; UPS Express 1–2 days,
€7.50 over €76 / €12.50 under.
([shipping policy](https://savefamilygps.com/policies/shipping-policy), accessed 2026-08-19.)
That is a real commercial statement of intent and it is rarer in this category than
it should be. Note the correction: the *policy text* does not name Romania in prose —
Romania appears in the storefront's country/currency list rendered on that page, and
falls into the "Rest of Europe" zone. The prices in the brief are correct.

**Tier 2 is reached.** `com.tgelec.savefamily` is live in the Romanian Play storefront
with 100K+ installs; the iOS app `com.savefamily.watch` (seller: **Grupo SaveFamily SL**)
is live in the Romanian App Store, priced in **RON**, version 1.3.9 released
**2026-07-10**, and — worth noting — its declared language list **includes `RO`**
(Romanian UI strings ship in the binary).
([iTunes lookup, country=ro](https://itunes.apple.com/lookup?bundleId=com.savefamily.watch&country=ro), accessed 2026-08-19.)

**Tier 3 exists and is entirely negative.** Every Romanian first-hand report found in
this project is a connection failure:

- **2024-04-09, 1★ (RO):** *"Nu te poți conecta cu ceasul copilului"*
  — "You cannot connect to the child's watch."
- **2022-09-23, 1★ (RO):** *"Functioneaza defectuos pe relatia telefon parinte - ceas copil. Aplicatia in telefonul parintelui porneste cu dificultate. Nu recomand nici ceasul nici aplicatia."*
  — "It works badly on the parent-phone-to-child-watch relationship. The app on the parent's phone starts with difficulty. I do not recommend either the watch or the app."
- **2024-10-17, 1★ (English, RO storefront):** video calling not working.

(Google Play, `com.tgelec.savefamily`, RO storefront; captured in the prior discovery
sweep `.discovery/lens-5-romania.md`. The Play Store page would not render to
automated fetching in this pass, so these three reviews are **carried forward, not
re-verified today**.)

**Tier 4 is zero.** No Romanian retailer, no distributor, no warranty entity, no
carrier relationship. Nothing on eMAG for this model (only the unrelated *SaveFamily
Junior 2G* at 142.49 RON, which is dead radio in Romania anyway).

### The thing that reframes those Romanian reviews

The SaveFamily Android app is rated **1.7 stars from 1,832 ratings** — worse than the
Garett Tracker sibling app at 2.6/5, and among the worst in this entire survey.
([apkcombo listing mirror of Play data](https://apkcombo.com/savefamily/com.tgelec.savefamily/), accessed 2026-08-19.)

That matters because it changes what the Romanian evidence means. Two 1★ Romanian
"cannot connect" reviews against a **1.7/5 global average** are not evidence of a
Romania-specific geo-block. They are consistent with an app that fails for everyone,
everywhere. Xplora's Romanian failure was distinctive because Xplora's app is
otherwise fine and its FAQ names 10 countries excluding Romania. SaveFamily has no
country list, and its app is broken globally. **The Romanian reports are therefore
weak evidence of a Romanian problem and strong evidence of a product problem.**

### What the account layer actually requires

The vendor's own registration documentation describes **no country gate and no phone
verification of the parent**:

- *"Crea una cuenta de usuario. Desde la opción de registro, indica una cuenta y contraseña"* — "Create a user account. From the registration option, enter an account and password."
- *"Escanea el código QR que encontrarás detrás de la esfera del reloj, configura el apodo del reloj, rol, e introduce el número de teléfono del reloj."* — "Scan the QR code behind the watch face, set the watch nickname, role, and enter the watch's phone number."
  ([Guía de Usuario Rápida](https://soporte.savefamilygps.com/hc/es/articles/14950105105303-Gu%C3%ADa-de-Usuario-R%C3%A1pida), accessed 2026-08-19)

The troubleshooting article *"No puedo registrar el reloj en la app"* lists exactly two
causes — a mistyped **REGCODE**, and the existing admin not authorising a second
binding — and mentions **no country, phone-format, network or server condition**.
([support article 38659133370263](https://soporte.savefamilygps.com/hc/es/articles/38659133370263), accessed 2026-08-19.)

So on documentation alone, the parent account appears to be **account+password based,
not +40-based**, and the only place a Romanian number would land is the *watch's* phone
number field. **This is a documentation reading, not a test. Whether the app accepts a
+40 number in that field remains completely unverified** — and vendor documentation
is exactly what failed to predict the Xplora outcome.

### The strongest structural argument against Romania

SaveFamily's operational footprint is Spain, not Europe. Its APN configuration guide
lists **seventeen carriers — all Spanish**: *"Movistar, Vodafone, Orange, Yoigo,
MásMóvil, Pepephone, Lowi, Simyo, Jazztel, Euskaltel, Telecable, R, Lebara, Llamaya,
Digimobil, Hits, Suop"*. No Romanian operator, and no non-Spanish operator of any
kind.
([APN guide](https://soporte.savefamilygps.com/hc/es/articles/15012731911959-Configurar-datos-m%C3%B3viles-APN-en-tu-reloj-SaveFamily), accessed 2026-08-19.)
Its own-brand SIM is a Spanish multi-network product (Movistar/Yoigo/Orange ES) that
"incluye roaming en la UE (Zona 1)" — i.e. a Romanian child would be permanently
roaming on a Spanish SIM, which is not a supportable arrangement.
([SIM roaming article](https://soporte.savefamilygps.com/hc/es/articles/39383423319191), accessed 2026-08-19.)
Support languages are ES/PT/EN/FR/DE/IT — no Romanian human support, notwithstanding
the `RO` string bundle in the iOS binary.

**Net:** shipping is proven, storefront presence is proven, the account flow is
undocumented-but-not-obviously-gated, every Romanian user report is a failure, and
there is no Romanian channel of any kind. `unknown`, and the burden of proof sits
with the vendor.

## Pre-purchase test

1. Install **SaveFamily** (`com.tgelec.savefamily`) from the **Romanian** Play storefront.
   Free, no hardware required.
2. Create an account with a Romanian email. Per the vendor's own guide this needs only
   an account and a 6–12 character alphanumeric password (no symbols accepted). **If
   the signup itself fails, stop here — that is the whole answer.**
3. If signup succeeds you still cannot complete the test without a REGCODE from a
   physical watch, because binding requires the QR on the watch back. So the test is
   only half-runnable pre-purchase — a structural weakness of this vendor versus one
   with a published country list.
4. **Return window:** this is the real problem. SaveFamily's refund policy imposes a
   **72-hour claim window** — *"El cliente deberá presentar una reclamación en un plazo
   máximo de 72 horas desde la recepción del producto"* — and states no 14-day
   withdrawal right and no warranty period on that page.
   ([refund policy](https://savefamilygps.com/policies/refund-policy), accessed 2026-08-19.)
   EU distance-selling law gives you 14 days regardless of what the page says, but you
   would be enforcing it against a Spanish company with a documented record of
   contesting claims (see "What users say"), from Romania, with no local entity.
   **An `unknown` bought here is not cheaply recoverable.**

## Positioning quality in real use

Hardware stack is GPS + **Wi-Fi** + LBS. Wi-Fi positioning is present, which is the
right answer for indoor school accuracy and better than several pricier candidates.
Constellation support (GLONASS/Galileo/BeiDou) is **UNKNOWN** — the vendor never says.

Observed behaviour, Spain, gen-1/brand level:

- **Beatriz, ES, 05/06/2023:** *"La localización es malísima, según el momento la clava o te lo ubica a varios km de la localización... No lo recomiendo para nada."*
  — "The location is terrible: depending on the moment it nails it, or it places you several km from the actual location... I don't recommend it at all."
- **Neron, ES, 27/06/2024:** *"Lo peor, muy malo. El GPS no es nada nada preciso... Tiene 5 meses y para tirar."*
  — "The worst, very bad. The GPS is not accurate at all... It's 5 months old and fit for the bin."

([sportkids.es comment thread](https://sportkids.es/save-family-reloj-infantil-con-gps-opiniones/), accessed 2026-08-19 — affiliate page, but the comments are dated first-hand owner reports.)

"Sometimes it nails it, sometimes it's kilometres out" is the signature of a device
falling back to cell-tower/Wi-Fi-database positioning and presenting the result as a
GPS fix — the defining failure mode of this whole product category, and documented
across at least five brands in this project. **Two independent Spanish reports, one
year apart.** No Romanian positioning report exists for this model at all.

## Battery in real use

This is the clearest single fact in the document, and it is a regression.

| | **Iconic Plus (gen 1)** | **Iconic Plus 2** |
|---|---|---|
| Capacity | **1000 mAh** | **850 mAh** (−15%) |
| Screen | 1.4" IPS | **1.78" Full HD** (much larger, much denser) |
| Vendor: moderate use | *"Aprox. 24 horas"* | *"Aprox. 24 horas"* |
| Vendor: **GPS active** | *"9-14 horas"* | ***"8-12 horas"*** |
| Vendor: savings mode | *"Hasta 40 horas"* | *"Hasta 36 horas"* |
| Price | €105 | €129 |

([vendor support: ¿Cuánto dura la batería de un reloj SaveFamily?](https://soporte.savefamilygps.com/hc/es/articles/38822431500439--Cu%C3%A1nto-dura-la-bater%C3%ADa-de-un-reloj-SaveFamily), accessed 2026-08-19.)

Credit where due: SaveFamily is one of the few vendors in this survey that publishes a
**GPS-active** figure at all, rather than a standby fantasy. And that published figure
is the one that matters — **8–12 hours with GPS active on the Iconic Plus 2**.

A Romanian school day plus commute is roughly 07:30 to 17:00 — about 9.5 hours. The
vendor's own number for the tracking mode you would actually use **straddles the
requirement**. The gen 1 gives you 9–14 h for the same job: it does not clear the bar
either, but it clears more of it.

`battery_observed_h` is **UNKNOWN for the Iconic Plus 2.** No dated owner measurement
for this specific model was found. Brand-level Spanish reports, kept separate on purpose:

- **Beatriz, ES, 05/06/2023**, after six months: *"la batería tampoco dura mucho, no le aguanta un día entero"* — "the battery doesn't last long either, it doesn't survive a whole day."
- Brand-level, ES: *"La batería es muy baja y no aguanta dos días"* — "The battery is very low and doesn't last two days."

**Which generation is the better buy?** On battery, the gen 1: more capacity, a
smaller and dimmer screen to drive, a longer vendor-stated GPS-active figure, and €24
cheaper. The Iconic Plus 2 buys you a bigger Full HD panel, more RAM/storage, NFC,
face unlock, an AI assistant and Spotify — none of which are on the requirement list
for a 7-year-old, and all of which are being paid for out of the battery. **If you buy
a SaveFamily at all, buy the gen 1.** That is an unusual conclusion and it is the
vendor's own numbers that force it.

## Network & bands

The vendor's product page says, verbatim: **"Available networks: 4G/3G/H+"**
([Iconic Plus 2 product page](https://savefamilygps.com/en/products/iconic-plus-2), accessed 2026-08-19).

"H+" is HSPA+ — a **3G** technology. A 2026 spec sheet that advertises 3G and HSPA+ as
selling points is describing a radio designed around a fallback that **does not exist
in Romania**: Orange completed 3G shutdown at end-2025, and Digi retains only a
reserved slice in the Bucharest metro. If this device's *voice* path is CSFB to 3G,
voice is dead in Romania on day one. If it is CSFB to 2G, voice survives on Orange and
Digi for an unknown number of years and dies on Vodafone. If it is VoLTE, it is fine.
**The vendor never says which, and the word "VoLTE" does not appear in a single
SaveFamily source located in this research** — not the product page, not the manual,
not the technical-characteristics article, not the "can I make calls with any
SaveFamily watch?" support article, which answers only *"Sí, absolutamente. Todos los
modelos de reloj inteligente SaveFamily están diseñados para funcionar como un
teléfono independiente"* and specifies no network requirement whatsoever.
([support](https://soporte.savefamilygps.com/hc/es/articles/360061194893--Puedo-hacer-llamadas-con-cualquier-reloj-SaveFamily), accessed 2026-08-19.)

### On the bands

One band claim was found, and it is worth having but must not be over-read. In a
**SIM-troubleshooting article**, SaveFamily writes:

> *"los dispositivos SaveFamily operan generalmente en bandas B3, B7, B20"*
> — "SaveFamily devices generally operate on bands B3, B7, B20."

([El reloj no reconoce la tarjeta SIM - Soluciones](https://soporte.savefamilygps.com/hc/es/articles/38264513485591-El-reloj-no-reconoce-la-tarjeta-SIM-Soluciones), accessed 2026-08-19.)

Read carefully, that sentence is:
- **brand-wide, not model-specific** — it covers a catalogue spanning Android 8.1
  quad-cores and 550 mAh CAT-1 devices, which cannot all share one radio;
- **hedged with "generalmente"** — the vendor is describing a tendency, not declaring a spec;
- **published in a support FAQ, not a spec sheet or a CE/RED declaration.**

Treat it as **unverified for the Iconic Plus 2**. No EU declaration of conformity for
this SKU could be located; the ManualsLib copy of the Iconic Plus manual carries no
band table, no VoLTE statement and no radio annex, only *"Distributed by Grupo
Savefamily S.L. — Made in China, Designed in Europe."*

That said, **if** it were true, B3/B7/B20 is a genuinely good fit for Romania: B3 is
the national workhorse on all three operators, **B20 is Orange's only sub-1 GHz LTE
band** and the one that decides whether the watch works inside a concrete school, and
B7 is capacity. The band list, if real, is not the problem. The **voice path** is the
problem, and it is entirely undocumented.

**Bottom line:** buy this only on Orange or Digi, which still run 2G, so that a VoLTE
provisioning failure degrades to 2G voice rather than to silence. Do not buy it on
Vodafone. And test an outgoing *and* an incoming call in week one.

## Features & what can be disabled

Vendor's own feature list for the Iconic Plus 2
([support: Funciones](https://soporte.savefamilygps.com/hc/es/articles/32734648916887-Funciones), accessed 2026-08-19):

| Feature | Vendor wording | Can the parent switch it off? |
|---|---|---|
| Contact whitelist | *"Directorio antispam: Permite realizar y recibir llamadas solo desde los números registrados"* | Yes — this is the mechanism itself |
| SOS | *"Un solo botón para lanzar una llamada hacia los números que elija"* | Stays live even in class mode |
| Private chat (audio + text) | *"Chat de audio y texto exclusivo en tiempo real entre el reloj y la aplicación"* | UNKNOWN |
| Class mode | *"Modo inactivo en clase: Posibilidad de configurar horarios para bloquear las funciones y mostrar solo la hora"* | Yes, on a schedule. Support adds: *"el reloj solo muestra la hora y las funciones de emergencia (SOS y GPS) siguen activas"* |
| **Anti-harassment module** | *"Si tiene sospechas, descubra lo que sucede alrededor de su hijo"* | **UNKNOWN — see Security & privacy** |
| Geofence | *"Perímetro de seguridad... para recibir una notificación cuando salga"* | n/a |
| Camera (0.3 MP) | not listed as a feature on the support page; **"0.3 MP camera"** on the product page | **UNKNOWN** |
| Games / apps | *"Downloads from the PlayStore: Access useful apps and customize your watch experience"* | Partially — see below |
| Spotify, AI assistant, video calls, walkie-talkie, MP3 player, video/audio recorder, face unlock, pedometer, heart-rate & blood-pressure "vitals" | vendor list | mostly UNKNOWN individually |

The one real control is **"Supervisión de aplicaciones" (App Monitor)**:
*"te permite activar o desactivar aplicaciones del reloj durante periodos de tiempo
concretos o de forma indefinida"* — "lets you enable or disable watch apps for specific
time periods or indefinitely."
([support](https://soporte.savefamilygps.com/hc/es/articles/38657720806551), accessed 2026-08-19.)
The article does **not** enumerate which apps, and specifically does not say whether the
camera or the Play Store client itself are among them.

**The Play Store point deserves emphasis.** This is an **Android 8.1** watch with
**"Acceso a Play Store"** as an advertised feature. That is not a locked-down kids
device with a fixed game list; it is a general-purpose Android device on a child's
wrist with an app store on it, governed by a parental toggle the vendor declines to
describe. `extras_disableable: partial` is generous.

## Security & privacy

This section carries the heaviest finding in the document.

### The platform, and who actually runs it

The app's package name is **`com.tgelec.savefamily`**. That prefix is not SaveFamily's.
At **DEF CON 34 on 8 August 2026**, researchers **Felipe Solferini and Vangelis Stykas**
presented an analysis of the Shenzhen kids-tracker supply chain. Per Notebookcheck's
write-up (14 Aug 2026):

> *"One slide is headed '39 brands, one server' and names them: Wonlex, **SaveFamily**, KidiWatch, Garett Kids, Carneo Guard, Osmile, Kuus, Beafon and more."*

> *"Every Android app carries a technical package name that shows up in the Play Store address bar. For the Garett watch it reads `com.tgelec.garetts`, for KidiWatch `com.tgelec.kidiwatch`... Three brands, three price points, the same package name stem. To find out which server a watch reports to, look it up in the Play Store."*

> *"Moving from Wonlex to SaveFamily, the researchers write, is a **sticker change**."*

> *"Behind SETracker, according to the slides, stands a company called YQT, also trading as 3G Electronics."*

([Notebookcheck](https://www.notebookcheck.net/Your-child-s-GPS-watch-tells-everyone-where-they-are.1367794.0.html), accessed 2026-08-19.)

**This answers the backend question directly. SaveFamily does not run its own backend.**
It rides YQT / 3G Electronics' SETracker-family platform, the same platform stem as
Garett Tracker. SaveFamily is a Spanish brand, a warranty entity and a storefront
wrapped around a Chinese cloud it does not control. **The party that can withdraw the
service is in Shenzhen, not in Bizkaia** — and SaveFamily could not keep the service
running for Romania even if it wanted to.

Corroborated independently by a second write-up of the same research (7 Aug 2026):

> *"a parent in Sweden buying a 'SafeKid' watch and a parent in Spain buying a **'SaveFamily'** watch are unknowingly sending their children's location data to the same vulnerable backend."*

([Tanya Goodin](https://tanyagoodin.com/2026/08/children-smartwatch-cybersafety/), accessed 2026-08-19.)

### What the researchers could do

> *"By their own account they took over millions of devices: read and spoof location, intercept text and voice messages, **listen in silently**, trigger the camera."*

45 vulnerabilities were filed across three platforms (SETracker ~10M devices,
SinoTrack >6M, TKSTAR/Thinkrace >20M); in some cases there was a **complete absence of
authentication**, meaning anyone could send commands to any device. Capabilities
included replacing a watch's emergency contacts with an attacker's numbers. Wonlex
published a blog post on 10 August 2026 describing three items as fixed, found during
an "internal security audit", crediting neither the researchers nor DEF CON.
SinoTrack and Thinkrace did not respond.
**SaveFamily is not recorded as having responded to anything.**

**Caveat, stated explicitly:** SaveFamily is named on the "39 brands, one server" slide
and its package stem matches, but no source located in this pass demonstrates a
successful exploit against a **SaveFamily-branded** device specifically. The
brand-level exposure is **unverified at the device level** — the platform-level
finding is not.

### Data hosting — the "datos europeos" claim does not survive contact

The claim originates in an Italian affiliate round-up which relays SaveFamily marketing
copy verbatim: *"GPS in tempo reale, chiamate, videochiamate, WhatsApp sicuro, Spotify,
IA … con controllo parentale e **dati europei**"* — "…with parental control and
**European data**"
([saluteopinioni.it](https://saluteopinioni.it/migliori-smartwatch-per-bambini/)).
**That is marketing copy relayed by a third party, not a vendor commitment and not a
test result.**

Checking it against SaveFamily's own privacy policy: the policy names the controller
(**Grupo SaveFamily S.L., CIF B39886767, Parque Tecnológico de Abanto y Zierbena,
Edificio María Telkes, Montaño Bidea 2, 48500 Abanto-Zierbena, Bizkaia**), names BBVA/
RedSys for card payments, and asserts SSL/AES-128. It **states no storage location, no
processing region, no retention period, and discloses no transfers outside the EU and
no sub-processors** — despite the entire product being a child-location service running
on a third-party Chinese platform.
([privacy policy](https://savefamilygps.com/en/policies/privacy-policy), accessed 2026-08-19.)

Against that silence, the DEF CON research states of the shared platform:
> *"The data sits on Alibaba Cloud in China."*
> *"Contact numbers, photos and voice messages live on the server, not on the watch."*

**Conclusion: "datos europeos" is unsubstantiated marketing.** The vendor will not say
where the data is; the platform research says China. `data_region: China`, flagged
**unverified for SaveFamily specifically** only because SaveFamily itself has never
been asked to confirm or deny in public.

### Covert remote listening

SaveFamily ships the capability and names it euphemistically. On the Iconic Plus 2 the
feature is the **"Módulo antiacoso"**:

> *"Módulo antiacoso: Si tiene sospechas, **descubra lo que sucede alrededor de su hijo**."*
> — "Anti-harassment module: if you have suspicions, **discover what is happening around your child**."

On sibling models the vendor drops the euphemism entirely and calls it what it is:
the **Enjoy** page advertises *"alerta instantánea con ubicación y **opción de escucha
remota**"* ("instant alert with location and **remote listening option**") and the
**SaveWatch+** page advertises *"botón SOS, **escucha remota** y aplicación de control
parental"*.

So: the watch can be made to open its microphone from the parent app. Nothing found in
SaveFamily's documentation describes whether the child is notified, whether it can be
disabled, or whether it can be **locked** so that a compromised parent account cannot
invoke it. Combine that with a platform on which researchers demonstrated the ability
to *"listen in silently"* on devices they did not own, and this is the sharpest privacy
risk on the device. **Answer to "can it be locked": UNKNOWN, and the vendor does not
address the question.**

For contrast, Spain's national cybersecurity institute INCIBE maintains a page on
SaveFamily that lists the app as an Android/iOS parental-control tool and **does not
mention remote listening at all**, nor issue privacy warnings
([INCIBE](https://www.incibe.es/menores/familias/control-parental/savefamily), accessed
2026-08-19) — a listing, not an audit, and it should not be read as a clearance.

### The Google Play data-safety declaration is not credible

Google Play's Data safety card for `com.tgelec.savefamily` states:

> *"The developer says this app doesn't collect user data."*
> *"The developer says this app doesn't share user data with other companies or organizations."*

([Play data safety](https://play.google.com/store/apps/datasafety?id=com.tgelec.savefamily&hl=en), accessed 2026-08-19.)

This is a **child real-time location tracking application** with, per third-party
mirrors, 33–40 Android permissions including fine location, camera, microphone/audio
recording, contacts and phone state. A "does not collect user data" declaration is on
its face false. It is a self-declaration Google does not verify, and it tells you how
seriously this developer treats disclosure obligations. Under Article 3(3)(e) of the EU
Radio Equipment Directive, privacy by design has been a **market access requirement
since 1 August 2025**.

## Reality check

- **"4G/3G/H+"** means: LTE data probably works in Romania; **3G and H+ are dead here**;
  and the vendor has never said what carries voice. Read as *"we are not going to tell
  you whether calls work on a Romanian LTE-only network."*
- **"Long battery life"** and **"20% more battery"**: the 20% figure is conditional on
  buying **SaveFamily's own Spanish SIM**, which is not a usable product in Romania.
  The vendor's unconditional number for the mode you would actually use is
  **8–12 hours with GPS active** — under half a claimed "day".
- **"3 sistemas de posicionamiento"**: three sources, but two of them are Wi-Fi and
  cell-tower lookups, which is exactly the mechanism behind *"te lo ubica a varios km"*.
- **"Datos europeos"** (relayed marketing): the privacy policy names no storage region;
  the platform research says Alibaba Cloud, China.
- **"Módulo antiacoso"**: a covert microphone, under a safeguarding name.
- **A 0.3 MP camera on a €129 device.** 0.3 MP is VGA — 640×480, the resolution of a
  2003 phone. The gen-1 support sheet lists 1.6 MP for the *older* model, so the camera
  went **backwards** too. Meanwhile the same €129 buys Full HD, NFC, face unlock,
  Spotify and an AI assistant. That is a clear statement about where the budget went:
  into the demo, not into the radio, the battery or the optics.

## What users say

No Romanian owner report of this model exists — positive or negative. Everything below
is **Spain**, and is mostly brand- or gen-1-level. Independent-report counts are given.

**Works:**

- **Unai, ES, 23/09/2022, positive** — *"Mi hija ha tenido dos SaveFamily el superior y el iconic plus y son productos de altísima calidad... es que estan disponibles a traves de chat te contestan rapidisimo y eso yo lo valoro mucho."*
  — "My daughter has had two SaveFamilys, the Superior and the Iconic Plus, and they are extremely high quality products... they're available via chat and answer very quickly, and I value that a lot."
  **One report**, and it directly contradicts the support complaints below.
  ([sportkids.es](https://sportkids.es/save-family-reloj-infantil-con-gps-opiniones/))
- GPS accuracy is described as good by some Spanish owners (prior sweep,
  `.discovery/lens-4-community.md`) — **unattributed and undated in that sweep; treat as weak.**

**Fails:**

*Location (2 independent reports, 2023 and 2024):*
- **Beatriz, ES, 05/06/2023, 6 months' use** — *"La localización es malísima, según el momento la clava o te lo ubica a varios km de la localización... No lo recomiendo para nada."* / "The location is terrible: sometimes it nails it, sometimes it places you several km away... I don't recommend it at all."
- **Neron, ES, 27/06/2024** — *"Lo peor, muy malo. El GPS no es nada nada preciso... Tiene 5 meses y para tirar."* / "The worst, very bad. The GPS is not accurate at all... 5 months old and fit for the bin."

*Battery (2 independent reports):*
- **Beatriz, ES, 05/06/2023** — *"la batería tampoco dura mucho, no le aguanta un día entero"* / "the battery doesn't last long either, it doesn't survive a whole day."
- Brand-level, ES — *"La batería es muy baja y no aguanta dos días"* / "The battery is very low and doesn't last two days."

*SIM not recognised:*
- Reported at brand level in Spanish sources — *"no reconoce la tarjeta SIM"* — and
  significant enough that SaveFamily maintains a **dedicated support article** for it,
  which is where the B3/B7/B20 statement appears. Vendor's stated causes: PIN not
  removed, wrong SIM size, no balance, no coverage. **Multiple reports; exact
  attribution and dates not recovered in this pass.**

*Device failure and warranty denial (5 independent dated reports, 2022–2024 — the densest complaint cluster found for any brand in this project):*
- **María, ES, 30/08/2022** — *"El dispositivo dando fallo desde el principio... Así en 4 ocasiones mismo proceso en un año. Pido desde el inicio reemplazo de dispositivo a SavE Family (no Amazon) y se niegan. Mal el dispositivo Mal el servicio de SavE Family. 0 recomendable"* / "The device failing from the start... Four times, same process, in one year. From the outset I asked SaveFamily (not Amazon) for a replacement and they refuse. Bad device, bad SaveFamily service. 0 recommendable."
- **Ainara, ES, 14/09/2022** — battery degraded after brief, shallow pool contact; the company asserted water damage and denied warranty **despite the IPx7 rating**.
- **Javi, ES, 30/03/2023** — *"Le regalé a mi hijo el reloj, un savefamily el 24 de diciembre, y el 24 de este mes ya no hay manera de que funcione..."* / "I gave my son the watch, a SaveFamily, on 24 December, and by the 24th of this month there's no way to get it to work." Four-plus support contacts, no solution.
- **SERGIO, ES, 25/04/2023**, on an **Iconic Plus 4G** specifically — *"Como otros tantos usuarios me encuentro con que en un año ha dejado de funcionar... Si quieres tener un reloj del que nunca se van a hacer cargo cuando deje de funcionar compra un SaveFamily de estos."* / "Like so many other users I find that in one year it has stopped working... If you want a watch they will never take responsibility for when it fails, buy one of these SaveFamilys."
- **Carolina, ES, 24/09/2023** — given in July, never worked by September; returned unrepaired after a week with no communication.
- **Jose, ES, 17/01/2024** — three defective units in 32 days, 3–4 days per email reply, refund refused until a formal consumer complaint was filed: *"Unos impresentables. No compraría nunca mas sus productos... Son productos malos, parecen chinos de baja calidad..."* / "Disgraceful. I would never buy their products again... They are bad products, they look like low-quality Chinese goods."
- **OCU (Spanish consumer organisation) formal public complaint, 05/10/2022**, *"Reloj no funciona y no dan soporte"* ("Watch doesn't work and they give no support"): *"compré a principios de este año un reloj con gps y llamadas para localizar a la niña. Desde el primer momento ha dado problemas de comunicación"* / "I bought a GPS-and-calls watch at the start of this year to locate my daughter. From the very first moment it has had communication problems." Required daily restarts; the company was unresponsive for an extended period; the unit was finally sent for repair in Oct 2022 and the service report (10/11/2022) declared it working and blamed the SIM PIN. **Status: resolved.**
  ([OCU](https://www.ocu.org/reclamar/lista-reclamaciones-publicas/reloj-no-funciona-y-no-dan-sop/CPTES01610106-03))

The recurring pattern across five of these — *the company attributes the fault to water
ingress or to the user's SIM and declines the claim* — is the single most consistent
signal about this vendor. From Romania, with no local entity, you would be running that
process by email, in Spanish, across a border, against a 72-hour claim window.

*The app itself:*
- **1.7 / 5 from 1,832 ratings** on Google Play (worse than the 2.6/5 Garett Tracker on
  the same platform family). This is a global figure, not a Romanian one, and it is the
  most important number in this document after 850 mAh.

## Sources

All accessed **2026-08-19** unless stated.

**Vendor — product and specification**
- https://savefamilygps.com/en/products/iconic-plus-2 — Iconic Plus 2: 850 mAh, *"Available networks: 4G/3G/H+"*, 0.3 MP camera, 1.78" Full HD, 1 GB/8 GB, Android 8.1, IP67, dual-core, dimensions 22×4×1.6 cm, €129 (from €149), class mode, anti-bullying module, Play Store access, AI.
- https://savefamilygps.com/en/products/watch-with-gps-and-call-with-new-more-advanced-functions-new-iconic-plus-4g — Iconic Plus gen 1: **1000 mAh**, "4G/3G/H+", **SC8521E**, 0.3 MP, 1.4" IPS, 1 GB/8 GB, Android 8, IP67, €105 (from €115), in stock.
- https://savefamilygps.com/en/collections/gps-infantil-kids — both generations still listed and in stock; full range and prices.
- https://soporte.savefamilygps.com/hc/es/articles/14933606097047-Caracteristicas-Tecnicas — gen-1 technical characteristics: 1000 mA, "4G, 3G, H+", 1.6 MP camera, GPS/Wifi/LBS, 512 MB/4 GB, **55 g**, IP67. **No band list, no VoLTE.**
- https://www.manualslib.com/manual/2852947/Savefamily-Iconic-Plus.html — Iconic Plus manual: 1000 mAh, nano-SIM, 1.4". **No LTE bands, no VoLTE, no chipset.** *"Distributed by Grupo Savefamily S.L. — Made in China, Designed in Europe."*

**Vendor — the decisive support articles**
- https://soporte.savefamilygps.com/hc/es/articles/38822431500439--Cu%C3%A1nto-dura-la-bater%C3%ADa-de-un-reloj-SaveFamily — **`battery_claimed_h` source.** Iconic+2: *"Aprox. 24 horas"* / *"8-12 horas"* GPS active / *"Hasta 36 horas"*. Iconic+: 24 h / *"9-14 horas"* / *"Hasta 40 horas"*.
- https://soporte.savefamilygps.com/hc/es/articles/38264513485591-El-reloj-no-reconoce-la-tarjeta-SIM-Soluciones — **the only band statement found:** *"los dispositivos SaveFamily operan generalmente en bandas B3, B7, B20"*; *"la mayoría de modelos requieren nano-SIM"*.
- https://soporte.savefamilygps.com/hc/es/articles/14950105105303-Gu%C3%ADa-de-Usuario-R%C3%A1pida — registration flow: account+password (6–12 alphanumeric), QR/REGCODE, watch phone number. **No country gate documented.**
- https://soporte.savefamilygps.com/hc/es/articles/38659133370263 — *"No puedo registrar el reloj en la app"*: only REGCODE and admin-authorisation causes. No country/network condition.
- https://soporte.savefamilygps.com/hc/es/articles/32734648916887-Funciones — feature list incl. *"Módulo antiacoso: Si tiene sospechas, descubra lo que sucede alrededor de su hijo"* and *"Modo inactivo en clase"*.
- https://soporte.savefamilygps.com/hc/es/articles/38657720806551 — *"Supervisión de aplicaciones"* can enable/disable watch apps; which apps is not stated.
- https://soporte.savefamilygps.com/hc/es/articles/38657637548183 — class/Do-Not-Disturb mode: *"el reloj solo muestra la hora y las funciones de emergencia (SOS y GPS) siguen activas"*.
- https://soporte.savefamilygps.com/hc/es/articles/15012731911959-Configurar-datos-m%C3%B3viles-APN-en-tu-reloj-SaveFamily — **17 carriers listed, all Spanish.** No Romanian or other non-Spanish operator.
- https://soporte.savefamilygps.com/hc/es/articles/39383423319191 — SaveFamily SIM: *"El servicio incluye roaming en la UE (Zona 1)"*.
- https://soporte.savefamilygps.com/hc/es/articles/360061194793--Aceptan-los-relojes-cualquier-tarjeta-SIM — *"compatibles con tarjetas SIM de cualquier operador telefónico"*, ≥500 MB/month recommended. No country restriction, no VoLTE/band statement.
- https://soporte.savefamilygps.com/hc/es/articles/360061194893--Puedo-hacer-llamadas-con-cualquier-reloj-SaveFamily — all models can call; **no network-type requirement stated.**
- https://soporte.savefamilygps.com/hc/es/articles/38657500326935 — live map + 24 h route history; **no update interval published.**

**Vendor — commercial terms**
- https://savefamilygps.com/policies/shipping-policy — **"Rumanía (EUR €)"** present in the country list; Rest-of-Europe: UPS Standard 2–4 days, free >€76 / €10.00 <€76; UPS Express €7.50 / €12.50.
- https://savefamilygps.com/policies/refund-policy — **72-hour claim window**; no withdrawal period or warranty term stated; peninsula vs non-peninsula handling.
- https://savefamilygps.com/en/policies/privacy-policy — controller **Grupo SaveFamily S.L., CIF B39886767**, Abanto-Zierbena, Bizkaia. **No data location, no retention period, no third-country transfer disclosure.**

**App layer**
- https://itunes.apple.com/lookup?bundleId=com.savefamily.watch&country=ro — **RO App Store confirmed**: seller *Grupo SaveFamily SL*, v1.3.9, released **2026-07-10**, price 0.00 RON, min iOS 15.0, language list **includes RO**, 0 RO ratings.
- https://apkcombo.com/savefamily/com.tgelec.savefamily/ — **Play rating 1.7 ★ from 1,832 ratings**, 100K+ installs, developer *SaveFamilygps*, v1.3.9 build 40 rel. **2026-07-21**, Android 5.0+, 76 MB, Lifestyle.
- https://play.google.com/store/apps/datasafety?id=com.tgelec.savefamily&hl=en — *"The developer says this app doesn't collect user data"* / *"…doesn't share user data"*; encrypted in transit; deletion request offered.
- https://savefamily.en.softonic.com/android — 33 permissions incl. fine/coarse location, camera, audio recording, contacts, phone state; v1.3.9, 2026-07-22.
- https://savefamily.en.uptodown.com/android — v1.3.9 (2026-07-10), 40 permissions, Android 5.0+.
- Google Play RO storefront reviews (2024-04-09, 2022-09-23, 2024-10-17) — **carried forward from `.discovery/lens-5-romania.md`; the Play page would not render to automated fetching in this pass.**

**Security research**
- https://www.notebookcheck.net/Your-child-s-GPS-watch-tells-everyone-where-they-are.1367794.0.html (pub. 2026-08-14) — DEF CON 34, 8 Aug 2026, **Felipe Solferini & Vangelis Stykas**; *"39 brands, one server"* naming **SaveFamily**; *"Moving from Wonlex to SaveFamily… is a sticker change"*; `com.tgelec.*` stem → SETracker / **YQT (3G Electronics)**; *"read and spoof location, intercept text and voice messages, listen in silently, trigger the camera"*; **"The data sits on Alibaba Cloud in China"**; *"Contact numbers, photos and voice messages live on the server, not on the watch"*; RED Art. 3(3)(e) privacy-by-design in force since 2025-08-01.
- https://tanyagoodin.com/2026/08/children-smartwatch-cybersafety/ (pub. 2026-08-07) — independent corroboration naming SaveFamily and the shared backend; >60 brands on 3 platforms (YiQingTeng/SETracker, NewGPS2012, SinoTrack).
- https://www.incibe.es/menores/familias/control-parental/savefamily — INCIBE (Spain) listing of the SaveFamily app; Android+iOS, paid; **no privacy warnings, no mention of remote listening.** Listing only, not an audit.
- https://www.hb.fh-muenster.de/opus4/frontdoor/deliver/index/docId/12354/file/Saatjohann_et_al-2020-STALK.pdf — *STALK: Security Analysis of Smartwatches for Kids* (Saatjohann et al., **2020 — older source, flagged**). PDF would not extract in this pass; retained as prior art on this device class.

**Owner reports**
- https://sportkids.es/save-family-reloj-infantil-con-gps-opiniones/ — dated Spanish owner comments: María 30/08/2022, Ainara 14/09/2022, Unai 23/09/2022 (positive), Javi 30/03/2023, SERGIO 25/04/2023, Beatriz 05/06/2023, Carolina 24/09/2023, Jose 17/01/2024, Neron 27/06/2024. **Affiliate page; the comment thread is the evidence, not the article.**
- https://www.ocu.org/reclamar/lista-reclamaciones-publicas/reloj-no-funciona-y-no-dan-sop/CPTES01610106-03 — OCU public complaint vs SaveFamily, **05/10/2022**, status *Resuelta*.
- https://saluteopinioni.it/migliori-smartwatch-per-bambini/ — Italian round-up, source of the *"dati europei"* / *"datos europeos"* claim. **Marketing copy relayed, not independent testing.**

**Could not be retrieved (recorded, not guessed)**
- Google Play product page for `com.tgelec.savefamily` — rendered only navigation chrome on every attempt; RO reviews not re-verified.
- PcComponentes review page (403), opiniones.cloud (502), Amazon.es product page (500), AppBrain (403), MLQ News write-up of the DEF CON research (403), DEF CON 34 media directory (no file index).
- **No EU declaration of conformity (RED) for the Iconic Plus 2 or Iconic Plus exists in public** as far as this pass could determine — the single most important missing document.
- **No WebSearch budget remained** after the app/security sweep; the Spanish marketplace review corpora (Amazon.es, PcComponentes) are therefore under-sampled.

## Open questions a buyer must close before paying

1. **Does the SaveFamily app accept a Romanian registration?** Free to test in ten minutes; still untested. Vendor docs suggest no country gate exists, but that is a reading, not a result.
2. **VoLTE, yes or no.** Undocumented everywhere. Email support and demand a written answer; if they cannot answer, that is the answer.
3. **The CE/RED declaration for this exact SKU**, to convert *"generalmente B3, B7, B20"* into a fact and confirm B20.
4. **Can the "módulo antiacoso" microphone be disabled and locked?** Undocumented.
5. **Where is the location data stored?** SaveFamily's privacy policy does not say; the platform research says Alibaba Cloud, China. Ask directly, in writing, before any purchase.
