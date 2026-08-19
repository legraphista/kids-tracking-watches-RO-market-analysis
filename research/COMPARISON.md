# Kids' 4G GPS watches in Romania — what actually works

A parent's comparison, compiled August 2026. Every claim traces to a linked source in the detailed documents — and where earlier versions got something wrong, the correction is left visible rather than deleted. The detailed per-watch
documents with links are in [`watches/`](watches/), the full candidate list including everything
rejected is in [`OPTIONS.md`](OPTIONS.md), the scoring method is in [`RANKING.md`](RANKING.md),
and the battery investigation is in [`BATTERY.md`](BATTERY.md).

Written for: a child around 7, at school, parents at work. The requirement was a reliable
position **indoors at school**, at least a full day of battery, an Android app, and 4G. Price
was not a limit.

---

## The 60-second answer

**There is no great option here. Anyone telling you otherwise is selling something.**

**The decision, in order:**

1. **Get the SIM first.** Any cheap prepaid with voice and ~1 GB of data is plenty — the cheap
   tier moves under 1 MB a day; budget more only for a video-calling watch. Prefer **Digi or
   Orange**, so that if VoLTE setup fails, calls fall back to 2G instead of silence. Only the
   Garmin needs more than a SIM: a mandatory ~€10/month subscription of its own.
2. **Spend ten minutes on the imoo test before spending any money.** Install the imoo app from
   the Romanian Play store and register with your +40 number. imoo signs up by SMS code — and the
   one Romanian attempt on record never received that code.
3. **If imoo registration works, buy the imoo Watch Phone Z7** — €186 from imoo's own EU store
   (imoostore.com, ships to Romania) or ~1,115 lei on eMAG via marketplace seller OVOLT (14-day
   return). It is ~~the only imoo~~ an imoo with **Galileo and BeiDou** *(corrected 2026-08-19: the X10's spec lists the same eight-system stack — the distinction holds only against the Z3)*, it keeps **14 days of location
   history** (the Z3 keeps none outside China), and a model-verified owner ends the school day at
   **roughly 50–65% battery**.
4. **If registration fails — or you want the simplest safe path — buy the TCL MOVETIME MT48**:
   898 lei, sold by eMAG itself ("1P", not a marketplace seller), 30-day return, 24-month
   warranty. Romania-correct bands in an actual regulatory filing, ordinary nano-SIM, no
   unresolved blocker — and almost no reviews anywhere, so you are buying the fewest *known*
   problems, which is not the same as the fewest problems. **Keep the invoice**: predecessor
   models died at ~13 months, inside the warranty.
5. **On a budget, the imoo Z3** — **664 lei from Amazon.de** (1,523 lei on eMAG): same cell and
   same drain as the Z7, but no location history, no Galileo or BeiDou, and the same
   registration risk.
6. **Whatever you buy, run the ten-minute test at the bottom inside the return window.**

---

## Four things that decide this in Romania, and nobody tells you

### 1. Romania has no 3G. Check how the watch makes a *call*, not how it gets *data*.

3G is switched off at every Romanian operator. Many watches advertised as 4G use LTE only for
data and fall back to 2G or 3G for voice. With 3G gone, those depend on a 2G layer that Orange
and Digi still run but nobody has promised to keep.

**Good news that corrects a widespread myth:** VoLTE — voice calls carried over the 4G network — is in Romania a **flag on your SIM
profile**, not a whitelist of approved devices. Digi's own community documentation describes
enabling it by putting the SIM in any supported phone once, or by calling to have it provisioned
manually. So a watch that "isn't on the operator's list" isn't doomed — it's a setup step. A
French owner runs an imoo Z3 on an operator that isn't on imoo's own list at all, with working
two-way voice.

**Still prefer Orange or Digi**, so that if VoLTE doesn't come up, calls fall back to 2G rather
than to silence.

**And here is what the failure looks like, already played out elsewhere.** Three Australian imoo
Z7 owners (2024–2025, verified purchases): the watch ran **audio-only** — no GPS updates, no video
— because data/VoLTE never provisioned, so it had quietly lived on 3G voice the whole time. When
Australia shut 3G down, it died: *"this device is 3g only… seeking return."* It never was 3G-only;
it was mis-provisioned, and nobody noticed until the network moved. Romania's 3G is already gone —
the same failure here is silent from day one, which is why the incoming-call test below is not
optional.

### 2. B20 is the band that decides whether it works inside the school.

Romanian operators carry indoor and rural coverage on **B20 (800 MHz)**. B3 (1800) does the
national heavy lifting. A watch without B20 connects fine outdoors near a mast, then loses
signal inside a concrete school building — which is where your child spends the day.

**Be precise about what B20 buys you.** It keeps the watch *connected* indoors — able to receive
your call and to send anything at all. It does **not** make the indoor *position* good: indoors,
every watch here falls back to Wi-Fi or cell-tower positioning regardless (section 3). A watch
without B20 fails harder — silent *and* lost — but B20 alone only guarantees you can reach a watch
that may still be guessing where it is.

Two traps. **B28 (700 MHz) is worthless here**, because Romania deploys 700 MHz as 5G, not LTE;
a spec sheet advertising B28 is selling you nothing. And in the cheap tier, **B20 is an optional
factory build choice** — the manufacturer's own pages show one model listing "Optional: B20",
the next without it, a third with neither. Same name, same photos, different radio.

**And beware band lists that are copy-paste.** Carneo publishes a band string that is
byte-identical across **five concurrent models spanning four years**, and the current model's manual still
carries the *previous* model's title in its PDF metadata. Their own Tiny model has a different
string — proving the field *can* be model-specific, and simply never was updated for the rest.
Those B20 claims have nothing behind them.

### 3. Most of these watches cannot receive the European satellites — and some barely try.

The cheap and mid tier runs on UNISOC chips (SL8521E, SL8541E, SC8541E). At silicon level these
do GPS, GLONASS and BeiDou on a **single frequency**, and can run only **one** of the non-GPS
constellations at a time. **There is no Galileo. There is no QZSS.** Confirmed from the chip's own
driver code and its firmware images, and consistent with 37 runs of a satellite-logging app on
**another device using the same chip**, in which Galileo was never once observed. Be clear about that
last one: the logging device is a payment terminal, not a watch. **No watch on this platform has
ever been measured.**

Galileo is the European constellation. No update adds a frequency the radio physically cannot
hear. **Where a watch in this tier advertises Galileo, the claim is false.**

It gets worse. These ship configured to ask an **Asian assistance server** — AutoNavi, Alibaba's
mapping arm — where the satellites are. Owners who find the setting and switch it to Google
report accuracy improving *"by 100%"*. On one brand an owner documented the position priority as
**Wi-Fi first, cell towers second, GPS last** — preferring tower positioning even outdoors, to
save battery. And Carneo's own manual admits that when Wi-Fi sleeps you lose *"communication with
it **and also locating it**"*, because on that watch Wi-Fi is *"exclusively for product updates"*.

That is the mechanism behind the reviews below reporting a child 7 km, 25 km or 200 km away. It
isn't bad luck. It's the design.

### 4. The watch is not the product. The vendor's server is.

Every one of these is a client for a company's cloud. If that company decides your country isn't
a market, the hardware becomes a bracelet, and there is nobody to appeal to.

- **Xplora** — sold across the EU; its own supported-country list excludes Romania. Romanian
  buyers report being unable to create accounts.
- **Vodafone Neo** — Vodafone switched off its entire Smart Tech line on 1 August 2024. Working
  watches, remotely killed.
- **Pingonaut** — manufacturer insolvent since 2020, support discontinued, stock still on sale.
- **Spacetalk** — a 2025 platform migration left watches that "stopped working, stopped pairing".

**Partly good news, and one important exception.** **Carneo and Garett register by email address**,
with no country selector anywhere in the flow, so the Xplora refusal mode cannot occur on those two.

**imoo does not.** imoo registers by **phone number with an SMS confirmation code** — and the single
Romanian attempt on record failed at exactly that step: *"Can not login with the phone number because
o do not get the sms confirmation code"* (Romanian App Store, July 2025). A phone-number key is
precisely the field a country code can be refused on. A Play reviewer states the mechanism outright:
*"My country isn't in the list. No possibility to register…"* — and an imoo owner confirms the account
system is **partitioned by region**. **That is the same class of failure as the Xplora**, and it sits
on the brand behind two of the top three rows below.

**Correction:** an earlier version of this document said a sweep of ~2,700 reviews had found zero
country-code refusals. **That sweep does not exist and the claim is withdrawn.** Registration failures
are documented across Germany, the UK, Ireland and Romania in 2026.

---

## The comparison

**Two separate questions, deliberately not merged into one score.** *How good is it at the job?*
and *how much do we actually know?* A watch can be promising and untested, or thoroughly proven
to be mediocre — and collapsing those into a single number is how the Garmin ended up
recommended in an earlier draft of this document.

**Nothing here scores above 4 out of 10 on capability. The "good, and proven to be good" box is
empty.** For calibration: a 10 would do everything on its box, reliably; a 7 would be a good
product with real flaws; a 4 does the core job with significant, documented failures; a 2 fails
the core job. Ordered by capability, then by how much we know.

| # | Watch | Price | How good (/10) | How much we know | Works in RO? | Battery, real | The honest verdict |
|---|---|---|---|---|---|---|---|
| 1 | **TCL MOVETIME MT48** | 898 lei, eMAG 1P | **4** | Well checked | **Likely** — app live in RO Play, bands in a regulatory filing | MT48 owner reports run from **5–6 h a day** to "lasts days", none with a stated interval; predecessors cluster at 20–24 h | **The buy — because everything else is worse, not because it's proven.** Ten months after launch it has almost no word of mouth anywhere, including its lead market. Location is polled on demand, not streamed, despite the "1-second refresh" marketing. TCL has never stated any constellation but GPS. Predecessors died at ~13 months. **And note the tension: the worst owner reports (5–6 h/day) fail this comparison's own full-day requirement** — nobody states their tracking interval, so battery is the first thing to test. Buy eMAG first-party for the 30-day return |
| 2 | imoo Watch Phone Z7 | €186 / ~1,115 lei | 4 | Well checked | **Unknown** — no +40 signup demonstrated. Note it holds a *stronger* Romanian tier than the Z3 (a RO warranty entity), not a weaker one | **~50–65% left after a 9.5 h school day** — a model-verified Spanish owner puts the watch at 50% by bedtime. Powers off overnight by factory default on EU units (Indonesian firmware presents it as opt-in) — which is how the "2–3 days" claims are built | Has Galileo **and** BeiDou — ~~the only imoo that does~~ *(corrected 2026-08-19: the X10 lists the same stack; the Z3 is the one without)* — plus 14-day history (though one German owner's history **died silently within hours** and survived reset, so verify it in week one). But background reporting is **hourly**; live only when you ask. SOS is **not a physical button**, and one Polish owner reports it is hard for a child to trigger — but the exact mechanism on the Z7 is unverified (it is confirmed for the Z3, from imoo's own copy). Charge it nightly |
| 3 | imoo Watch Phone X10 | €299 direct (**€239 at MediaMarkt.de**); 3,630 lei on eMAG | **4** | Well checked | Likely per its doc (one dated RO owner confirms calls connect — inside a scathing 1★: *"I do not recommend this watch at all"*), and a Play review states the mechanism that would hit Romania: *"My country isn't in the list. No possibility to register…"* | imoo's own listing: "1 to 2 days"; the only owner figure agrees — *"der Akku hält auch nur 1 bis 2 tage"* (1★). Clears a school day; nothing suggests it outlasts the Z7 | After setting aside every review that names a different model, **11 verified owners across 6 countries** remain — the Amazon listing's 3,759 ratings were shared across three different watches and were excluded (Amazon has since re-cut that listing into per-model pools). **A comment-seeding operation is documented**: one account wrote 19 of the 76 comments under one promotional video, and 8 more under another. **SOS is a screen gesture here too, and it is opt-in** — no SOS at all unless the parent enables it in the app. Still 67 g and rated 0–35 °C |
| 4 | **imoo Watch Phone Z3** | **664 lei from Amazon.de** (1,523 on eMAG) | **4** | Partly checked | **Unknown** — same app and same registration flow as the Z7; RO Play store is live but no +40 signup has ever been demonstrated | ~2 days; ~50% left after a day's wear — **window not stated** | **The value pick — but only because it is cheap, not because it is better.** It shares the Z7's 740 mAh cell and drains at the same rate — and since a dedicated sweep found the Z7 a school-day-shaped figure and this watch still has none, **the Z7 is now the better-evidenced of the two on battery.** No location history at all outside China — a live fix when you ask, and no trail. Geofence looks Wi-Fi-anchored: one owner reports school arrival/departure alerts never firing. SOS is a **gesture drawn on the screen**, not a button. No Galileo and no BeiDou — the Z7 has both |
| 5 | **Carneo GuardKid+ Platinum** | ~565–708 lei | **3** | **Very well checked** | Likely — RO Play *and* App Store confirmed; email-only signup | **~30 h** measured at a stated 10-minute interval; owner reports span **14 h to 96 h** on the same SKU | **This was recommended in an earlier draft. It should not have been.** ~400 owner reviews say tracking is broken for a large minority: *"in the garden about 70 m from the house it locates 13 km away!!!"*, *"it showed my son was in Hong Kong"*, geofence firing **10 km late**. **The SOS false-triggers and cannot be disabled** — one owner's backpack kept re-triggering it, another child's watch sent repeated SOS alerts from school, and each trigger re-dials **all three parent-set SOS contacts** by design. Physically too big for a 7-year-old |
| 6 | Carneo GuardKid+ ULTRA 2nd gen | ~865 lei | **3** | Well checked | Likely | **24–48 h** — one owner: *"barely lasts one day"* | **Indoors it is a cell-tower device by design** — measured error **300–600 m**, one tester got a satellite fix indoors *twice in an entire test*, another measured **15 km**. **No EU Declaration of Conformity exists for it**, nine months after launch, though its own manual says one is published. The sibling declarations that do exist **omit the cellular radio and SAR testing entirely**. **Three of thirty reviewers** in the one unpaid review pool report a unit dying early |
| 7 | Garett Kids 4G line | 311–575 lei | **3** | Well checked | Likely — Garett sells first-party on eMAG; email-only signup | Four owners converge on ~2 days; a fifth says it *"doesn't even last until the evening"* | **The app is rated 1.70★ on the Polish App Store** (71% one-star) and 2.33★ on Play. Positions **two days stale during a real emergency search**. And the failure that matters most here: *"dozens of notifications a day saying that the child is outside of school, and you stop paying attention to them"* |
| 8 | Wingereich 4G | 380–400 lei | 3 | Well checked | **Working owners on all three networks** — Digi, **Orange (YOXO)** and **Vodafone** — the only cheap-tier watch with a non-Digi confirmation | Best-quantified test in the tier: **D-011 lasted 7 h sensors-on / 4 h continuous, on two units**. Nobody corroborates the claimed 168 h in 676 texts | Highest Romanian sales, now with **all 676 review texts read**. **Two different watches share this name** (D-023 AMOLED/900 mAh vs D-011 IPS/700 mAh) — reviews are tagged per model in the doc. Early deaths **2.5% (D-023) to 6.6% (D-011)**. Drift reaches **10 km**, plus a "shows China" report. And the seller's official fix for garbled calls is **"disable VoLTE"** — voice de facto rides 2G |
| 9 | WIRSEN 4G | 295 lei | 3 | Partly checked | **Digi only — and that is now a fully-read result**: all 149 review texts read and a carrier word-search run over all 159 ratings; zero owners name Orange or Vodafone | First interval-qualified figure in the tier: **12 h at a 1-hour GPS poll** (social apps off). Two buyers mock the advertised 168 h by name | What Romanian parents actually buy. The full pool corrects two earlier claims: **drift complaints do exist** ("other end of the country"), and early deaths are **3 in 159 (1.9%)**, not the panic the first readable handful implied. Its "spy" call leaves a missed-call trace on the watch. Bands, VoLTE and chipset still unknown from any document |
| 10 | Canyon Sunny KW-48 | 530 lei | **3** | Partly checked | Likely — app live in RO, Romanian firmware; registration worked without country gating in LV/HU/SK/BG/KZ | No number exists. Owners: "lasts the whole school day" (unverified) vs **rapid drain in Precise mode** — the one report touching the 1-minute mode, and negative | **The indoor story is now owner-confirmed**: a Bulgarian owner's pin froze kilometres from home and survived restarts; a video reviewer showed the pin on the street while filming indoors — and **found no way to pair Bluetooth on his unit**, leaving the "Safetrack AI" indoor marketing with nothing observable behind it. Covert listen and covert camera, neither lockable |
| 11 | LAMAX WatchY4 Play | 1,294 lei (marketplace; ~€90 at home — a 2.8× markup) | **3** | Barely checked | Likely — app live in RO Play (checked 2026-08-19), email-only signup, ordinary SIM | ~40 h observed, once; four contradictory vendor claims (120 h / 72 h / 2–3 d / 3–5 d) | **Un-gated after two months in limbo** — the "cannot verify Romania" turned out to be our broken fetch, not their broken service. GPS-only positioning with a **9-minute interval floor**; the vendor's own fallback numbers are Wi-Fi ~300 m and cell towers up to 1 km; the one owner anecdote is a Czech parent shown his son **2 km from the school he was in**. Bands and VoLTE unknown |
| 12 | **Garmin Bounce 2** | 1,499–1,836 lei | **2** | **The best-understood product here** | **Yes** — the only vendor naming Romania in its own documents | **"2 days" excludes tracking.** Tracking continuously: flat by ~hour 8 (from the one measured run, which started at 90%) | **Best-governed, worst-performing.** The only vendor declaring the new EU cybersecurity standard, no covert-listen feature *documented* in it (absence of documentation is not proof of absence in firmware), and a **physical SOS button** held 10 seconds. **It also carries a mandatory ~€10/month Garmin subscription** — about 600 lei a year, per watch — and if it lapses you lose calls, location and SOS. But owners in RO, PL, IE, UK and US all report calls failing, there is **no SIM to swap**, and it may use LTE-M — which needs specifically upgraded masts and would make it *worse* outside cities |
| — | Canyon Zefir KW-49 | 650 lei | — | — | **Blocked** | untested | eSIM-only, and no Romanian operator is proven to issue a wearable eSIM this watch can install |

---

## Marketing versus reality

| Claim | Reality |
|---|---|
| Garmin: "up to 2 days of battery" | Measures a watch that **is not tracking**. Its only continuous mode auto-ends every 30 minutes; running it, an owner went 90% → 32% in five hours |
| Carneo: "up to 4 days" | Carneo's own manual says **20–24 hours** at the 10-minute interval. Owners report **24–48 h**, with location on request rather than continuous |
| Carneo **ULTRA** / Garett / white-label: "Galileo", "multi-GNSS" | The chip cannot receive Galileo — confirmed in the driver code and firmware images. (The Platinum's chipset is unconfirmed, so it is excluded from this row) |
| Carneo: B20 on the spec sheet | The same band string appears byte-identical across **five concurrent models spanning four years**; the manual's PDF metadata still names the previous model |
| Carneo ULTRA: "conforms to EU directives — full declaration on our website" | **There is no declaration.** It does not exist, nine months after launch |
| Garett (on eMAG): "up to 3 days" | Garett's own spec sheet says **"up to 1 day"** — and its FAQ admits the app may default to 1-minute polling, so the spec figure only arrives once you turn tracking down |
| Garett: "EU servers" (Frankfurt) | The Frankfurt address is real AWS — but it is **SeTracker's shared node**, published for every brand on the platform, and the same service resolves to Alibaba Hong Kong by hostname |
| TCL: "1-second location refresh" | That's the fix rate, not the reporting rate. TCL's own manual and an owner both describe location as **on demand** |
| TCL: "dual-band L1+L5 GNSS" | The receiver is real and verified. But TCL confirms only **GPS** — Galileo, GLONASS and BeiDou are never stated anywhere |
| imoo Z7: "almost three days" | The one "3-day" lab figure is a pure extrapolation whose own tester calls it *"a rough picture"* and whose own advice is **"charge it every night"**. The other multi-day claims count overnight power-off hours in which the watch is **not trackable** — *"the automatic switching-off of the watch overnight extends the battery life significantly"* (owner). Awake, it runs ~3.6–6 %/hour |
| imoo Z7, across retailers | Sold as "3 days", "7 days", "168 hours" **and** "240 hours" — identical product |
| imoo Z3: "14 days of location history" | **imoo's own EU disclosure says history is "Only Z7 supported overseas."** The Z3 has none |
| Canyon: "EU-based servers" | Canyon's own app privacy policy says data may be transferred outside the EU |
| Canyon: "Safetrack AI" indoor positioning | Wi-Fi and Bluetooth appear **zero times** in the 98-page manual — and a video reviewer **found no Bluetooth to pair on his unit**. Indoors it uses cell towers at "100 m or more"; one owner's pin froze kilometres away and survived restarts |
| Angel Watch: bands including B20 | Three mutually contradictory vendor lists; its own support article says **B1/B3/B5/B7/B8 — no B20** |
| SaveFamily: "datos europeos" | Named in the August 2026 "39 brands, one server" research; data on Alibaba Cloud in China |
| Cheap watches: "autonomie 168 h" | With the full eMAG pools read (~825 texts): **nobody corroborates 168 h**, two buyers mock it by name, the first interval-qualified figure is **12 h at a 1-hour GPS poll**, and the best-quantified test is **7 h sensors-on across two units** |
| "monitorizare spion" sold as a feature | *"You can listen to what is happening around the watch without the wearer realising."* It's a server command — strangers demonstrably triggered it in 2020 and again in 2026. On one watch it is not even covert: **the "spy" call leaves a missed-call trace on the watch**. And on the Carneo, a verified owner reports that **while you listen, the watch stops working in the child's hand** |

---

## A warning about the reviews themselves

**A large share of the positive reviews in this market are paid for in product.**

Carneo runs campaigns through a free-product-for-review service. The campaign's own
configuration shows the client is Carneo's parent company, **10 testers, product free**, each
contractually required to deliver **four reviews** each — to the tester site, a price comparison
site, Carneo's own store *and* Instagram — with translated exports to two more countries. **So the
campaign's own terms produce 40 reviews from 10 opinions**; Carneo's marketing claims 50. One site
labels them as sponsored; the others do not.

The visible result: **five 5★ reviews for one model landing within six days** on Carneo's own
site, one saying outright *"we got the watch thanks to testuj.to."* On the Hungarian aggregator,
**10 of 11 reviews carry a "tested by" badge** and the pool contains **nothing below 4★**.

The one large pool outside the campaign — verified purchases at a Czech/Slovak electronics chain
— is where **every single 1–3★ review lives**, and it scores lowest of all.

Elsewhere: one Polish retailer carries **88 reviews, 100% five-star, all anonymous, with
complaint text still scored 5/5**. Amazon listings pool reviews from different models — one listing
titled for one model carries a review pool merged from three. On imoo's affiliate videos, **one
account wrote 19 of the 76 comments on one video and 8 on another** — bilingual, uniformly
promotional, at one point asserting "data storage in Germany" — a claim no imoo document supports. The full eMAG pools show
**same-day clusters of 9–14 five-star reviews, six duplicate-name double-posts, and a seller
gifting a reviewer**. At least three "test" articles are AI-generated with invented numbers, and
one widely-repeated spec claim was hallucinated by a search engine and is now quoted as fact.

**Practical rule: ignore star averages. Read the 1–3★ reviews, and check whether the reviewer
paid for the watch.**

---

## The security problem with the cheap ones — read this before saving money

Wingereich, WIRSEN, Techone, MiniWATCH, NEOVANCE, Evolve-x, Camix, MoreFIT, Tovstore, Abcros,
LAGENIO and most unbranded "4G kids GPS watch" listings are **the same Shenzhen hardware and the
same cloud**, sold under different names. **Carneo, Garett and SaveFamily are on that same
platform with European branding** — Garett Kids and Carneo Guard are both named by the
researchers below.

At a security conference in **August 2026**, researchers demonstrated live that with **only the
email address a parent registered with**, they could track a journalist across Manhattan using
the Wi-Fi network names his watch broadcast, photograph him twice with no indication on the
device, and switch on his microphone. One server, 39 brand names, around 10 million watches,
hosted on Alibaba Cloud in China. The operator said it was fixed; the researchers could not
confirm it.

This is the **fourth** public disclosure on this platform — 2017, 2019, 2020, and now 2026.
Separately, three CVEs were issued in 2026 against a sibling app on the same platform: hardcoded
encryption keys, MD5 session signatures, hash-only authentication.

One concrete illustration of the shared backend: an owner changed his password on a watch of one
brand and **the change propagated into a different brand's app**. Another reports *"sometimes I
see the location of some Chinese child in the app."*

**Where the recommended watches stand:** neither TCL nor imoo is among the 39 brands — each runs
its own platform, which is a genuine structural advantage and a large part of why they top the
table. That is not the same as clean. TCL's own privacy notice places its data controller **in
China** (with an EU entity in France). imoo names **no data jurisdiction anywhere**, and by its
own disclosure collects the name **and password of every Wi-Fi network the watch sees**, with no
opt-out short of not using the watch. The Garmin is the only product here declaring the new EU
cybersecurity standard — and the worst at the actual job.

That does not mean these watches don't work. After the full eMAG review pools were finally opened
(~825 texts read (of 835 ratings)), the Romanian picture is: **Wingereich has working owners on all three networks —
Digi, Orange (via YOXO) and Vodafone** — with all 149 of its review texts read (and a word-search over all 159 ratings). Hardware early-death rates, computed
against full pools rather than the handful previously readable: **1.9% (WIRSEN) to 2.5–6.6%
(Wingereich)**. And the first tracking-interval-qualified battery figure in the tier is **12 hours
at a one-hour GPS poll** — against listings advertising 168.

---

## Do not buy these

| Watch | Why |
|---|---|
| **Xplora — any model** | Its own supported-country list excludes Romania. Romanian buyers cannot create accounts |
| **Fitbit Ace LTE** | LTE is USA-only by design. No SIM slot. Cannot be activated in Europe |
| **Vodafone Neo** | Vodafone switched the service off in August 2024 |
| **Pingonaut** | Manufacturer insolvent since 2020 |
| **Spacetalk, TickTalk, Cosmo, Gabb, Bark, GizmoWatch, SyncUP** | Locked to non-EU carriers or regions |
| **Anio 6** | The most honest vendor in this market — and Romania is absent from its compatible-SIM list |
| **Angel Watch Series R** | **Its Android app has been removed from Google Play** (live Jan 2026, gone Aug 2026) — if your phone is Android, there is nothing to install. Support is unreachable across four countries and the 14-day return is fictional in practice; every SKU is North-America-coded and the OEM family ships a no-B20 US radio; the undisableable covert listen has already been used in a custody dispute — during which the watch **plays dead on the child's wrist** |
| **SaveFamily Iconic Plus 2** | The vendor's own figure is **8–12 h with GPS active** — it fails the school day on the manufacturer's own number |
| **Elari KidPhone 4GR** | Old stock, ~10 h battery, and the better-maintained of its two apps in the Romanian store is the Moscow build |
| **MyKi Watch 4 / 4 Lite** | Brand appears abandoned; expired website certificate, Orange incompatibility reports, refurbished stock only |
| **Anything advertised as 2G, or "2G/3G fallback"** | In Romania that fallback no longer exists. Still openly on sale — one 181-lei watch on eMAG states in its own listing that it does not work on Digi |
| **Any watch whose bands you cannot verify** | Especially in the cheap tier, where B20 is a factory option |

---

## Before you pay — the ten-minute test

1. Install the companion app **from the Romanian Play store and create an account before you buy the
   watch.** Carneo and Garett register by email, so a country refusal is structurally impossible
   there. **imoo registers with your phone number and an SMS code — confirm that code actually
   arrives on a +40 number.** This is the single test that prevents the most expensive failure in
   this category, and it is the exact step the only Romanian imoo report on record failed.
2. Buy where returns are real. **eMAG's own listings give 30 days**; marketplace sellers and EU
   distance selling give 14. Check who the seller actually is — several "eMAG" listings for these
   watches are third-party.
3. **Compare against Amazon.de before ordering.** The imoo Z3 is 664 lei there and 1,523 lei on
   eMAG. That gap is not unusual.

Then, inside the return window:

4. Make an outgoing **and** an incoming call on 4G. **Inbound calling is the single most commonly
   broken feature in this whole category.**
5. Check the location **inside the school building**, not in the garden. Then walk the child out
   of the geofence and see whether the alert fires at all, and how late.
6. Dig through the app's settings for an **AGPS or location-server option**. If it offers Google
   rather than an Asian default, switch it. On some watches that is the difference between metres
   and kilometres.
7. Check what the battery reads **at the end of a school day, not the next morning** — with
   tracking set to the interval you actually intend to use.
8. Have the child trigger the **SOS**, unprompted, and see whether they can. On the imoo Z3 **and
   X10** it is a **gesture drawn on the screen** — imoo's own copy: *"One quick 'C' on the screen"* —
   and a Polish owner reports the SOS is hard for a child to trigger. **On the X10 it is also
   off by default** — no SOS exists until the parent enables it in the app, so check the toggle
   first. This is the one feature the watch exists for. Test it.

---

## How this was made, and what it doesn't cover

Five parallel discovery sweeps, a detailed document per candidate, a dedicated battery
investigation, chip-level analysis of the GNSS hardware, five adversarial audits of these documents
themselves, and deep evidence passes on **every scored entry except the Garmin and the newly un-gated LAMAX** — across retailers,
manufacturers, regulatory filings, security research, app-store review pools and parent communities
in ten languages, including the full eMAG review pools opened through a logged-in session. Sources
are linked in every document.

**One warning about the method.** Every time a lightly-researched watch here was examined
properly, its score went down or stayed flat — never up — because reading owner reports only ever
uncovers problems the marketing omitted. The last such prediction resolved on 2026-08-19: the Angel
Watch, long the only unswept row, got its first deep pass and dropped from the table into Do-not-buy.
The newly un-gated LAMAX now holds the "barely checked" seat — read its row accordingly. That is why capability and confidence are
two separate columns instead of one ranking.

**Known gaps, stated honestly.** No Romanian owner report exists for the TCL MT48; for imoo the
only Romanian reports are a registration failure and one 1★ review. Several manufacturers publish
no band or battery data at all; those are marked UNKNOWN in the detailed documents rather than
guessed. Almost no owner anywhere states the tracking interval alongside a battery figure, so
battery numbers are not strictly comparable. Amazon's deep review pages are login-walled on every
locale, so ~90% of the imoo review pools (~1,150 model-relevant ratings; Amazon has since re-cut the old merged listing into per-model pools) remain unread behind Amazon's sign-in wall — the profile used was signed out; eMAG.bg/.hu and Heureka.cz
were captcha-walled until 2026-08-19 and are now swept (they held almost nothing). Where a venue could not be
read, its silence is not treated as evidence of absence. Prices and stock were correct in
August 2026.

One question outside this document's scope: **whether the school allows smartwatches in class at
all**. Most of these have a school mode precisely because many schools don't — ask before buying.

**No affiliate links, no sponsorship, nothing sold.**
