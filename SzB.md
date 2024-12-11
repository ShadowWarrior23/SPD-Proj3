# SPD-Proj3 - Egy étterem oldaltörténete

## A projekt célja

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

## Fejlesztés

- Fejlesztői- és segédfelületek
  - Visual Studio Code
  - Git, Github
  - Trello
  - Bootstrap
- 

> ### A dokumentáció készítője ShadowWarrior23/x (Bence)