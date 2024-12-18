# SPD-Proj3 - Egy étterem , avagy a "Fiery Fork Restaurant" oldaltörténete

# "Kemencétől az asztaláig!"

## A projekt célja

Ez a projektmunka eredetileg azzal a céllal indult, hogy egy interaktív éttermi oldalt készítünk el. Az eddig megszokott, már-már hagyományos elemek (pl. HTML kártyák) mellett különböző interakciós részeket (pl. dinamikus tartalomhívás; ajánlat szűrése, keresése; kosár használata) szándékoztunk beilleszteni.

## Működése (felhasználó)

- ### angol nyelv ismerete ajánlott!
- eleinte egy étterem weboldalának főoldala látható, melynek részei közt görgetéssel vagy a fenti menüpontokkal lehet mozogni
- az egyes pontok betöltődéskor valamely oldalról "belebegnek", ezzel is építve az ergonómikusságát a weblapnak
- menünk vizsgálatakor az ételek között az oldalsó nyilakkal és húzással, oldalgörgetéssel egyaránt lehet lépni, e szekció alján pedig egy gomb található (View full menu), mely elvisz egy másik oldalra - itt lelhető a teljes menü
    - a tetején található keresősáv "dinamikusan", gomb megnyomása nélkül, automatikusan keres és szűr egyben.
    - a kártyák (amikben az ételek képei, árai és nevei találhatóak) képernyőmérettől függően rendeződnek kategóriánként sor(ok)ba, ezzel biztosítva a széleskörű olvashatóságot
    - ezek alján 2 gomb van:
        - a "details" gombra kattintva elhomályosul a háttér, és előtérbe kerül az adott étel képe és neve, valamint egy rövid leírás társul hozzá
        - a kosár gomb pedig kosárba helyezi az adott árut a megnyomás mennyiségeszer
- ezen kívül még egy blog és egy értékeléses rész színesíti az oldalt
- ezek alatt található egy térkép, illetve mellette pár adat megadása és egy üzenet megírása után lehet üzenni is
    > Figyelem! A térkép a legtöbb telefonon nem elérhető, ennek láthatósági okai vannak
- a láblécben pedig elérhetőségi címek és a nyitvatartásunk látható
    > Az X, Instagram és Facebok névre rákattintva eljuthat közösségi médiáinkra
- a bal felső sarkokban (mindkét oldalon) található egy kiskosár ikon, s ennek egyszeri megnyomásakor előjön egy kisablak, melyben minden kosarazott termék (a megfelelő mennyiségben) megjelenik, s ezeknek egység- és teljes ára is látszik
    - a "Purchase" kattintásra tudomásul veszi a vásárlást, majd kiüresití kosarunk



### Fejlesztői útmutató

### Felépítés 

-**menu.html**: Meghatározza a menu oldal HTML-Struktúráját, a főbb elemeket.
-**menu.css**: Az oldal megjelenéséért felelős stílusokat tartalmazza az oldal kinézetért felel.
-**menu.js**: Az oldal funkcióit ideértve a felugró kártyák dinamikus generálását, és azok megjelenítését tartalmazza.
-**spin_wheel.html**: Meghatározza a szerencskerék oldal HTML-Struktúráját, a főbb elemeket.
-**spin_wheel.css**: Az oldal megjelenéséért felelős stílusokat tartalmazza az oldal kinézetért felel.
-**spin_wheel.js**: Az oldal funkcióit ideértve a forgás működését, és az eredmén kiírását tartalmazza.
-**texts.js**: A felugró kártyák szövegeit, és azok kiíratását kiírását tartalmazza.

### Feladatok elosztása

- Dizájn és a fő weboldal kinézete: Domán Martin és Szabó Bence
- A menu oldalon lévő kártyák kinézete, a felugró kártya működése: Czmorek Ákos és Szabó Bence
- fő oldal funkciói: Domán Martin és Szabó Bence
- keresés és bejelentkezés: Szabó Bence
- A szerencskerék weboldal kinézete és funkciói: Czmorek Ákos
- Szöveg megírésa: Domán Martin

### Github hazsnálata

-Mindenki eleinte a saját branchet haznált majd a main nevű branchben összesítettünk és itt folytattuk tovább a munkát.
-**Commit üzenetek formája**: Rövid, érthető üzenetek

### Fejlesztő környezetek, programozási nyelvek

**Fejleszető környezet**: Visual Studio Code
**Programozási nyelvek**: HTML, CSS, Javascript

### Főbb funkciók amiket én készítettem

**A felugró kártyák**: A "details" gombra kattintva elhomályosul a háttér, és előtérbe kerül az adott ételhez tartozó dinamikusan létre hozott nagy kártya, és egy overlay ami azért felel hogy az oldal ne legyen kattintható, és görgethető.

**A footer**: Az oldal alján látható egy sáv ahol az elérhetőségek, social - media linkek, nyitvatartás, és a szlogenünk található.

**A szerencskerék weboldal**: A menu oldal navigációjában található egy gomb ami elvisz egy új oldalra. ott van egy szerencsekerék amyelyen 1x lehet pörgetni, és a végén kiírja hogy mit pörgettél. Szerettem volna implementálni a kapott eredméynt a vásárláshoz is de már nem volt rá idő és túl bonyolult lett volna. 

## Tesztelés 

**Tesztelt Funkciók**

| Tesztelt Funkció          |            Bemenet              |                                 Várt Eredmény                                       |                             Tényleges eredmény                                      | Megjegyzés |
|---------------------------|---------------------------------|-------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------|------------|
| nagy kárty működése       | detailsre kattintás             | felugrik a nagy kártya, az overlay miatt nem működik az oldal                       | felugrik a nagy kártya, az overlay miatt nem működik az oldal                       |   átment   |
| szöveg kiírása            | detailsre kattintás             | a nagy kártyákon megjelenik a texts.js ben lévő megfelelő szöveg                    | a nagy kártyákon megjelenik a texts.js ben lévő megfelelő szöveg                    |   átment   |
| A kipörgetett szám kiírása| a spin gombra kattintás         | a kerék pörgését befejezve jelenjen meg a várt szöveg                               | a kerék pörgését befejezve jelenjen meg a várt szöveg                               |   átment   |



> ### A dokumentáció készítője Czmorek Ákos