### SPD-Proj3

### A projekt célja

Ez a projektmunka eredetileg azzal a céllal indult, hogy egy interaktív éttermi oldalt készítünk el. Az eddig megszokott, már-már hagyományos elemek (pl. HTML kártyák, sticky nav) mellett különböző interakciós részeket (pl. menü elrejtése; ajánlat szűrése, keresése; kosár használata) szándékoztunk beilleszteni.

## Működése (felhasználó)

- ### angol nyelv ismerete ajánlott!
- eleinte egy étterem weboldalának főoldala látható, melynek részei közt görgetéssel vagy a fenti menüpontokkal lehet mozogni
- az egyes pontok betöltődéskor valamely oldalról "belebegnek", ezzel is építve az ergonómikusságát a weblapnak
- menünk vizsgálatakor az ételek között az oldalsó nyilakkal és húzással, oldalgörgetéssel egyaránt lehet lépni, e szekció alján pedig egy gomb található (View full menu), mely elvisz egy másik oldalra - itt lelhető a teljes menü
    - a tetején található keresősáv "dinamikusan", gomb megnyomása nélkül, automatikusan keres és szűr egyben.
    - a kártyák (amikben az ételek képei, árai és nevei találhatóak) képernyőmérettől függően rendeződnek kategóriánként sor(ok)ba, ezzel biztosítva a széleskörű olvashatóságot
    - ezek alján 2 gomb van:
        - a "details" gombra kattintva elhomályosul a háttér, és előtérbe kerül az adott étel képe és neve, valamint egy rövid leírás társul hozzá
        - a kosár gomb pedig kosárba helyezi az adott árut a megnyomás mennyiségeszer (a részletes nagyegységben egyaránt van ilyen gomb)
- ezen kívül még egy blog és egy értékeléses rész színesíti az oldalt
- ezek alatt található egy térkép, illetve mellette pár adat megadása és egy üzenet megírása után lehet üzenni is
    > Figyelem! A térkép a legtöbb telefonon nem elérhető, ennek láthatósági okai vannak
- a láblécben pedig elérhetőségi címek és a nyitvatartásunk látható
- a bal felső sarkokban (mindkét oldalon) található egy kiskosár ikon, s ennek egyszeri megnyomásakor előjön egy kisablak, melyben minden kosarazott termék (a megfelelő mennyiségben) megjelenik, s ezeknek egység- és teljes ára is látszik
    - a "Purchase" kattintásra tudomásul veszi a vásárlást, majd kiüresití kosarunk


### Fejlesztői útmutató

### Felépítés 

-**index.html**: Meghatározza az étterem oldal HTML-Struktúráját, a főbb elemeket.
-**style.css**: Az oldal megjelenéséért felelős stílusokat tartalmazza, a kosár, a kártyák és contact kinézetért felel.
-**app.js**: Az oldal funkcióit ideértve a kosárba helyezés és annak felépítése, a preloader megjelenése, a hamburger menü megjelenése, az elemek becsuszása, a menü kártyák csúszka vezérlésért és a világos-sötét mód megjelenítését tartalmazza.

### Feladatok elosztása

-Dizájn és a fő weboldal kinézete: Domán Martin és Szabó Bence
-A menu oldalon lévő kártyák kinézete, a felugró kártya működése: Czmorek Ákos és Szabó Bence
- fő oldal funkciói: Domán Martin és Szabó Bence
- keresés és bejelentkezés: Szabó Bence
- A szerencskerék weboldal kinézete és funkciói: Czmorek Ákos

### Github hazsnálata

-Mindenki eleinte a saját branchet haznált majd a main nevű branchben összesítettünk és itt folytattuk tovább a munkát.
-**Commit üzenetek formája**: Rövid, érthető üzenetek

### Fejlesztő környezetek, programozási nyelvek

**Fejleszető környezet**: Visual Studio Code
**Programozási nyelvek**: HTML, CSS, Javascript

### Főbb funkciók

**Kosár**: A add to card gomb lenyomásakor egy shopping cart Html elemben létrejön egy kártya div amelyet el lehet távolítani és növelni a számát. A növelés hatására a shopping cart-ban lévő ár folyamatosan frissíti magát. A purchase gomb megnyomával a kosár kiürül és alert-ben megköszöni a vásárlást.

**Preloader**: Az oldal betöltése közben megjelenik a weboldal lógójával ellátot töltés animáció. Amikor az oldal betöltődött a preloader elűtnik.

**kártya csúszka vezérlés**: A kártyák közti váltogatás létrehozása a nyíl segítségével. A nyíl mellett a húzás lehetőséget is létrehozza. 

