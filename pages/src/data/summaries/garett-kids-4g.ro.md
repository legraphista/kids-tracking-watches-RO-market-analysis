---
slug: garett-kids-4g
lang: ro
name: Garett Kids Twin 2 4G
verdict_line: "Are B20 și garanție de 24 de luni, dar aplicația e la 2.33 stele, fără Galileo, iar vocea în România e neverificată."
---

## Verdict

Garett își publică benzile radio — B20 prezent, B28 absent — plus manual în limba română și garanție de 24 de luni. Riscul vine dinspre software: o aplicație la 2.33/5 pe Play și 1.70/5 pe iOS, și un ceas construit să prefere antenele celulare în locul GPS-ului.

## Funcționează în România?

Probabil, nivel 3. GARETT vinde direct pe eMAG.ro, cu manual și certificat de garanție în română; aplicația e activă în magazinul Play românesc. Pe toate cele 30 de anunțuri eMAG există în total trei recenzii românești, iar niciun utilizator român nu a raportat vreodată un apel vocal. Înregistrarea se face pe e-mail, fără selector de țară; suportul le răspunde românilor în poloneză.

## Conectivitate

LTE 800/900/1800/2100/2600 MHz — B20, B8, B3, B1, B7, conform declarației RED din manual. B20, banda care decide acoperirea în interior și în zonele rurale, este prezentă; B28 lipsește (irelevant în România). VoLTE: UNKNOWN — Garett nu declară nimic, iar chiar suportul Garett i-a spus unui proprietar să îl dezactiveze. În practică, vocea merge pe 2G CSFB: alegeți Orange sau Digi, cu risc în ziua în care vreunul renunță la 2G.

## Localizare

GPS, AGPS, LBS, Wi-Fi; receptor single-band L1, fără Galileo (confirmat la nivelul cipului, UNISOC SL8521E); GLONASS/BeiDou doar deduse, nedeclarate de producător. Încearcă întâi Wi-Fi, apoi LBS, iar GPS doar în afara acoperirii LBS — chiar și în aer liber. Sunt raportate erori de poziție de la 100 m până la 200 km; alertele geofence sosesc cu o oră întârziere sau se declanșează fals, de zeci de ori pe zi.

## Baterie

Declarat: 900 mAh, de obicei până la 1 zi în tabelul Garett (valoarea pentru modul de urmărire la 1 minut); eMAG promovează până la 3 zile — aproximativ cifra modului de economisire. Observat: 48 h — patru proprietari de Twin 2 raportează ~2 zile, fără interval precizat; într-un caz izolat, ceasul nu a rezistat până seara. Autonomia la urmărire de 1 minut rămâne nemăsurată.

## De unde se cumpără

Verificat 2026-08-19: vândut de GARETT pe eMAG.ro, 423.75 RON (€80.81), retur 14 zile; prețul curent din magazinele poloneze e 279.99 zł (€64.83) — un plus de +25% care aduce garanția prevăzută de legislația română a consumatorului.

## Atenție la

Apare pe slide-ul „39 brands, one server” („39 de mărci, un singur server”) de la DEF CON 34; CVE-urile numesc doar aplicația-soră SeTracker. Endpoint-ul din Frankfurt e un nod comun al platformei; hostname-ul platformei trimite către Alibaba Cloud. Parola SMS implicită, 123456, e tipărită în manual. Nu există o metodă documentată de a opri ascultarea la distanță. Parolele aplicației: doar 8–16 litere și cifre ASCII. Cele 88 de recenzii de cinci stele de pe Komputronik sunt false.

## Surse

- [Manualul în română Garett Kids Twin 2 4G (PDF)](https://docs.garettelectronics.com/index.php/s/WuyUuKd5cLyQyAK) — benzi, 900 mAh, intervale, parola implicită (accesat 2026-08-19)
- [Pagina de produs garett.com.pl Twin 2 4G](https://garett.com.pl/produkt/smartwatch-garett-kids-twin-2-4g-czarny/) — tabelul de specificații, incl. "Do 1 dnia" (2026-08-19)
- [Listarea eMAG.ro Twin 2 4G negru](https://www.emag.ro/ceas-smartwatch-pentru-copii-garett-twin-2-gps-8gb-negru-1-8-twin-2-4g-blk/pd/D0SCRQYBM/) — 423.75 RON, vândut de GARETT (2026-08-19)
- [Garett Tracker pe Google Play](https://play.google.com/store/apps/details?id=com.tgelec.garetts) (2026-08-19)
- [FAQ-ul de suport Garett](https://garett.com.pl/pomoc-techniczna-smartwatche-dla-dzieci/) — răspunsul despre 2G în străinătate, procedura de ascultare silențioasă (2026-08-19)
- [Manualul SeTracker2 — autonomia pe fiecare mod de urmărire](https://setracker.eu/how-to-use-setracker) (2026-08-19)
- [Notebookcheck despre DEF CON 34 „39 brands, one server”](https://www.notebookcheck.net/Your-child-s-GPS-watch-tells-everyone-where-they-are.1367794.0.html) (2026-08-14)
- [CVE-2026-9220 (platforma SeTracker)](https://vulnerability.circl.lu/vuln/cve-2026-9220) (2026)
- [Recenzia GuideLee.pl pentru Essa 4G](https://www.guidelee.pl/recenzja/smartwatch/garett-kids-essa-4g/) (2025-05-12)
- [Media Expert Twin 2 4G — rapoartele de baterie ale proprietarilor](https://www.mediaexpert.pl/smartfony-i-zegarki/smartwatche-i-zegarki/smartwatche/smartwatch-garett-kids-twin-2-4g-czarny) (2026-08-19)
