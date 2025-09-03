# A. Introduktion 

I TypeScript används interfaces och types för att beskriva strukturen på data och skapa tydligare, säkrare kod. De hjälper utvecklare att definiera vilka fält och metoder som ska finnas i ett objekt, och gör det lättare att upptäcka fel redan vid kompilering istället för under körning.
Interface används ofta för att beskriva formen på objekt, särskilt när flera delar av programmet ska följa samma struktur.

Type alias används för att ge namn åt vilken typ som helst – inte bara objekt – till exempel unionstyper, primitiva typer eller mer komplexa kombinationer.

## Varför använder man interfaces och types?

För att strukturera data
 Om du har en kontaktbok kan du skapa ett Contact-interface:
```
 interface Contact {
  id: string;
  name: string;
  email: string;
}
```
 Nu vet TypeScript att varje Contact-objekt måste ha dessa fält.


För att skapa flexibla typer
 Med type kan du kombinera olika alternativ:
```
 type ContactMethod = "email" | "phone" | "sms";
```
Här blir ContactMethod en unionstyp som bara tillåter tre specifika strängvärden.
För att återanvända och dela kontrakt mellan delar av koden
Om flera funktioner behöver hantera en User, kan ett interface eller type definiera exakt vad en User är – och TypeScript varnar om något saknas eller är fel.

# B. Vanliga fel och felsökning

### 1. Man kan skriva ner fel primitiv datatyp på vissa fält
Felmeddelande: TS2322: Type 'number' is not assignable to type 'string'.
Lösning: Lösningen är att antingen konvertera värdet till rätt typ, ändra deklarationen av variabeln, eller tillåta en union beroende på vad du vill uppnå.

### 2. Det är lätt att förväxla Type och interface. Som till exempel när man använder extends på ett Type. 
interface används främst för att beskriva objektstrukturer och klasser medan type alias kan användas för allt: unioner, primitive types och function types m.m.
exempel på fel på extends:
```
type Person = {
  id: string;
  name: string;
};
// Försöker felaktigt använda 'extends' på ett type alias:

interface Employee extends Person {
  role: string;
}
```
Felmeddelande: TS2312: An interface can only extend an object type or intersection of object types with statically known members.
Lösning: Vill du använda extends ➝ byt type till interface.
Vill du stanna kvar i type ➝ använd & (intersection) istället.

### 3. optional vs undefined. Ett ? bakom till exempel name? betyder att property kan vara saknad eller undefined, vilket kan orsaka buggar om man inte kontrollerar värdet ordentligt.

Här har vi ett felmeddelande med optional:
```
interface Person {
  id: number;
  name?: string;
}
const p: Person = { id: 1, name: null };
```
Felmeddelande: Type 'null' is not assignable to type 'string | undefined'

Lösning: Det finns några lösningar på detta problem, en lösning är att man använder sig av undefined istället för null. Man skulle även kunna låta bli att sätta name i 
const p: Person = { id: 1, name: null }; eftersom vi har satt optional på name med ett ? bakom.

# C. Ert kompletta program

I vårt projekt används både interface och type för att strukturera och göra koden mer strukturerad, säkrare, läsbar och flexibel.

### Vi använder type alias för att mer läsbar och lättare att förstå:
```
export type ContactID = string;
export type ContactName = string;
export type CompanyName = string;
```

### Vi använder Union Type för att göra det mer tydligt om vad för datatyper som ska finnas inom fältet: 
```
export type PhoneNumberType = 'Mobile' | 'Home' | 'Work' | 'Other';
```
Här kan man se att PhoneNumberType ska bara vara mellan  'Mobile',  'Home',  'Work' eller 'Other’. 

### Vi använder interface Contact för att definiera hur en kontakt ska se ut:
```
interface Contact {
  readonly id: ContactID;
  name: ContactName;
  emails: Email[];
  phones?: PhoneNumber[]; // valfritt fält
  address?: Address[]; // valfritt fält
  companyName: CompanyName;
}
```

### Här är ett exempel på hur man kan fylla ut interface Contact:
```
const anna: Contact = {
  id: "1", // Unique contact ID
  name: "Anna Andersson", 
  emails: [{ type: "Personal", eaddress: "Anna@example.com" }], 
  phones: [{ type: "Mobile", number: "070-1234567" }], 
  address: [
    {
      street: "Lottavägen 10",
      postalCode: "00707",
      city: "Nuerdetmellis",
      country: "Sweden",
    },
  ], // Full address information
  companyName: "ACME Corp", // Associated company
};
```

Detta gör att alla funktioner som jobbar med kontakter vet exakt vilka fält som finns. Om man försöker skapa en kontakt utan name eller email, får man ett TypeScript-fel.

### Valfria fält (?)
```
export interface Contact {
  readonly id: ContactID;   // Unique ID, cannot be changed once assigned
  name: ContactName;        // Full name of the contact
  emails: Email[];          // A list of associated email addresses
  phones?: PhoneNumber[];   // Optional list of phone numbers
  address?: Address[];      // Optional list of addresses
  companyName: CompanyName; // Company associated with the contact
}
```
Här syns fördelen med phones? och address? – de behöver inte finnas på alla kontakter.

## Instruktioner för hur man kör programmet:

### 1. Börja med att kompilera Typescript genom att köra npx tsc i kommandotolken i visual studio.

### 2. Sedan ska du köra programmet med Node.js, för att göra det skriver du in node dist/index.js i kommandotolken i Visual Studio. När du skriver det så kommer programmet att starta och skriva ut alla kontakter i konsolen. 

### 3. Skapa en egen contact genom att följa denna templet: 
``` 
const anna ( förnamnet på kontaktpersonen ska vara här ): Contact = {
  id: "1", // Här ska du skriva in det näst högsta id nummer
  name: "Anna Andersson", // Här skriver du för och efternamn på personen
  emails: [{ type: "Work" // Här ska du skriva ner vilken typ av email denna e-postadress är (du kan välja mellan Personal, Work eller Other. Glöm inte stor bokstav på första bokstaven), eaddress: "Anna@example.com" //Här skriver du in e-postadressen }], 
  phones: [{ type: "Mobile" // Här ska du skriva ner vilken typ av telefonnummer som detta nummer är (du kan välja mellan Mobile, Work, Home eller Other. Glöm inte stor bokstav på första bokstaven), number: "070-1234567" //Här skriver du ner telefonnumret}], 
  address: [
    {
      street: "Lottavägen 10", // Här skriver du vilken gata som personen bor på
      postalCode: "00707", // Här skriver du vad för postnummer de har
      city: "Nuerdetmellis", // Här skriver du vilken stad som personen bor i
      country: "Sweden", // Här skriver du vilken land personen kommer från
    },
  ], // Full address information
  companyName: "ACME Corp", // Här skriver du ner vilken företag som personen jobbar på
}; 
```

# D. Övningsuppgift

Ni ska ska lägga till en funktion för att räkna antalet kontakter. 

instruktion:
 Skapa en funktion som returnerar hur många kontakter som finns i listan just nu. 
här kommer ett exempel på funktionens signatur: export function countContacts(): number

ledtrådar: 
1. Du har redan en array som heter contacts. 
2. kom ihåg att en array har en property som berättar hur många element den innehåller 
3. testa gärna funktionen med en console.log




