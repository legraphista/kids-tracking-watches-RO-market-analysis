# BATTERY — how much charge is left at hour 12?

Re-investigated 2026-08-19. Companion to [`RANKING.md`](RANKING.md); supersedes the "Battery in real
use" sections of the per-watch documents in [`watches/`](watches/) where the two disagree.

---

## The metric changed, and it changes the answer

The old question was *"does it survive a school day?"* — a nine-and-a-half-hour bar that almost
everything here clears on paper. The new question is:

> **At 18:00, after eleven hours off the charger with tracking active, how much charge is left?**
> *(Window note, added 2026-08-19: this document's title and table say "hour 12", this definition
> says eleven hours, and the per-watch docs use a 9.5 h school day. The inferences below mix the
> first two — treat every hour-12 figure as ±1 h. The ranking order is insensitive to the choice.)*

This matters because the moment the watch earns its price is the moment the child is *not* at the
pickup point — and that moment falls at the end of the discharge curve, not the start. A watch that
reaches hour 10 and dies is worthless in precisely the scenario it was bought for. A watch at 8% is
not much better: it will not survive a 40-minute search, a video call and a walk home.

So the reserve at hour 12 is the number. Everything below is an attempt to find it, and the honest
headline is this:

> **Not one vendor and not one reviewer in this entire market publishes a discharge curve, an
> intermediate percentage, or an hour-12 reserve. For every watch here, the hour-12 figure is
> reached by inference, not by measurement.**

### Three rules applied throughout

1. **An hours figure without a stated tracking interval is nearly worthless.** "Two days" at a
   1-hour polling interval and "two days" at a 1-minute interval are not the same claim about the
   same product; they are claims about two different power states. Almost every figure in this
   market omits the interval. Each one is flagged.
2. **Overnight shutdown inflates everything.** Several vendors' multi-day figures include hours in
   which the watch is powered off or network-disconnected — i.e. hours in which it is *not
   trackable*. Every case is flagged.
3. **Repeated sentences are one claim.** Where identical wording appears on several sites it is
   counted once and named as such.

---

## The table

Claimed and observed are kept in separate columns and are never merged. "Interval" is the tracking /
location-update interval the figure assumes — the single most-omitted fact in this category.

| Watch | Vendor's claim (attributed, not adopted) | Best observed figure | Interval behind the observed figure | Overnight by default | Reserve at hour 12 |
|---|---|---|---|---|---|
| **TCL MOVETIME MT48** | TCL: "up to 2.5 days of use and 7 days of standby"; 900 mAh; lab-test disclaimer | Two Swedish reviewers: "lasts more than a day" / "a couple of days at moderate use"; heavy days needed a nightly charge | **UNSTATED by every source.** TCL separately advertises a 1-second location refresh and never says whether the 2.5-day figure assumes it | **UNKNOWN** — no scheduled power-off documented, none observed | **UNKNOWN, probably comfortable.** Largest cell in the field; two independent reviewers clear a day. Nobody has measured it under continuous tracking |
| **Garmin Bounce 2** | Garmin: "up to 2 days between charges"; no mAh published | 24–36 h typical — **but with LiveTrack on: 90% → ~32% in 5 h** | Default is **not continuous**: location is on-demand/check-in. **LiveTrack is the continuous mode and auto-ends after 30 min** | Stays awake in sleep mode: 8–10%/night normally; 30–50% on firmware 16.38 (fixed in 17.23) | **NONE, if you actually track continuously.** At the one observed LiveTrack rate it is flat at ~hour 8.5 |
| **imoo Watch Phone X10** | **Vendor runtime found 2026-08-19**: imoo's own Amazon listing copy says "1 à 2 jours" (absent from the 96-page manual and imoo.com, hence the earlier "none anywhere"). Only a brand-wide 2020 FAQ ("one day" normal use). 740 mAh rated / 760 typical | **~1–2 days** across nine dated reviews; four German reviewers converge on "about one day". Hard figure: **10% per 10 min of video call** | **UNSTATED by all nine**, and no evidence a user-settable interval exists at all | Timed on/off is **user-configured**, no documented factory default. In Class Mode **GPS keeps running** | **Probably adequate, unproven.** Worst credible observation is one intensive day *including* GPS tracking and video calls. Operating floor **0 °C** |
| **imoo Watch Phone Z7** | Nothing on the spec sheet or in the manual — but imoo's **own FAQ says "one day" normal use / 3 days standby**, and imoo's **own Amazon listing says "1 to 2 days"** | Notebookcheck: **12% left after 24 h** — light day, one short call, a few photos. One of two lab tests of this watch (they disagree by 2.6× — see §4) | **UNSTATED — and there is no user-selectable interval to state.** Live location is on-demand; the trail mode (2 s sampling) is off by default | **Powers itself off overnight on a factory-set schedule** — fully down, untrackable and unreachable. **Can be disabled** | **~30–35%, inferred** from 88 points over ~15–16 awake hours. Not a tracking figure |
| **Carneo GuardKid+ 4G Platinum** | carneo.eu: "4 days"/"96 h". Carneo's **own Platinum manual**: 24–72 h at a 10-min interval. Carneo's **ULTRA manual**: **20–24 h** at the same interval | itmix.cz: **~30 h** | **10 minutes** — the only observed figure in this document that states its interval, and 10 min is the tightest the app offers | Opt-in 22:00–06:00 network disconnect (data off, untrackable). Default state undocumented; the 30 h test had it **switched on** | **~50%, by inference from Carneo's own ULTRA manual (20–24 h at 10 min).** No measured intermediate percentage exists |
| **Canyon Sunny KW-48** | Canyon manual: "up to 2 days" **at a 10-min interval**, stable 4G, above-average brightness; 750 mAh | PC-Tidningen (SE): **"almost two days"** — the only independent test that exists, in any language | **UNSTATED**, and it lands exactly on the vendor claim, suggesting the default 10-min mode was never changed | **Possibly stops uploading location whenever the screen sleeps** — documented for the sibling KW-34, inferred here. No scheduled power-off found | **UNKNOWN.** Smallest cell here; tightest mode (1 min) has no figure from anyone; a sibling user reports 8 h with tracking *off* |

---

## 1. TCL MOVETIME MT48 — the least-evidenced thing about the best-ranked watch

**This was the single largest gap and it is now partly closed: there are two independent
observations, not one. Both are qualitative. Neither states a tracking interval.**

### The vendor claim, attributed

TCL's own product page states a **"Durable 900mAh battery"** and **"up to 2.5 days of use and 7 days
of standby on a single charge"**, with footnote 4: *"Battery data based on results from internal lab
tests. Actual battery life varies by personal usage."*
— [tcl.com/global/en/watches/mt48](https://www.tcl.com/global/en/watches/mt48), accessed 2026-08-19.
eMAG restates the same figure as 60 h use / 168 h standby. That is **one claim restated, not two**.

**The internal contradiction nobody has resolved.** The *same* TCL page also states: *"The watch
refreshes your child's location **every second** for greater confidence and peace of mind."* A
900 mAh cell driving an LTE modem and a dual-band GNSS receiver at a 1 Hz fix rate for 60 hours is
not credible. Either the 1-second refresh applies only inside a short live-tracking session (as
Garmin's LiveTrack does), or the 2.5-day figure assumes it is off. **TCL does not say which, and no
reviewer has asked.** This is the central unanswered question about the MT48's battery, and it is
exactly the question the hour-12 metric turns on.

### Observed — three publications, two independent sources, all qualitative

| Source | Country | Date | Observation | Interval stated? |
|---|---|---|---|---|
| **M3.se**, Ida Blix — [group test](https://www.m3.se/article/2496863/gps-klocka-barn-test.html) | SE | 2026-05-02 | Under *Fördelar*: **"Lång batteritid – räcker mer än en dag"** ("long battery life — lasts more than a day") | No |
| **M3.se**, Ida Blix — [dedicated test](https://www.m3.se/article/3126447/tcl-movetime-mt48.html) | SE | 2026-05-01 | Heavy-use days needed charging **after one day**; lighter days reached **about two**. Summary: *"batteritiden håller vad den lovar"* | No |
| **Ljud & Bild**, Ola Larsson — [TEST](https://www.ljudochbild.se/test/mobil/tcl-movetime-mt48) | SE | undated on page | **"När det gäller batteritiden så räcker batteriet ett par dagar vid måttlig användning"** ("as for battery life, the battery lasts a couple of days at moderate use"); recommends nightly charging. Score 4/5 | No |

**How independent are these?** *(Caveat added 2026-08-19: this test checks byline and wording only — the exact test that would have passed the itmix/guidelee republication had the wording differed. Common ownership, syndication or a shared press sample were not checked, and Ljud & Bild's own page is recorded elsewhere in this file as blocking retrieval, so the retrieval route for its quote is undocumented.)* M3 and Ljud & Bild are separate titles with separate named authors and
materially different wording, so this is **two independent observations** — an improvement on the
previous record of one. The two M3 articles share an author and count as **one source with two
publications**. All three are qualitative, none is a measurement, and none states an interval, a
call volume or the conditions.

The most useful line in the set is M3's dedicated test, because it is the only one that separates
profiles: **heavy use = charge after one day; light use = about two.** That is the first hint that
the MT48's 2.5-day claim collapses toward one day under load, which is the normal shape for this
category.

### The sibling-model datapoint that should worry you

The only rigorous, long-duration, hands-on French test of a TCL kids' watch is of the **MT46**, not
the MT48 — and it is bad:

> **"Lors de nos tests, celle-ci n'a jamais pu dépasser les 18 heures."**
> ("In our tests, it was never able to exceed 18 hours.")
> — [Futura-Sciences](https://www.futura-sciences.com/tech/actualites/montre-connectee-test-bouygues-telecom-kids-watch-tcl-smartwatch-enfant-rassure-parents-126747/),
> Sylvain Biget, 2025-10-26. Protocol: several weeks of daily wear by a 10-year-old. The reviewer's
> conclusion was that the watch consequently sat uncharged in the child's bedroom.

**This is a different model and must not be scored as MT48 evidence.** It is recorded because it is
the same brand, the same product family and the same class of "up to 2.5 days" marketing, tested
properly by a mainstream outlet over weeks, and it landed at **18 hours** — i.e. a watch of this
family unplugged at 07:00 was empty around 01:00, and would have had *some* reserve at hour 12 but
nothing like a day. It is a warning about the gap between TCL's family-watch marketing and measured
reality, not a verdict on the MT48.

### One figure to discard

[lheurepassion.com](https://www.lheurepassion.com/blog/tcl/avis-tcl-movetime-mt48.html) (David
Deteve, 2026-07-21) states **"36 à 40 heures avec un usage soutenu."** On inspection the page
describes no test protocol, no duration, no child and no dates; it cites *"les retours"* (other
people's feedback) and carries Amazon affiliate links. **It is aggregated affiliate content, not a
measurement.** The same site's comparison page (Galien Viraud, 2025-10-02) merely restates
"≈ 2–2,5 jours" from the spec sheet. Neither is counted.

### Weak signal, cold, overnight, interval

- **Weak/marginal LTE cost: UNKNOWN.** No source addresses it for this model.
- **Cold-weather behaviour: UNKNOWN.** No source addresses it.
- **Overnight behaviour: UNKNOWN.** No scheduled power-off or night disconnect is documented on
  TCL's MT48 support pages, and no reviewer mentions one. Unlike the imoo Z7, there is **no evidence
  that the MT48's multi-day figure is built on an overnight shutdown** — but there is also no
  evidence that it is not.
- **App tracking interval: UNKNOWN.** TCL's MT48 support pages carry six FAQ topics, none about
  battery, power saving or location frequency, and **no downloadable MT48 manual is published
  there**. What intervals the TCL Connect app offers, what its default is, and whether a tighter
  setting is usable could not be established from any source.

### Verdict on the hour-12 question

**UNKNOWN, but the odds are the best in this document.** The MT48 has the largest cell here
(900 mAh), and two independent reviewers put it past a full day, one of them explicitly at "a couple
of days" under moderate use. Against that: the interval behind every observation is unstated, TCL
will not reconcile "1-second refresh" with "2.5 days", there is **no Romanian, no cold-weather and
no weak-signal observation**, the app's interval options are undocumented, and the brand's own MT46
measured 18 h under a proper multi-week test. The defensible position is that the MT48 is
*credibly* a comfortable-reserve watch at hour 12 and that **nobody has demonstrated it.**

---

## 2. Garmin Bounce 2 — the reserve collapses precisely when you turn tracking on

**This is the most important finding in the document, and it inverts the Bounce 2's battery score.**

### The claim, attributed

Garmin: *"Get up to 2 days of battery life between charges"* (ro-RO: *"BUCURĂ-TE DE O AUTONOMIE A
BATERIEI DE PÂNĂ LA 2 ZILE ÎNTRE ÎNCĂRCĂRI"*), with the manual's caveat that *"the actual battery
life depends on the features enabled on your watch, such as notifications, GPS, and music."* The
Bounce 2 **Specifications** page lists only *"Rechargeable, built-in lithium-ion battery"* —
**Garmin publishes no mAh figure.** M3.se's comparison table lists **226 mAh**; that is a
third-party spec listing, **not confirmed by Garmin**, and if correct it is roughly a quarter of the
MT48's cell and by far the smallest here.

Garmin operates support articles titled *"Bounce 2 Battery Life Expectations"* and *"Bounce Battery
Life Assumptions"*, which should contain exactly the usage assumptions this document needs. **Both
render client-side and could not be retrieved.** Their contents are UNKNOWN — a notable gap, since
they are the only place a vendor in this market appears to publish its assumptions at all.

**The manual's own battery advice is thin and tells you what Garmin thinks matters:** *"Reduce the
display brightness and timeout"*, *"Turn off wrist gestures"*, *"Reduce the vibration level."*
Nothing about location frequency.

### The structural point: the Bounce 2 does not track continuously by default

This is not a battery finding, it is a *product* finding that determines the battery finding. Per
Garmin's own manual:

- **Location Tracking** describes child-initiated check-ins, *"the last reported location of the
  watch and the time of the report"*, a manual **Refresh**, and seven days of history. **No
  automatic update interval is documented anywhere in the manual.**
- **LiveTrack** is the real-time mode: it *"lets you track your child's current location, recently
  visited locations, and the path of their recent travels in real time"* — and *"the LiveTrack
  session ends automatically after 30 minutes unless you choose to extend it."*

So the brief's requirement — *tracking active throughout, 07:00 to 18:00* — is **not a supported
default mode on this watch.** To get it you run LiveTrack and keep re-extending it every half hour.
Garmin's "2 days" is a figure for a watch in the on-demand state, and every reviewer's "day and a
half" is measured in that state too.

### What continuous tracking actually costs

| Source | Date | Conditions | Result |
|---|---|---|---|
| **Garmin Forums, user "EAS"** — [Battery Life thread](https://forums.garmin.com/sports-fitness/healthandwellness/f/bounce-2/423799/battery-life/1981471) | ~Oct 2025 | LTE plan active, **LiveTrack on**, school with **no Wi-Fi** | **90% at 07:00 → ~32% at 12:00.** Five hours, 58 percentage points |
| same user, later edit | ~Dec 2025 | **LiveTrack disabled** | *"no further problems"*; end of a full school day at **82%**, described as heavy use |
| **Garmin-Tracy** (Garmin staff), same thread | ~Oct 2025 | — | *"if the watch is continually searching for a LTE connection and can't find one, it will consume the battery quickly"*; advised checking the LTE signal bars **at the school** |
| **Garmin Forums, "6800517"** — [sleep-mode thread](https://forums.garmin.com/sports-fitness/healthandwellness/f/bounce-2/435204/bounce-2-battery-drain-during-sleep-mode/2029567) | ~2026-05 | firmware 16.38 | **20% during the day, 50% overnight** |
| **Garmin Forums, "Talonne"**, same thread | ~2026-05 | 20:00–06:30 | 100%→86% across the day (**14%**), then **86%→45% overnight** |
| **Garmin Forums, "KS"**, same thread | ~2026-05 | 21:00–07:00 sleep mode | **30–40% overnight** on 16.38 vs **8–10%** normally; resolved by 17.23 |
| **TechRadar**, Paul Hatton | 2026-04 | two months with the reviewer's son | *"The advertised two-day battery life is definitely the maximum, with real-world experience being just over a day."* |
| **Front Pack Sports**, Scott Baldwin — [review](https://frontpacksports.substack.com/p/review-the-garmin-bounce-2) | 2025-11-04 | LTE on, voice notes, **location pings running** | *"more like a day and a half, tops."* Note his profile: the watch lived **at home between outings** — *"for older kids who wear it all day, every day, the charging routine could get annoying fast"* |
| **the5krunner** | 2025-09-28, upd. 2026-08-10 | heavy calling/messaging | *"you get less than one day of battery life even with a new battery"* |

**Two figures to treat with care.**
The garminrumors community wiki lists *"10–15 hours heavy LTE/calling"* and now attributes it to T3
and TechRadar. **Neither of those outlets published that figure** — TechRadar's own words are "just
over a day". Treat the 10–15 h as **unverified wiki content with a broken citation**, not as a
measurement. Separately, [watchbook.pl](https://watchbook.pl/smartwatche/testy-i-recenzje/garmin-bounce-2-test-zegarka-dla-dzieci-od-garmina/yhwe_necs)
(2025-09-20) claims *"3–5 dni przy umiarkowanym korzystaniu"* and describes a battery-saving mode
that reduces location frequency. It is dated within days of launch, describes a power mode the
manual does not document, and contradicts every hands-on source. **Discarded as generated content.**

### Doing the arithmetic the brief asks for

EAS's LiveTrack figure is **11.6 percentage points per hour**. Extrapolated across the target
07:00–18:00 window that is 128 points — i.e. **the watch is flat at roughly hour 8 and a half from a full charge (hour ~7.8 from the observed 90% start), with
no reserve at hour 12 at all.** It is a single datapoint, from one user, in one school, and it is
confounded: the school had no Wi-Fi, so the modem was hunting as well as the tracker running. But it
is the *only* published observation of this watch doing the exact thing this brief requires, and it
is catastrophic.

The same user's counter-observation is just as informative: **LiveTrack off, 82% left at the end of
a school day.** Same watch, same child, same school, no other settings changed. The gap between 82%
and 32% is the price of continuous tracking on this device, and it is the whole argument.

### Weak LTE — the Romanian case

Garmin shipped **software 5.10 on 2025-11-19** whose changelog states the update will *"improve the
battery life of the Bounce 2 smartwatch when the user is in an area with poor LTE"*
([Notebookcheck](https://www.notebookcheck.net/Garmin-improves-battery-life-of-LTE-smartwatch-in-new-update.1166733.0.html)).
**Garmin publishes no quantification of the saving, so the cost of weak LTE in percentage terms
remains UNKNOWN.** What can be said: a vendor does not ship a targeted fix for a condition that
costs nothing, and Garmin's own support staff describe the mechanism in the forum thread above.

Romania is, on this project's prior evidence, a poor-LTE area for this watch. There is **no SIM
slot, so there is no operator to switch to**, and the mitigation Garmin's community offers — *"add
your known Wi-Fi networks to reduce LTE usage indoors"* — fails at a school with no Wi-Fi, which is
precisely the case EAS reported. A Polish owner on Ceneo captures the compound failure: *"bateria
2-3 dni więc super ale najważniejsza funkcja czyli połączenia i lokalizacja działają fatalnie
wieczny brak zasięgu i niekończące się odświeżanie lokalizacji"* — battery fine, but endless loss of
signal and endless location refreshing.

### Overnight

The Bounce 2 does **not** power off overnight. It runs a sleep mode between bed and wake times with
LTE still up, costing **8–10% a night** when healthy. Firmware **16.38** broke this and pushed it to
**30–50%**; **17.23** fixed it. Two things follow. First, the Bounce 2's multi-day figures are *not*
inflated by an overnight shutdown, unlike the imoo Z7's — to its credit. Second, this watch has a
demonstrated history of **a routine firmware update silently destroying a third to a half of its
overnight charge**, which is a reserve risk of a different kind: you can lose the hour-12 margin
without changing anything you do.

### Cold weather

**UNKNOWN for this model.** The manual gives an operating range of *"-20º to 60ºC"* and a **USB
charging range of "0º to 45ºC"** — the charging floor is the practical one for a watch that comes in
off a Romanian winter commute and goes straight onto a charger. No Bounce 2 cold-weather battery
report was found in any language.

### Verdict on the hour-12 question

**No useful reserve, if the watch is doing what this project requires.** As an on-demand check-in
device it comfortably clears a day and a half and holds a good reserve at hour 12 — EAS's 82% is the
evidence. As a *continuously tracked* device it is the worst performer here: smallest cell
(226 mAh, third-party figure), no continuous tracking mode that stays on without manual
re-extension, and the one published measurement of continuous tracking shows it empty before the
school day ends. **Garmin's "2 days" and this project's requirement are not compatible.**

---

## 3. imoo Watch Phone X10 — nine reviews now, still not one tracking interval

**The gap is now confirmed unclosable from public sources. The official X10 manual was located and
it documents no runtime, no charge time, no tracking interval and no scheduled power-off. What did
change: three more reviews, the first hard percentage measurement, an imoo cold-weather statement,
and the collapse of the 3-day figure — the outlet published a second test contradicting its first; nothing was retracted.**

### The claim — there isn't one, and imoo's own manual confirms it

The **official imoo X10 manual** (v1.0, dated **2025-11-12**, 96 pp, model W2432AO,
[PDF](https://cdn.shopify.com/s/files/1/0467/6216/4375/files/Mannual-English-X10-2025.11.12.pdf?v=1762913209))
states:

> *"Lithium Polymer Battery Pack 3.87V **740mAh (Rated Capacity) 760mAh (Typical Capacity)**"*
> *"Charge Input: DC 5V 2A"* · *"**Working Temperature: 0~35** [°C]"*

The terms *battery life*, *standby*, *power sav\**, *schedul\**, *interval* and *real-time* return
**zero hits in the entire manual.** That settles the 740/750/760 mAh confusion (one cell, rated vs
typical) and it settles the documentation question: **imoo publishes no runtime for this watch
anywhere, including in its own manual.**

Re-verified on 2026-08-19, [imoo.com/eu/products/x10](https://www.imoo.com/eu/products/x10) offers
only **"740mAh durable battery"**, **"Ultra-long battery life"** and the disclaimer *"The actual
battery life of the X10 may vary slightly depending on the usage environment."*

For contrast, imoo *does* publish "approximately 1–2 days" for the cheaper Z1. Declining to publish
one for the flagship, on pages that otherwise list rated capacity, is a decision.

**The closest thing to an imoo runtime statement** is a brand-wide support-blog article — dated
**2020-09**, not X10-specific, and therefore weak: *"When fully charged, the watch can be used
normally for **one day**. In the case of not being used, the watch can remain on standby for about
3 days,"* with the caveat *"The data was obtained from laboratory tests."* Attributed, not adopted.

### Observed — nine dated reviews, and still no interval

| Source | Country | Date | Observed | Interval? |
|---|---|---|---|---|
| connect.de (Andreas Seeger) | DE | 2025-11-14 | **~1 day** intensive, 1.5–2 days normal — explicitly includes **GPS tracking plus several short video calls** in the one-day figure | No |
| beyondpixels.de (Mandi) | DE | 2025-10-09 | *"Der Akku hält etwa **einen Tag** bei normaler Nutzung durch"* | No |
| **smartzone.de (Manuel)** | DE | 2026-07-13 | *"Realistischer sind eher **2 Tage**"* — and the one hard measurement in this section (below) | No |
| netzwelt.de (Birte Keller) | DE | 2026-08-01 | **~2 days**; datasheet "2 Tage" | No |
| trendblog.euronics.de (Jürgen Vielmeier) | DE | 2025-11-27 | *"gut über **zwei Tage**"* at regular use | No |
| dadslife.de (Kurt Vierthaler), child aged 9 | DE | 2025-11-24 | 1–2 days to several days | No |
| familie.de (Charoline Bauer) | DE | 2026-06-29 | "several days", qualified: the child likes to call, so it needs charging more often | No |
| Tech Edition (Vincent Wee) | SG | 2025-07-15 | *"a full day"* of moderate usage | No |
| inside-digital.de (article 2 of 2: Hayo Lücke — the Wellendorf ~3-day article is still live separately) | DE | 2026-07-29 | **~1 day** — see correction below | No |

**A correction to this project's earlier record.** inside-digital.de was previously logged as
Matthias Wellendorf, 2025-11-20, observing **~3 days**. An earlier pass recorded that "the page
at the same URL now carries a new byline and date and says the opposite" — **that mechanism claim
was wrong (corrected 2026-08-19, X10 evidence sweep)**. Both articles were re-read in the browser
on 2026-08-19: Wellendorf's ~3-day test is **still live, unchanged, at its original URL**
(*"bei normaler Nutzung einen Betrieb von etwa drei Tagen ermöglicht"*), and the ~1-day verdict
is a **second, separate article** — Hayo Lücke, 29 Jul 2026,
`inside-digital.de/tests/imoo-watch-phone-x10-test-das-perfekte-geschenk-zum-schulstart` — which
quotes the manufacturer claim *"bis zu drei Tage Akkulaufzeit bei Verwendung in WLAN-Netzen"* and
rebuts it: *"das ist aber zu optimistisch ausgelegt. **Du solltest eher von rund einem Tag
ausgehen.**"* So the 3-day figure was **not retracted — the outlet contradicted itself**, and the
~3-day row must be weighed as one of two same-outlet tests that disagree by 3×. The substantive
conclusion stands: the credible observed range is not 24–72 h but **roughly 24–48 h**, and *four*
separate German reviewers land on "about one day" under real use.

**One claim, not two.** The "3 days" figure appears in both inside-digital (*"bis zu drei Tage …
WLAN-Netzen"*) and smartzone (*"Hersteller verspricht 3 Tage Laufzeit, die nur bei überwiegender
Nutzung zu Hause im heimischen WLAN zu erreichen sind"*). Same underlying imoo German press claim —
**one claim** — and **both reviewers independently reject it.** Note what the claim is conditioned
on: *use predominantly at home on Wi-Fi*, i.e. the modem mostly idle. That is the opposite of a
school day.

Similarly, familie.de's *"bis zu 95 Std. Laufzeit"* (≈4 days) matches HardwareZone's PR-derived *"up
to four days on a full charge and while in standby mode"* — so **the 95 h is almost certainly a
standby figure**, not active runtime. Not counted as an active claim.

### The one hard measurement

> *"Der größte Akkufresser sind Videoanrufe. **Nach 10 Minuten sank der Akkustand um 10%**."*
> ("The biggest battery hog is video calls. After 10 minutes the battery level dropped by 10%.")
> — [smartzone.de](https://smartzone.de/imoo-x10-smartwatch-test/), Manuel, 2026-07-13

**Approximately 1 percentage point per minute of video call.** This is the only quantified
consumption figure for the X10 in any language, and it is the number to plan around: a single
ten-minute video call at pickup time costs a tenth of the battery. connect.de's qualitative version
agrees — *"Videochats mit zwei aktiven Kameras über LTE … saugen den Akku sehr schnell leer."*

Two marketplace SEO pages — an AliExpress "wiki" claiming *"14 hours of active GPS usage per charge,
which aligns with manufacturer claims"* and an Alibaba page claiming "up to 72 hours" — are
discarded. The first is self-refuting: **there is no manufacturer claim to align with.**

### Interval — no evidence such a setting even exists

**UNKNOWN, and the shape of the evidence suggests there may be nothing to set.** The word *interval*
does not appear in the X10 manual. No product page mentions one. imoo's only locating support
article states *"It normally takes 4-7 seconds to locate"* — that is **time-to-fix on a requested
locate, not a polling cadence** — which points to a **pull-based** model: the parent taps, the watch
fixes. imoo's EU Data Act disclosure describes an hourly background report, but that passage is
written against the **Z7's** Historical Trajectory, which imoo states is *"Only Z7 … supported
overseas"*; **whether the X10 shares it is not documented.**

The only user-side hints are complaints, from the imoo parent app's store reviews — and these carry
a **severe attribution caveat**: the app serves Z1/Z3/Z5/Z6/Z7/X10 and none of the reviews names the
X10.

- DE, 2026-06-21, 4★: *"Erst nach **5 min** Aktualisierung zeigt es mir dann an, dass sie angekommen
  ist."*
- DE, 2025-10-05, 3★: *"Aktuell hat sie **mehr als eine Stunde Verzögerung**"* (an AirTag in the same
  pocket showed the school correctly).
- Google Play, Renata L., 2026-05-07: location *"refreshing quite rarely"*.

**If the update cadence really is somewhere between 5 minutes and an hour and not user-settable,
then every runtime figure above was measured on a watch that was barely tracking** — and the
aggressive-polling failure mode that defines this category is untested on the X10 because the
setting to trigger it may not exist.

### Overnight

**UNKNOWN for the X10, but the picture is better than the Z7's.** imoo's brand-wide support article
on **timed on/off** describes it as **user-configured in the app** — *"After setting timed on/off,
click 'Back' on the APP setting interface to save it"* — and **states no factory default.** The X10
manual has no scheduled-power-off section at all. beyondpixels lists a *Klassenmodus*, a
*Schlafmodus* and a *Stromsparmodus* among its features.

One concrete point in the right direction: in **Class Mode**, *"während **GPS und
Gesundheitsüberwachung im Hintergrund weiterlaufen**"* — calls, messages and camera are disabled but
**GPS keeps running** (beyondpixels.de, 2025-10-09). So the X10's school-hours power saving does not
come at the cost of tracking, which is exactly the right trade for this brief.

**Still to verify on the unit:** whether timed on/off ships enabled. The Z7 demonstrably does ship
that way, so it cannot be assumed the X10 does not.

### Weak signal

Qualitative only, and it is **imoo's own statement**: *"frequent use or **use in weak signal areas
will increase power consumption**. It is recommended to charge once a day for smooth use."*
(imoo support blog). **No quantified penalty exists.** All eight German observations are on German
networks; a Romanian concrete school where B20 is the only sub-1 GHz layer is a harder radio
environment than any of them.

### Cold weather — the best-documented case in this whole document

The X10 manual specifies **"Working Temperature: 0~35 °C"**. A Romanian winter commute is routinely
below that, i.e. **outside imoo's stated operating range.**

And imoo documents a charging consequence explicitly:

> *"when the temperature drops below **10°C**, the charging current of the watch will be limited to
> about **100 mA** so it will **not enter Quick Charge Mode**, and the charging time of the watch
> will also be extended to **6-7 hours** … in low temperature environments without heating, it is
> advisable to charge it all night and use it during the day."*

**This is the only cold-weather battery statement any vendor in this document makes**, and it is
practical: a cold watch put on the charger after school will not be usefully recharged before the
evening. Charge it overnight in a warm room.

### Verdict on the hour-12 question

**Probably adequate, still unproven, and the evidence got slightly worse rather than better.** With
the 3-day outlier contradicted by its own outlet's second test, four German reviewers now converge on "about one day" of real use, and
the worst credible observation — connect.de's one intensive day *with GPS tracking and video calls
explicitly included* — still clears a 12-hour window. But the interval behind every figure is
unstated and may not be settable, video calling costs ~1%/minute, imoo confirms weak signal
increases drain without quantifying it, and the watch's stated operating floor is **0 °C**.

**The most useful practical finding:** netzwelt reports the parent app displays *"die
voraussichtliche Akkulaufzeit sowie den Stromverbrauch"* — a predicted-remaining-runtime and
power-consumption readout — plus a power-saving mode the child cannot switch off. **That readout is
the only instrument in this entire market that would answer the hour-12 question directly**, and it
is available to any owner in week one.

---

## 4. imoo Watch Phone Z7 — two lab tests that disagree by 2.6×, and the first counts hours the watch spent switched off

> **CONTAMINATION NOTICE + CORRECTIONS, added 2026-08-19 after a dedicated Z7 battery sweep.**
>
> **1. Strike the Amazon.co.uk datapoint.** The review cited in this section as a Z7 owner reporting
> the watch "typically lasting through a school day" **is a Z3 review** — Kevin D, `Colour Name:
> Z3-Blue`, opening *"I bought two **Z3** Smart Watches for my daughters."* **Amazon.co.uk ASIN
> B0CXSSLDW5 is titled "imoo Z7" but shares its 313-rating pool with the Z3**; six of its eight top
> UK reviews are Z3-tagged. The amazon.de and amazon.es listings are clean and per-review
> model-tagged.
>
> **2. The support FAQ is not a Z7 source.** This section cites it as one of two vendor runtime
> figures. It is dated **2020-09-09** in its own structured data, names no model, and predates the
> Z7 by three and a half years. The genuine vendor figure is *"1 to 2 days"*, published by imoo on
> listings where imoo is the seller, in three languages — but the identical string appears in imoo's
> Z1 and Z3 listings, so it is a house number, not a measurement. `battery_claimed_h` is now **24–48**.
>
> **3. The overnight-shutdown mechanism is now owner-corroborated** — two independent owners state
> the multi-day figure and the power-off together, e.g. *"das automatische Ausschalten der Uhr über
> Nacht verlängert die Akkulaufzeit deutlich"*. **But Notebookcheck never states whether the shutdown
> ran during its own 24 h test**, so applying it to that test remains an inference, as this document
> originally said.
>
> **4. A school-day-shaped figure now exists.** Breogán (ES, 6 Jan 2025, 5★ verified, `Style Name:
> Z7`): *"Lo cargan todas las noches con un 50% de batería"* — nightly charge at 50%, i.e. ~3.6
> %/awake-hour, **~50–65% left after a 9.5 h school day**. The sweep raised the Z7 from ~6 to ~20 dated
> model-verified observations, but **only three attach a percentage to a window**, and **no source in
> any language states a tracking interval** — the cost of Historical Trajectory (2 s GPS sampling)
> has still never been measured.
>
> See `watches/imoo-z7.md` § "Battery evidence sweep (2026-08-19)" for the full 24-row table.

**The awake-hours figure was the question. It can now be bounded rather than answered, and two
premises need correcting: the overnight shutdown *can* be disabled, and imoo *does* publish a
runtime — just not on the spec sheet.**

### Correction: imoo does publish a runtime for this watch

The previous record held that imoo publishes nothing. That is true of the **spec sheets** — verified
across imoo.com/en, imoostore de/es/pl/in, and the official multilingual EU manual
(`5211869-imoo-Z7-manual-V1.0`, 2024-03-25), which contains **zero** occurrences of standby, battery
life, power saving or location interval. But imoo publishes figures in two other channels:

- **imoo's own support FAQ** (2020-09-09, brand-wide, predates the Z7): *"When fully charged, the
  watch can be used normally for **one day**. In the case of not being used, the watch can remain on
  standby for about **3 days**."* Caveat: *"The data was obtained from laboratory tests."*
- **imoo's own Amazon UK listing** (ASIN B0CXSSLDW5, live): *"Powered by a 740mAh battery, it
  provides **1 to 2 days** of dependable power under moderate daily use."*

**imoo's own numbers agree with the one lab test and contradict the "three days" press claims.**
That is the single most useful correction in this section: the multi-day figures circulating in the
press are almost certainly descended from imoo's **standby-when-unused** figure, not from any
in-use measurement.

Retailer copy remains unadoptable: noomii.de *"bis zu 7 Tage"*, eMAG.ro *"autonomie până la 240 de
ore"* (10 days), and beyondpixels.de's sponsored *"bis zu 168 Stunden"* — which it applies to the Z1
and Z7 alike, i.e. the same PR lineage as noomii's 7 days. **One claim, restated.**

### The first measurement — no longer the only one

**Update 2026-08-19:** a second drain test exists — **Jagat Review (ID, 29 Apr 2025): ~34%/day**,
whose own conclusion is "almost three full days". The two lab tests disagree by **~2.6×**, neither
states a tracking interval, and region/firmware differences are one unproven candidate explanation.
The Notebookcheck analysis below stands, but any "only lab test" phrasing in this document is
superseded.

### The Notebookcheck measurement

> Section *"Akkulaufzeit – Watch Phone Z7 muss täglich laden"*:
> *"Die Watch Phone Z7 hat eine Akkukapazität von 740 mAh. Wird die Uhr ganztägig getragen — mit
> einem kurzen Anruf und einigen Bildern — hat die Smartwatch nach 24 Stunden noch **12 Prozent**
> Akkukapazität. **Wird länger oder öfter telefoniert, muss die Uhr früher ans Ladegerät.**"*
> *"In der Praxis muss die Z7 täglich geladen werden. **In 30 Minuten lädt die Smartwatch von 3 auf
> 45 Prozent. Für eine vollständige Ladung vergehen etwa 80 Minuten.**"*
> *"**In der App wird die voraussichtliche Laufzeit der Smartwatch im Normal- und im
> Energiesparmodus angezeigt.** Nachts schaltet sich die Smartwatch ab Werk geplant ab und startet
> gegen morgen neu. **Die Funktion kann individualisiert und abgeschaltet werden.**"*
> And in the sleep-tracking section: *"**Ab Werk greift die automatische Abschaltung und die
> Smartwatch wird nachts ausgeschaltet.**"*
> — [Notebookcheck](https://www.notebookcheck.com/Eltern-tracken-ihre-Kinder-imoo-Watch-Phone-Z7-im-Test.969170.0.html),
> Benedikt Winkel, published **2025-04-04**, page updated **2026-02-18**

**That is the entire battery content of the article.** There are **no intermediate percentages, no
per-hour rate, no screen-on time, no clock times for the overnight window, and no statement that GPS
or live tracking was active** during the 24 hours. Notebookcheck's own spec table leaves battery
*life* blank — even they had no vendor figure to quote. And per testberichte.de, **Notebookcheck is
the only independent lab test of the Z7 indexed in Germany**, so there is nothing to triangulate
against.

### What the 24 hours actually is

Notebookcheck reports the factory overnight shutdown as still in force, so the most natural reading
is that **the 24 h run includes a period with the watch switched off.** If a shipped schedule
removes 8–9 hours, then 88 percentage points were consumed over roughly **15–16 awake hours** —
about **5.5–6 points per awake hour** — which puts the 07:00–18:00 window at roughly
**30–35% remaining at hour 12**.

**That is arithmetic on a single datapoint with an assumed sleep window, not a measurement.** It
assumes Notebookcheck's profile: one short call, a few photos, no continuous tracking. It is stated
as inference and should not be quoted as a finding.

### The interval — there isn't one to set

**The Z7 offers no user-selectable tracking interval.** Live location is **on-demand**: the parent
taps, the watch fixes, and imoo's FAQ documents only the *time-to-fix* — *"It normally takes 4-7
seconds to locate"*. The Google Play listing describes a "Location Function" with no frequency
control.

Background history is a separate mechanism. From imoo's **EU Data Act disclosure**
([PDF](https://static-res-www.imoo.com/EU/files/Data_Act--imoo_Watch_Phone-V1.0_2025.10.29.pdf),
v1.0, 2025-10-29):

> *"Only Z7 is supported overseas … Users need to open 'Location' → 'Historical Trajectory' in the
> mobile app … **The watch end will report once every 1H**; If the user initiates positioning, it
> will be reported immediately."*
> *"Historical trajectory, GPS data is collected **every two seconds**… Based on the user's ability
> to effectively collect GPS data for 8 hours per day…"*

So: **Historical Trajectory is off by default**, must be switched on, samples GPS **every 2 seconds**
and uploads **hourly**. imoo's marketing states the watch records location *"as frequently as every
1–2 seconds"* — that is this mode, not a setting you tune.

**Two consequences.** First, Notebookcheck's 24 h was measured on a watch whose live location was
purely on-demand — it is not a tracking figure at all. Second, *"continuous active tracking"* as this
brief defines it is **not a user-selectable mode on the Z7**, which makes the hour-12 metric partly
ill-posed here, and means **every published Z7 hours figure is interval-free by construction**. The
cost of running Historical Trajectory has **never been measured by anyone.**

Also: Notebookcheck records *"Das Tracking funktioniert allerdings nur, wenn eine aktive SIM-Karte
eingelegt ist"* — tracking requires an active SIM.

### Overnight — and the good news

**At the factory default the watch switches itself off at night**, and while off it is **fully down:
no location, no calls, no messages.** The whole off-window is a tracking blackout. **Exact clock
times: UNKNOWN** — not in the manual, not in imoo's FAQ, not in Notebookcheck.

**But it can be turned off.** Notebookcheck: *"Die Funktion kann individualisiert und abgeschaltet
werden."* The setting is *App → More → Scheduled Power On/Off*; imoo's troubleshooting article notes
the schedule is pushed over the network, **requires SIM data**, must show "Successfully Set", and
that shutdown and startup must be **≥5 minutes apart**.

**This materially improves the Z7's standing.** The objection was never that overnight shutdown is
bad in itself — it is that it silently inflates the runtime claims. Since it is disableable, an owner
can trade the inflated number for an always-trackable watch. Nobody has measured what that costs.

### The "almost three days" claim, and why it is one claim

- **WhatGadget** (UK, undated, indexed 2024) and **GizNext** (India, 2024-04-23, Sandeep Sarkar)
  both state, word for word: *"With a full charge and standard usage, expect this smartwatch to
  deliver almost three days of charge."* Not two observations — **one unattributed claim**, and
  "standard usage" is never defined.
- **MightyGadget** (UK, 2024-08-18): *"about 2-3 days"* — but the same article states the Z7 has an
  **"800mAh battery"**, which is wrong (it is 740 mAh). Weight accordingly.
- **techbuzzireland** (2025-04-15): *"2-5 days depending on use"* — no profile, no interval,
  worthless.
- **lheurepassion.com** (FR, undated): *"Le mode économie pousserait l'autonomie jusqu'à trois
  jours"* — explicitly **power-saving mode**, and the page aggregates Amazon buyer reviews rather
  than testing.

Every one of these multi-day figures spans nights during which, at the factory default, **the watch
is switched off.**

### Owner reports — weak, but they contain the two useful mechanisms

- Amazon.de, "Elly", 5★ verified, **2024-09-14**: *"wie mein Sohn die ersten Stunden alles
  ausprobiert hat und sie danach trotzdem **noch 80% Akku** hatte."* The elapsed time is not
  quantified, so this **cannot be pinned to hour 8 or 12** — but it is the closest thing to an
  early-hours percentage that exists.
- Amazon.de, "JS", 5★ verified, **2025-03-26**: *"Akku mindestens 3 Tage bei normaler Nutzung.
  **Ab 20% schaltet die Uhr in den Energiesparmodus** und man erhält eine Nachricht über die App."*
- Amazon.de, another verified reviewer: *"ich kann per App einstellen, **in welchem Batteriezustand
  die Uhr in den Sparmodus geht**"* — **the reserve-power threshold is user-configurable.**
- **STRUCK 2026-08-19 — a Z3 review (Kevin D, `Colour Name: Z3-Blue`) on the merged UK listing; see the contamination notice at the top of this section:** ~~Amazon.co.uk, 5★ verified, 2026-05-05: *"typically lasting through a school day with a
  comfortable daily charging routine."*
- Amazon.co.uk, 5★ verified, **2026-03-10**: *"The Z1 usually lasted about five to seven days… so
  far the Z7 seems to be the same"* — written after a few days of ownership and contradicting every
  other source. **Unreliable outlier, discarded.**
- Amazon.de spec field *"Batterie-Durchschnittslebensdauer: 14 Tage"* is a **bogus seller field** —
  14 is the tracking-history length in days. **Do not use.**

The user-settable reserve threshold is genuinely relevant to this brief: it means an owner can
configure the point at which the Z7 sheds features to protect calling and location, which is exactly
the behaviour you want at hour 12.

### Weak signal and cold

- **Weak LTE:** imoo's own FAQ confirms *"use in weak signal areas will increase power
  consumption… recommended to charge once a day"*. **No quantified cost anywhere.**
- **Cold:** imoo documents a **0–35 °C** operating window and that **below 10 °C** charging is capped
  at ~100 mA with no fast charge, stretching a full charge to **6–7 hours**. For a watch that must be
  charged daily, that means a cold watch **may not recover overnight in an unheated room.** No
  cold-weather *discharge* data exists.

### Verdict on the hour-12 question

**Roughly a third left at hour 12 — inferred, on a light profile, with live location on demand
rather than tracking.** That is probably adequate for the school day itself. What it is not is a
tracking figure, and it never can be from the published record, because **the Z7 has no
user-selectable tracking interval and the one mode that produces a real trail has never been
measured.** The headline "almost three days" is a single unattributed claim that counts hours in
which the watch is switched off. The redeeming features are that the shutdown **can be disabled**
and that the app itself **displays a predicted runtime for normal and power-saving mode** — a
per-device number any owner could read off in week one, and which nobody has ever published.

---

## 5. Carneo GuardKid+ 4G Platinum — the best-documented watch here, and the vendor undercuts itself

**Verified, and materially strengthened: Carneo's own ULTRA manual states 20–24 h at the 10-minute
interval, roughly half what its Platinum manual claims for the identical cell.**

### The claims, attributed — and they do not agree with each other

| Channel | Figure | Conditions stated |
|---|---|---|
| carneo.eu / carneo.hu marketing | "4 days" active / "up to 96 hours" standby | none |
| carneo.cz product page | *"Výdrž až 4 dny na jedno nabití, **při 100% GSM signálu**"* | 100% GSM signal — the caveat **is** in the marketing copy, not only the manual |
| carneo.cz Platinum page | *"Ve stand-by režimu až 7 dní"* | — |
| Alza.cz spec table | 120 h / 5 days standby | — |
| Austrian retail listings | 72 h standby | — |
| eMAG.ro / tonerpartner.ro | "up to 96 hours" | none |

**Six mutually inconsistent standby numbers across six channels for one product.** No Carneo standby
figure should ever be cited without naming the channel it came from.

### The manuals — the strongest evidence in this whole document

**Platinum manual** ([PDF](https://www.carneo.cz/user/documents/upload/podpora/navody/CARNEO-GuardKid+4G_PL-manual-CZ.pdf), undated):

> *"Normální režim / automatická lokalizace každých 10 minut = výdrž max. 1-3 dny. Režim úspory
> energie / automatická lokalizace každou 1 hodinu = výdrž max. 2 - 4 dny. Režim spánku. Polohu si
> můžete vyžádat manuálně = výdrž max. 3-5 dní. Výdrž baterie je uváděna při 100% 4G GSM signály.
> V případě, že se hodinky během dne nacházejí se slabším GSM 4G signálem se výdrž baterie rapidně
> zkracuje."*

Plus: *"Aktivace krokoměru … může zkrátit výdrž baterie až o 30%"* — the pedometer costs up to 30%.

**ULTRA 2nd gen manual** ([PDF](https://www.carneo.cz/user/documents/upload/podpora/navody/CARNEO%20GuardKid+%204G_ULTRA%202nd%20manual%20CZ.pdf), undated) — **same 1000 mAh cell, same 10-minute interval, half the number:**

> *"Normální režim / automatická lokalizace každých 10 minut = výdrž **Max. 20 – 24 hodin**.
> Režim úspory energie / automatická lokalizace každou 1 hodinu = výdrž Max. 2 - 3 dny.
> Režim spánku. Polohu si můžete vyžádat manuálně = výdrž Max. 3-4 dny."*

And it is the only document in this entire project that **quantifies the weak-signal penalty**:

> *"Například pouze 50% síla 4G GSM signálu může zkrátit výdrž baterie na méně než 50%."*
> ("For example, only 50% 4G GSM signal strength can shorten battery life to less than 50%.")

The Platinum and the ULTRA 2nd gen share the same 1000 mAh cell, so the 20–24 h vs 1–3 days conflict
**cannot be explained by battery size**. The conservative reading — and the one consistent with the
single independent measurement — is that **20–24 h is the honest number for a 10-minute interval**
and "1–3 days" is optimism. Note what that means: the vendor itself is conceding that continuous
10-minute tracking costs it a full day, and Romanian school buildings are exactly the *"slabší GSM
4G signál"* case its own manual warns about.

### The one independent measurement, verified

> *"Během našeho testování jsme se rozhodli pro **automatickou lokalizaci každých 10 minut**.
> Krokoměr jsme ponechali vypnutý… Během dne jsme odeslali zhruba 10 zpráv a vyfotili 2 fotky.
> Rovněž jsme přibližně 10 minut za celý den telefonovali. Také jsme **zapnuli** noční režim úspory
> energie, kdy se hodinky odpojí od sítě v době mezi 22:00 a 6:00. V popsaném případě jsme hodinky
> nabíjeli po zhruba **30 hodinách**."*
> — [itmix.cz](https://www.itmix.cz/recenze/chytre-hodinky/carneo-guardkid-4g-platinum/), Czechia,
> 2025-04-14. Also confirms 1000 mAh and ~2 h to full charge.

**This is still one datapoint, and the duplication is worse than previously recorded.** itmix.cz,
itmix.sk, guidelee.hu and guidelee.de are **one publisher network**. itmix.sk (2025-05-13) is a
word-for-word Slovak translation — same 30 h, same conditions — and guidelee.hu (2025-05-12) the
same again. Worse, **guidelee.de's page at the Platinum URL actually carries the ULTRA test text**,
so model attribution inside that network is unreliable. Count the whole network as **one claim**.

Note also that the 30 h was obtained with the night disconnect **switched on**, and contains **no
intermediate percentage at any elapsed time**. It is a single end-to-end number.

### Overnight

The 22:00–06:00 night disconnect is described in the manual as an **option**, not a default:
*"Noční režim úspory energie: Možnost odhlásit hodinky ze sítě od 22:00 do 6:00."* The ULTRA manual
states what is lost: **"V tomto režimu nejsou aktivní datové přenosy"** — no data transfers, i.e.
**untrackable and unreachable for eight hours.**

**Whether it ships ON or OFF is not documented (UNKNOWN).** The indirect evidence points to OFF:
itmix wrote *"zapnuli jsme"* — "we turned it on" — which only makes sense as an action the tester
took. That is inference, not documentation.

**A related trap:** the ULTRA manual warns that the Wi-Fi receiver is put to sleep to save battery,
*"což způsobí, že hodinky nebudou mít dostupná data a tím Vám bude znemožněna komunikace s nimi a
také lokalizace"* — Wi-Fi is not a fallback for SIM data here, and Carneo recommends disabling Wi-Fi
outright. So the Garmin-style "add the school Wi-Fi to save the modem" mitigation is not available.

### Interval

Both manuals offer exactly **two automatic periods — 10 minutes and 1 hour** — plus sleep mode
(manual requests only) and an on-demand instant fix. **10 minutes is the tightest interval the app
offers**, so no measurement at a tighter interval can exist. That is a genuine advantage for
evidence quality and a genuine limitation for the product.

### The one sub-12-hour percentage anyone reports — and it is weak

A Heureka.cz poradna post for the Platinum reports charging to 100% at 21:00 and finding **40% at
06:30** — roughly **60% drain in 9.5 h in *sleep* mode**, the most economical setting. If real it
would be devastating. **It could not be verified**: Heureka sits behind Cloudflare and refused
direct retrieval, the text is a search-index rendering, and **the post carries no retrievable date**.
Recorded as an unverified single user complaint, not as a measurement.

### Other figures, all weaker

- [testado.sk](https://www.testado.sk/detske-smart-hodinky-carneo-guardkid/) (K. Muchová,
  2026-07-23): **3 days** on the ULTRA 2nd gen at *"úsporné, avšak bežné používanie"* — the interval
  is not tied to the measurement, so it is near-worthless.
- [modrykonik.sk](https://www.modrykonik.sk/recenzie/detske-smart-hodinky-carneo-guardkid-4g-ultra/)
  users (2025-04 to 2026-05): *"niekoľko dní"*, *"tie dva dni vydržali"*, *"nabíjame dvakrát do
  týždňa"* — ULTRA, **no interval stated in any of them**, therefore not usable.
- Alza.cz Platinum: 3.7/5 from 316 users, comments ranging from one day to "several days", **no
  intervals**.
- testmagazin.cz (2022-09-19) "čtyři dny", arecenze.cz / recenzopedia.cz "2-4 dny" — spec-sheet
  echoes with no original data. **Discarded.**

### Cold weather

**Nothing.** Neither manual states an operating temperature range or a minimum; the only thermal
statement is *"Nevystavujte teplotám vyšším než 45 °C"*. No review or user report on frost.

### Verdict on the hour-12 question

**Roughly half charge at hour 12, by inference — and it is the only watch here where the inference
rests on the vendor's own numbers.** Carneo's ULTRA manual says 20–24 h at a 10-minute interval on
the same cell; the one independent measurement says 30 h at that interval with the night disconnect
helping. Both put hour 12 comfortably inside the envelope with real margin. The caveats are that
**10 minutes is as tight as it goes**, that Carneo's own manual says 50% signal can cost more than
half the runtime, that the pedometer costs up to 30%, and that **no one has ever published an
intermediate percentage** for this watch.

---

## 6. Canyon Sunny KW-48 — one figure now exists, and it tells you almost nothing

**Correction to the previous record: the KW-48 is no longer a total blank. One independent test
exists — in Swedish. It states no tracking interval, so by this document's own rule it is nearly
worthless.**

### The one observed figure

> *"Batteriet höll klockan igång i nästan två dagar innan vi var tvungna att ladda det"*
> ("The battery kept the watch running for almost two days before we had to charge it.")
> Spec table: *"Cirka två dygn"* ("about two days").
> — [PC-Tidningen](https://pctidningen.se/it-och-samhalle/ny-teknik/smartklocka/canyon-sunny-kw-48),
> Sweden, Morten Skeldal Østergaard, 2025-07-15, score 8.1/10.

**No interval. No hours. No percentages. No overnight detail.** And it lands exactly on top of
Canyon's own claim, which is the signature of a reviewer who left the app in its default 10-minute
mode and never touched Precise. It confirms the vendor is not lying about the default; it says
nothing about the case this project cares about.

### The claim, attributed — and the sibling that shows how it was built

Canyon's KW-48 page claims **up to 2 days active, up to 5 days standby with SIM, 7 without**, with
the disclaimer that the figure *"is based on intensive active mode use. Actual usage time may vary
and is subject to individual user settings (such as screen brightness, GPS settings within the app,
etc.)."* The manual's Table 2 conditions it explicitly on **GPS coordinates transmitted every
10 minutes**, above-average brightness and a stable 4G signal.

The **KW-49 Zefir** (900 mAh, same platform) is the one place Canyon publishes a fully-specified
test, and it is worth reading because it shows what "up to 2 days" is made of:

> *"According to our tests, the battery usage time is approximately **71 hours**"* — conditions:
> Canyon Life connected at a **10-minute geolocation interval**, 50% brightness, one 1-hour outdoor
> walk with 5 location reports/day, "Find device" 5×/day, one 5-minute video call/day, one 1-minute
> voice call/day, 5-second screen sleep.

That is a *light* profile dressed as a test. It is also the only vendor figure in this document with
its conditions fully stated, and Canyon deserves credit for publishing it.

### The sibling user report that should stop you

**Canyon Jondy KW-44**, 700 mAh, 4G, same Canyon Life platform — the closest structural sibling to
the KW-48's 750 mAh:

> **"батарея работает только 8 часов с отключенной полностью геолокацией, активное использование —
> 4 часа"**
> ("the battery lasts only 8 hours with geolocation **completely disabled**; active use — 4 hours")
> — Алексей, 2 stars, 2024-09-06,
> [onliner.by](https://catalog.onliner.by/smartwatch/canyon/cnekw44gb/reviews)

**This is the only Canyon-family user report anywhere that states a location-tracking condition, and
it is catastrophic**: 8 h with tracking *off*. Three further onliner.by reviewers report "drains in
a couple of hours" and "drains fast", though at least two of those units were returned as defective.
Caveats, stated plainly: different model, e-shop review, an unhappy 2-star reviewer, and the same
five-review pool is displayed on two colour pages so it must be **counted once**. It is weak
evidence. It is also the only evidence that touches the interval question at all.

Older Canyon models scatter the same way — KW-51 owners on comfy.ua (2019–2020) report **6 hours**,
**1.5 days** and **2 days** for the same nominal "active use", which is the clearest possible
demonstration that an hours figure without an interval carries no information.

### Overnight — a documented behaviour that may invalidate the tightest mode

Canyon's **KW-34 quick manual** states, in troubleshooting:

> *"After the watch goes into the sleep mode, it will switch to power saving mode, which means the
> function of uploading location data is OFF."*

**If this holds for the KW-48 — and that is an inference, not a confirmation — then the watch stops
uploading its position whenever the screen sleeps**, which on Canyon's own recommended settings is
15 seconds after the child stops looking at it. That would mean the "Precise / every 1 minute"
setting does not deliver 1-minute fixes in the pocket-and-sleeve reality of a school day, and it
would mean part of Canyon's runtime advantage is bought by not tracking. **Whether it applies to the
KW-48 is UNKNOWN and is the single most important thing to test in the return window.**

No scheduled power on/off was found. Canyon Life's "Do Not Disturb" suppresses notifications on the
*parent's* phone and does not power the watch down.

### Interval

The app offers **every minute / every 10 minutes / once an hour / stop tracking** (documented for
the KW-34 setup, same app). Canyon's own guidance: *"the more frequently your location is tracked,
the faster your smartwatch runs out of battery power."* Canyon's power-efficiency advice for the
KW-48 additionally recommends **disabling VoLTE when not in use** — i.e. giving up reliable voice —
and treats "Energy Save" as the recommended geolocation mode.

**Runtime at the 1-minute Precise interval: no vendor figure, no measurement, nothing.** Naive
scaling from the KW-49's 71 h gives roughly 59 h for a 750 mAh cell *on that light profile*; the
duty cycle at 1 minute is about ten times higher and the scaling is not linear, so **do not
extrapolate it and this document does not.**

### A data-quality warning

Many retailer listings — tradeinn/bikeinn, several ASBIS catalogue pages, Digitec/Galaxus, and much
of what dominates search results — state **"400 mAh, 4 days standby, 2 days active"** for the KW-48.
That contradicts Canyon's own manual (**750 mAh**, 3.8 V) and looks like stale copy from an older 2G
model. **Retailer spec tables for this product are unreliable.**

### Cold weather

**UNKNOWN.** No operating temperature range was retrievable and no cold-weather report exists.

### Verdict on the hour-12 question

**UNKNOWN, and the surrounding evidence is not reassuring.** One Swedish reviewer reached almost two
days at an unstated (probably default 10-minute) interval, which implies a healthy hour-12 reserve
*in that mode*. But this is the smallest cell in the shortlist (750 mAh), the tightest mode is
undocumented and possibly suspended by screen sleep, the one sibling report that mentions tracking
says 8 h with tracking off, and the vendor's own headline figure is conditioned on a stable 4G
signal that a Romanian school building will not provide. The UNKNOWN rule applies at full strength.

---

## Ranked battery order — for *this* metric

Ranked strictly by **useful reserve at hour 12 with tracking active**, with the strength of the
evidence as the tie-breaker. This is not a ranking of runtime; a watch that lasts 70 hours by not
tracking does not score here.

| # | Watch | Why |
|---|---|---|
| **1** | **Carneo GuardKid+ 4G Platinum** | The only watch whose hour-12 position rests on numbers with a stated interval. Vendor's own ULTRA manual: 20–24 h at a 10-minute interval on the same 1000 mAh cell; one independent measurement at 30 h at that interval. Implies **roughly half charge at hour 12**. Best-evidenced, not best-performing |
| **2** | **TCL MOVETIME MT48** | Largest cell (900 mAh) and two independent reviewers past a full day, one at "a couple of days". But **every figure lacks an interval**, TCL will not reconcile "1-second refresh" with "2.5 days", and the brand's own MT46 measured 18 h under a proper multi-week test. Probably comfortable; entirely undemonstrated |
| **3** | **imoo Watch Phone X10** | Nine dated reviews, none stating an interval, and the 3-day outlier has been **contradicted by its own publisher's second test**. Four German reviewers now converge on "about one day" — but that day explicitly includes GPS tracking and video calls. Uniquely, **Class Mode keeps GPS running**. Penalised for a **0 °C** operating floor and ~1%/min video calls |
| **4** | **imoo Watch Phone Z7** | ~30–35% at hour 12 by inference — but that rests on one of two lab tests that disagree by 2.6× (see §4); the other lab test, taken with live location **on demand** and the watch **switching itself off overnight**. The trail mode (2-second sampling) has never been measured. Credit for a **disableable** shutdown, a user-settable reserve threshold, and an in-app runtime prediction |
| **5** | **Canyon Sunny KW-48** | One Swedish test at "almost two days", no interval; smallest cell (750 mAh); tightest mode possibly suspended by screen sleep; a sibling user reporting 8 h with tracking *off*. The UNKNOWN rule applies at full strength |
| **6** | **Garmin Bounce 2** | Excellent as an on-demand check-in watch (82% at end of school day). **Worst here as a tracking watch**: smallest cell, no persistent continuous-tracking mode, and the only published continuous-tracking measurement puts it flat at ~hour 8.5 |

**The re-ranking is the point.** On the old "does it last a school day" metric Garmin scored 7/10 and
Carneo 7/10. On the hour-12-with-tracking metric Garmin is last and Carneo is first, because the
question stopped being *how long does the battery last* and became *how long does it last while
doing the job*. Garmin's two days and Carneo's 30 hours are measurements of different activities.

---

## What remains unknown

**Across every model:**

1. **No vendor and no reviewer publishes a discharge curve or an intermediate percentage.** Every
   hour-12 figure in this document is an inference from an end-to-end runtime. Nobody has ever
   written down "at 18:00 the watch showed X%".
2. **The tracking interval is unstated in almost every observation.** Only the Carneo evidence
   (10 minutes) and Canyon's KW-49 vendor test (10 minutes) name one. Every imoo, TCL and Garmin
   figure omits it.
3. **The measured cost of weak LTE is unknown everywhere.** The only quantification of any kind in
   the entire market is Carneo's own manual — *"50% signal can shorten battery life to under 50%"* —
   and that is a vendor statement, not a measurement. Garmin shipped a fix for the condition and
   quantified nothing.
4. **Cold weather is untested by every reviewer for every model.** Not one review in any language
   tested a winter commute. The only useful temperature facts are vendor specs: imoo's X10 manual
   states a **0–35 °C operating range** and imoo documents that below **10 °C** charging drops to
   ~100 mA and takes **6–7 hours**; Garmin's manual gives a **0 °C charging floor**. For a Romanian
   winter these matter more than any of the runtime figures above, and **nobody has measured them.**
5. **No Romanian battery observation exists for any of the six.**
6. **Nobody has tested any of these at a tight interval**, because in most cases there is no
   evidence a tight interval can even be selected. Carneo's floor is 10 minutes; Canyon offers
   1 minute but no one has measured it; imoo may be pull-based; TCL is undocumented; Garmin's
   continuous mode times out every 30 minutes.

**Per model:**

- **TCL MT48** — the app's tracking interval options, the default, whether the 2.5-day claim assumes
  the 1-second refresh is off, overnight behaviour, weak-signal cost, and any hours-based
  measurement at all. TCL publishes no MT48 manual on its support site and its FAQ has no battery
  topic.
- **Garmin Bounce 2** — the contents of Garmin's own *"Bounce 2 Battery Life Expectations"* and
  *"Bounce Battery Life Assumptions"* articles (both render client-side and could not be
  retrieved); the true battery capacity (226 mAh is a third-party figure, unconfirmed by Garmin);
  whether the LiveTrack drain rate is reproducible outside the one confounded report; and how much
  of the EAS 90%→32% was LiveTrack versus a Wi-Fi-less school.
- **Carneo Platinum** — whether the 22:00–06:00 disconnect ships ON or OFF; any measurement not
  originating from the itmix/guidelee publisher network; verification of the undated Heureka
  "40% after 9.5 h in sleep mode" report.
- **Canyon KW-48** — whether screen sleep suspends location upload as the KW-34 manual describes;
  any runtime at the 1-minute Precise interval; any second independent review. Rozetka.ua's KW-48
  review tab and the tehnoteka.rs KW-48 PDF are the highest-value untried targets.
- **imoo X10** — whether any user-settable tracking interval exists at all (the word does not appear
  in its 96-page manual); whether timed on/off ships enabled as it does on the Z7; any runtime
  figure tied to a tracking mode; cold-weather *runtime* below its stated 0 °C floor.
- **imoo Z7** — any percentage reading between hour 0 and hour 24, from any source, in any language;
  the factory power-off window's clock times; any measurement with the shutdown explicitly disabled
  (i.e. a true awake-24 h figure); any measurement with Historical Trajectory running; **and the
  numeric runtime the imoo app itself predicts for normal and power-saving mode** — Notebookcheck
  saw that screen and published no value. That last one is the highest-value target in this entire
  document and it needs an owner with the watch in hand, not another search.

**Method limits.** The web-search budget for this session was exhausted before three planned sweeps
completed: the CEE / Baltic / Russian-Ukrainian retailer sweep for Canyon, and the YouTube-comments
and app-store-review sweeps for both imoo models. Heureka.cz, Alza.cz/.sk/.hu, Datart, CZC, Rozetka,
Foxtrot, Ceneo and Ljud & Bild's own page all block automated retrieval, so dated verbatim e-shop
reviews — the largest untapped pool of real owner battery reports in this category — remain largely
unread. Garmin's two official battery-assumption articles render client-side and could not be read
at all.

---

## The five-minute test that beats this entire document

Every number above is someone else's watch on someone else's network. If you buy inside a return
window, these measurements are yours to take and they are worth more than all of the above:

1. **Charge to 100%, unplug at 07:00, photograph the battery indicator at 12:00 and at 18:00.**
   That is the hour-12 reserve, measured on your child, your school and your operator. Nobody in
   this document has done it for any of these watches.
2. **Do it twice — once at the app's default tracking setting, once at the tightest it offers.**
   The gap between the two is the number this entire category refuses to publish.
3. **Check the battery indicator when the child is inside the school building**, not in the garden.
   Weak signal is the dominant drain and the school is the weak-signal case.
4. **On an imoo, read the app's own predicted-runtime figure** in normal and power-saving mode. It
   exists on both the X10 and the Z7 and no reviewer has ever published its value.
5. **On a Z7, check whether Scheduled Power On/Off is enabled out of the box** and turn it off if
   you want overnight tracking — then re-run test 1.
6. **On a Garmin, run the test with LiveTrack on.** That is the only configuration that matches this
   brief, and it is the configuration that produced the worst result anyone has published.
7. **In winter, repeat test 1 after an outdoor commute.** imoo's stated operating floor is 0 °C and
   its charge current collapses below 10 °C; Garmin will not charge below 0 °C. No reviewer has
   tested any of this.

---

## Sources

- TCL: [product page](https://www.tcl.com/global/en/watches/mt48) ·
  [MT48 support](https://www.tcl.com/global/en/support-mobile/model/tcl-movetime-mt48)
- M3.se: [group test](https://www.m3.se/article/2496863/gps-klocka-barn-test.html) ·
  [MT48 test](https://www.m3.se/article/3126447/tcl-movetime-mt48.html)
- [Ljud & Bild MT48 test](https://www.ljudochbild.se/test/mobil/tcl-movetime-mt48)
- [Futura-Sciences, TCL MT46 test](https://www.futura-sciences.com/tech/actualites/montre-connectee-test-bouygues-telecom-kids-watch-tcl-smartwatch-enfant-rassure-parents-126747/)
- [lheurepassion.com MT48](https://www.lheurepassion.com/blog/tcl/avis-tcl-movetime-mt48.html) (discarded)
- Garmin Bounce 2 manual: [Specifications](https://www8.garmin.com/manuals/webhelp/GUID-ED045F09-4EC3-41F5-AAAC-42B3A3836894/EN-US/GUID-81237DD0-33F4-465C-A766-4116A5661F47.html) ·
  [Location Tracking](https://www8.garmin.com/manuals/webhelp/GUID-ED045F09-4EC3-41F5-AAAC-42B3A3836894/EN-US/GUID-61B7FCF0-8021-4D90-A1A3-74F4272DF735.html) ·
  [LiveTrack](https://www8.garmin.com/manuals/webhelp/GUID-ED045F09-4EC3-41F5-AAAC-42B3A3836894/EN-US/GUID-0F787520-440A-4007-9E50-76D3061CA810.html) ·
  [Maximizing Battery Life](https://www8.garmin.com/manuals/webhelp/GUID-ED045F09-4EC3-41F5-AAAC-42B3A3836894/EN-US/GUID-5FD68189-AE24-4336-8697-E396D77D01C6.html)
- Garmin forums: [Battery Life](https://forums.garmin.com/sports-fitness/healthandwellness/f/bounce-2/423799/battery-life/1981471) ·
  [sleep-mode drain](https://forums.garmin.com/sports-fitness/healthandwellness/f/bounce-2/435204/bounce-2-battery-drain-during-sleep-mode/2029567)
- [Notebookcheck, software 5.10 poor-LTE battery fix](https://www.notebookcheck.net/Garmin-improves-battery-life-of-LTE-smartwatch-in-new-update.1166733.0.html)
- [Front Pack Sports Bounce 2 review](https://frontpacksports.substack.com/p/review-the-garmin-bounce-2)
- [the5krunner Bounce 2 buyer's guide](https://the5krunner.com/2025/09/28/garmin-bounce-2-opinion-first-look-review-buyers-guide/)
- Carneo manuals: [Platinum](https://www.carneo.cz/user/documents/upload/podpora/navody/CARNEO-GuardKid+4G_PL-manual-CZ.pdf) ·
  [ULTRA 2nd gen](https://www.carneo.cz/user/documents/upload/podpora/navody/CARNEO%20GuardKid+%204G_ULTRA%202nd%20manual%20CZ.pdf)
- [itmix.cz GuardKid+ Platinum](https://www.itmix.cz/recenze/chytre-hodinky/carneo-guardkid-4g-platinum/) ·
  [itmix.cz ULTRA](https://www.itmix.cz/recenze/chytre-hodinky/carneo-guardkid-4g-ultra/)
- [testado.sk](https://www.testado.sk/detske-smart-hodinky-carneo-guardkid/) ·
  [modrykonik.sk](https://www.modrykonik.sk/recenzie/detske-smart-hodinky-carneo-guardkid-4g-ultra/)
- imoo X10: [EU product page](https://www.imoo.com/eu/products/x10) ·
  [official manual v1.0, 2025-11-12](https://cdn.shopify.com/s/files/1/0467/6216/4375/files/Mannual-English-X10-2025.11.12.pdf?v=1762913209)
- imoo X10 reviews: [smartzone.de](https://smartzone.de/imoo-x10-smartwatch-test/) ·
  [beyondpixels.de](https://www.beyondpixels.de/imoo-watch-phone-x10-test-absolute-premium-klasse-bei-kinderuhren/) ·
  [trendblog.euronics.de](https://www.trendblog.euronics.de/mobile-web/imoo-watch-phone-x10-mit-zwei-kameras-im-test-nur-fuer-kinder-149410/)
- imoo Z7: [Notebookcheck test](https://www.notebookcheck.com/Eltern-tracken-ihre-Kinder-imoo-Watch-Phone-Z7-im-Test.969170.0.html) ·
  [imoo EU Data Act disclosure v1.0, 2025-10-29](https://static-res-www.imoo.com/EU/files/Data_Act--imoo_Watch_Phone-V1.0_2025.10.29.pdf) ·
  [imoo Amazon UK listing](https://www.amazon.co.uk/dp/B0CXSSLDW5)
- Canyon: [KW-48](https://canyon.eu/product/cne-kw48bl/) ·
  [KW-49 conditions-stated 71 h test](https://canyon.eu/product/cne-kw49bl/) ·
  [PC-Tidningen KW-48 test](https://pctidningen.se/it-och-samhalle/ny-teknik/smartklocka/canyon-sunny-kw-48) ·
  [onliner.by KW-44 owner reviews](https://catalog.onliner.by/smartwatch/canyon/cnekw44gb/reviews)
