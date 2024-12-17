<figure style="position: relative;">
<image src="logo.png" style="position: absolute; top: 1rem; left: 1rem;">
<image src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.themixer.com%2Fen-uk%2Fwp-content%2Fuploads%2Fsites%2F3%2F2022%2F07%2F240.US_What-are-the-6-Basic-Cocktails_Canva_MAETwXrV7rQ-the-rose-exotic-cocktails-and-fruits-on-pink-760x380.jpg&f=1&nofb=1&ipt=36148d1ede41d055b08a01be00158852736477beeec8eabc97f38ff1edb8bcf0&ipo=images">
</figure>

# Inlämningsuppgfit Grundläggande Programmering - The Cocktail DB

<details open>
  <summary>Table of Content</summary>

- [Instruktioner](#instruktioner)
- [Allmän information](#allmän-information)
- [G-Krav](#g-krav)
- [VG-krav](#vg-krav)
- [Inlämning](#inlämning)
- [Ord från Niklas](#ord-från-niklas)

</details>

## Instruktioner

Du ska bygga ett cocktail-wiki som hämtar data från API:et [The Cocktail DB API](https://www.thecocktaildb.com/api.php) och visar upp det i din applikation. Gå in på detta API:et och läs igenom vilka olika URL:er _( endpoints )_ som finns, och prova att trycka på de för att få en känsla av hur de funkar innan ni börjar koda. Ni har fått bas-filerna som ni behöver för att komma igång samt en hjälpfunktion som ni kan använda för att konvertera de "råa" cocktail objekten till lite mer lättarbetade objekt.

Vill man få lite inspiration om hur ett sådant Wiki kan se ut så får man gärna kolla in deras egna sida: [The Cocktail DB Home Page](https://www.thecocktaildb.com/).

Forka ner detta repo och börja koda! Eller ta ner det som zipfiler och öppna upp det i ert Visual Studio Code.

## Allmän information

Kraven är uppdelade i G- och VG-nivå. För att få G så måste man givetvis klara alla G-kraven och vill man sikta på VG så behöver man klara båda G- och VG-kraven.

För att applikationen ska uppfylla de olika kraven så behöver applikationen innehålla vissa typer av funktionaliteter. Hur dessa funktionaliteter implmenteras är givietvis upp till er, jag som rättare av uppgiften ska enkelt kunna starta en live-server med er applikation och inspektera att det betyget som ni siktar på är uppfyllt.

Med det sagt så kommer jag ändå att kolla in er kod för att bedöma kvaliten på den. Att kopiera kod från exempelvis chat-gpt är inte tillåten, och misstänker jag att koden är plagierad eller liknande så kommer jag ta ett individuellt möte med personen i fråga för att ställa kontrollfrågor. Detta för att kunna göra en rättvis bedömning av alla elever.

[Tillbaks till toppen](#inlämningsuppgfit-grundläggande-programmering---the-cocktail-db)

## G-Krav

### Bygga applikationen med vanilla JavaScript, HTML och CSS

### En navbar med två länkar. "Home" och "Search". De ska gå till respektive "sida".

- Jag skriver "sida" med citattäcken för att applikationen behöver absolut inte bestå av flera HTML-dokument, det kan lika gärna bara vara innehåll som visas eller döljs beroende på vad man trycker på.

### En startsida/landningssida enligt följande:

- Använderen ska bli presenterad med en randomiserad cocktail varje gång användaren besöker startsidan.

- Om användaren inte är "nöjd" med cocktailen som visas så ska det finnas ett knapp man kan trycka på för att generera en ny cocktail.

- Namnet och bilden på cocktailen ska presenteras.

- Det ska finnas en knapp/länk med **"See more"** som ska leda till detaljsidan om den specifika cocktailen. _( mer information nedan om detaljsidan)_

- URL för att hämta en randomiserad cocktail: `www.thecocktaildb.com/api/json/v1/1/random.php`

### Detailjsida enligt följande:

- Denna sida ska endast vara tillgänglig via startsidan eller söksidan _( mer information om söksidan längre ner)_

- På denna sida ska användaren presenteras med detaljerad information om den valda cocktailen. Följande information ska finnas:

  - Kategori
  - Bild
  - Taggar
  - Instruktioner hur man gör den
  - Ingredienser och mängder
  - Vilket glas den ska serveras i

- URL för detaljerad information: `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`

### Söksida enligt följande

- Användare ska kunna söka på cocktails efter namn

- Sidan ska innehålla ett formulär för sökningen

- Sökresultaten ska visas som en lista med namnet på de olika cocktailsen.

- Klickar man på en cocktail i listan ska man komma till detaljsidan för den cocktailen.

- URL för att söka efter en cocktail efter namn: `www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}
`

[Tillbaks till toppen](#inlämningsuppgfit-grundläggande-programmering---the-cocktail-db)

## VG-Krav

### Söksida++

- Användaren ska även kunna söka efter dessa parametrar eller en kombination av dem:

  - Kategori
  - Ingredient
  - Glasstyp

- Sökformuläret ska innehålla relevant validering.

- Sökresultatet ska vara paginerat. Max 10 resultat per sida.

### Favoritsida

- Användare ska kunna spara sina favoritcocktails och kunna titta på de på en separat favoritsida.

- När användaren presenteras av en random cocktail, tittar på detaljsidan av en cocktail eller tittar på ett sökresultat av cocktails, så ska det synas om någon av de redan är en "favorit" eller inte.

- Användern ska kunna editera sina favoriter.

- Favoriter ska sparas i LocalStorage så de finns kvar till nästa gång som användren besöker sidan.

- Navbaren ska givetvis uppdateras så att man kan komma till favoritsidan också.

[Tillbaks till toppen](#inlämningsuppgfit-grundläggande-programmering---the-cocktail-db)

## Inlämning

Inlämning sker på Ominway senast fredagen den 20e klockan 23:59. Inlämning är ert githubrepo som inte får uppdateras efter det klockslaget.

[Tillbaks till toppen](#inlämningsuppgfit-grundläggande-programmering---the-cocktail-db)

## Ord från Niklas

`utilities.js`

I detta repo som ni ska forka eller ladda ner som zip så finns det en indexfil som heter utilites.js. Den innehåller en funktion för att konveratera den råa cocktail-datan ni får från API:et till ett mer lättarbetat objekt. Detta för att ge er lite hjälp på vägen. Om ni inspekterar den råa datan så tror jag ni kommer förstå vad jag menar. Denna funktion konverterar EN rå cocktail till en bearbetat cocktail så för att använda funktionen effektivt så bör den anropas i en loop eller arraymetod för att man ska kunna konvertera alla cocktailresultat till en skjysst array med bara bearbetade cocktails utan massa onödiga null-attribut och så. I övrigt kan ni bygga vidare på denna utilites-fil och läggain funktioner där som ni kan använda er utav i er applikation.

`Styling är valfritt!`

Eftersom det här är en kurs inom JavaScript så kommer er styling inte att bedömmas. Det betyder rent krasst att ni kan ha en applikation utan någon som helst CSS, och väljer ni att ha det så, så finns det inget jag kan göra angående det. Men jag skulle givetvis uppskatta lite styling så ni bygger en fin applikation! :) Dock rekommenderar jag att fokusera på logiken och HTML-strukturen först och ta stylingen sist. Ni är välkomna att använda CSS-ramverk om ni vill, såsom Bootstrap, MUI, tailwind eller liknande.

`Handledning`

De kommande två veckorna så är jag schemalagt på extra handledningspass för er skull. Så schemat ser ut som följande:

#### Vecka 50

- Måndag 9 dec - Handledning på distans. 09-16.
- Tisdag 10 dec - Handledning & genomgång om det behövs. På plats. 09-16
- Onsdag 11 dec - Handledning på distans. 09-16.
- Torsdag 12 dec - Handledning & genomgång om det behövs. På plats. 09-16

#### Vecka 51

- Måndag 16 dec - Handledning på distans. 09-16.
- Tisdag 17 dec - Handledning & genomgång om det behövs. På plats/Distans. 09-16
- Torsdag 19 dec - Handledning & genomgång om det behövs. På plats. 09-16

[Tillbaks till toppen](#inlämningsuppgfit-grundläggande-programmering---the-cocktail-db)

`Övrigt`

Förhoppningsvis kommer ni att tycka att uppgiften är riktigt rolig att utföra. Den kommer vara utmanande men den är också betygsgrundande så ni ska verkligen få en chans här att visa vad ni har lärt er. Lägg ner den tiden som krävs och kämpa på! Arbeta metodiskt och gör en sak, eller "sida" åt gången. Jag finns tillgänglig under de dagarna som jag är schemalagt så ni får gärna bolla med mig om ni vill. Bolla också med varandra men var försiktiga och se till att ni alla skapar er egna applikation med er egna kod. 