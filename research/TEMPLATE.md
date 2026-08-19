# Doc template — every file in watches/ MUST follow this exactly

Fill every field. Use `UNKNOWN` when a fact cannot be established from a source.
NEVER guess, and never infer a spec from a marketing label (e.g. do not infer band
support from the word "4G").

---

```yaml
---
model:                  # exact model name
brand:
release_year:
still_sold:             # yes | no | old-stock-only | UNKNOWN

# --- Romania verdict (the pass/fail question) ---
ro_status:              # verified | likely | unknown | fails
ro_evidence_tier:       # 1 vendor lists RO / app accepts +40
                        # 2 app live in RO Play storefront, recently updated
                        # 3 dated first-hand report from an RO user
                        # 4 RO distributor / warranty entity / carrier bundle
                        # 5 bands fit RO networks only (necessary, not sufficient)
                        # 0 no evidence found
ro_killer:              # if ro_status is "fails", the one-line reason. else: n/a

# --- Radio (Romania has no 3G; B20 drives indoor/rural coverage) ---
lte_bands: []           # e.g. [B1, B3, B7, B20, B28]
band_b20:               # true | false | UNKNOWN
band_b28:               # true | false | UNKNOWN
volte:                  # true | false | UNKNOWN
voice_fallback:         # volte | 2g-csfb | data-only | none | UNKNOWN
modem_chipset:

# --- Positioning (the #1 criterion) ---
positioning: []         # e.g. [GPS, GLONASS, Galileo, BeiDou, WiFi, LBS, AGPS]
wifi_positioning:       # true | false | UNKNOWN  -- decisive for indoor accuracy at school
update_interval_min:    # tightest tracking interval the app allows

# --- Battery (claimed and observed are SEPARATE facts) ---
battery_mah:
battery_claimed_h:      # manufacturer figure
battery_observed_h:     # what reviewers/parents actually report, with conditions

# --- App & service ---
app_name:
app_android_min:
app_ro_playstore:       # true | false | UNKNOWN
app_last_update:        # YYYY-MM
data_region:            # EU | China | US | UNKNOWN

# --- Practical ---
sim:                    # nanoSIM | microSIM | eSIM
water_rating:
weight_g:
camera:                 # true | false
games:                  # true | false
extras_disableable:     # true | partial | false | UNKNOWN
price_eur:
buy_from:               # retailer + country
price_ro_eur:           # RO price for contrast, or n/a
---
```

## Verdict

Three lines maximum. Who it suits, the main risk, and whether it clears the floor
(reliable position + signal everywhere, 1+ day battery, works in RO).

## Does it work in Romania?

The evidence, with dates and links. State the tier reached and what is still unproven.
Write unconfirmed claims as **unverified** — do not smooth them over.

## Pre-purchase test

The specific check to run before paying: install the companion app from the RO Play
store, attempt registration with a +40 number, confirm it succeeds. Note the return
window of the recommended retailer so an `unknown` stays recoverable.

## Positioning quality in real use

Fix time, drift, behaviour indoors at school, whether it silently falls back to
cell-tower positioning and reports the child in the wrong place.

## Battery in real use

Claimed vs observed, and under what tracking interval and call volume.

## Network & bands

Band fit against RO operators, VoLTE status, and what happens to voice if 2G is retired.

## Features & what can be disabled

Calls, SOS, camera, games, chat, class mode. For each extra: can the parent app
actually switch it off?

## Security & privacy

Known vulnerability research or CVEs affecting this model or its platform, where
location data is stored, whether a covert remote-listen feature exists and whether
it can be locked.

## Reality check

Translate the marketing into observed reality, e.g.
"'7-day battery' means 7 days idle with tracking off; parents report ~20h with
10-minute updates and school-day calls."

## What users say

**Works:** quotes with links, dates, and the reporter's country.
**Fails:** same.
Keep quotes in their original language with an English translation beside them.
Note how many independent reports back each point — never generalise from one.

## Sources

Every URL used, with date accessed and what it established.
