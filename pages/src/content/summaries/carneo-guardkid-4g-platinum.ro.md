---
slug: carneo-guardkid-4g-platinum
lang: ro
name: CARNEO GuardKid+ 4G Platinum
verdict_line: "Ușor de cumpărat și configurat în România, dar ~400 de recenzii spun că poziția greșește frecvent cu 2-15 km."
---

## Verdict

Se cumpără și se configurează ușor din România, iar apelurile chiar funcționează. Dar în ~400 de recenzii cehe și slovace concluzia dominantă e localizarea nesigură: erori de 2-15 km apar frecvent, iar remediile (AGPS mutat de pe serverul „asiatic" implicit; poziționarea WiFi oprită) vin de la proprietari, nu de la CARNEO.

## Funcționează în România?

Status: likely, nivel 3. Confirmat la 2026-08-19: aplicația e disponibilă pe Google Play RO și Apple RO; înregistrare doar cu email și parolă (fără barieră +40); nanoSIM obișnuit, fără SIM de la producător. Lipsesc: un proprietar român datat (zero recenzii eMAG) și un test real cu SIM +40.

## Conectivitate

B20 e publicat, dar neverificat: șirul de benzi e copiat pe toată gama CARNEO 4G, iar declarația CE/RED nu listează niciun standard celular. B28A nu contează (700 MHz e la noi 5G NR n28). VoLTE: UNKNOWN. Fallback voce: UNKNOWN, cel mai plauzibil 2G CSFB; preferați Orange sau Digi.

## Localizare

GPS, WiFi și LBS (fără Galileo/GLONASS/BeiDou), cu comutare silențioasă: WiFi până la 300 m, LBS până la câțiva kilometri, conform manualului. Observat: slab, cu extreme de 300 km și „Hong Kong", iar o alertă de geofence a sosit cu min. 10 km întârziere.

## Baterie

1000 mAh. Declarat: „4 zile"/„până la 96 de ore"; manualul spune 24-72 h la interval de 10 minute. Observat: ~30 de ore, un singur test (itmix.cz, 2025-04-14, interval 10 min, deconectare nocturnă activă). Rapoartele proprietarilor: între ~15.8 h și ~96 h. O zi de școală de 9.5 h trece la limită; încărcați zilnic.

## De unde se cumpără

eMAG.ro (vânzător marketplace HomeMode): 565.52 RON negru/roz, 707.65 RON albastru, în stoc la 2026-08-19; retur 14 zile; garanție 24 luni (OUG 140/2021). Și irisimo.ro, tonerpartner.ro. Lista de 155 EUR e depășită (magazinul ceh: 2,150 CZK).

## Atenție la

Platformă SETracker/TGELEC rebranduită (ARES 2020: backend neautentificat, cu SQL injection), numită printre 39 de branduri la DEF CON 34 (august 2026). Politica de confidențialitate promite servere la Frankfurt, dar listează AutoNavi și SDK-uri chinezești de publicitate, în contradicție cu fișa Data safety din Play. Ascultarea ascunsă și butonul SOS nu se pot dezactiva; SOS se declanșează singur în ghiozdan. Aplicația: 2.7/5 (~1,110 evaluări), blocări de login de 10 ore; garanții refuzate repetat.

## Surse

- [Manualul producătorului (PDF, CZ)](https://www.carneo.cz/user/documents/upload/podpora/navody/CARNEO-GuardKid+4G_PL-manual-CZ.pdf) — accesat 2026-08-19
- [Pagina de produs carneo.eu](https://www.carneo.eu/en/product/smart-watch-carneo-guardkid-4g-platinum-black/) — accesat 2026-08-19
- [Declarația de conformitate UE, LD-01, 7.11.2022](https://www.carneo.cz/user/documents/upload/podpora/vyhlaseni-o-zhode/carneo_GuardKid-plus_4G_Platinum_prehlasenie-o-zhode-cz.pdf) — descărcată 2026-08-19
- [Test practic itmix.cz](https://www.itmix.cz/recenze/chytre-hodinky/carneo-guardkid-4g-platinum/) — actualizat 2025-04-14
- [Recenzii de proprietari pe Alza.cz, cumulat 3.7/5 din 328 de evaluări](https://www.alza.cz/recenze/carneo-guardkid-4g-platinum-blue-7721534.htm) — accesat 2026-08-19
- [Recenzii și întrebări pe Heureka.cz](https://chytre-hodinky.heureka.cz/carneo-guardkid-plus-4g-platinum/) — accesat 2026-08-19
- [Magazinul Google Play RO](https://play.google.com/store/apps/details?id=com.tgelec.carneoguard&gl=RO&hl=ro) — accesat 2026-08-19
- [Listarea din App Store RO](https://apps.apple.com/ro/app/carneo-guard/id1552178771) — accesat 2026-08-19
- [Listarea eMAG.ro, negru](https://www.emag.ro/smartwatch-pentru-copii-carneo-guardkid-4g-platinum-negru-8588007861579/pd/DSX6NVYBM/) — accesat 2026-08-19
- [Politica de confidențialitate CARNEO GUARD](https://www.carneo.sk/user/documents/appguard/privacy-en.htm) — descărcată 2026-08-19
- [STALK, ARES 2020, Saatjohann et al.](https://www.hb.fh-muenster.de/opus4/frontdoor/deliver/index/docId/12354/file/Saatjohann_et_al-2020-STALK.pdf) — accesat 2026-08-19
- [Notebookcheck despre DEF CON 34, „Tracking the Trackers"](https://www.notebookcheck.net/Your-child-s-GPS-watch-tells-everyone-where-they-are.1367794.0.html) — accesat 2026-08-19
