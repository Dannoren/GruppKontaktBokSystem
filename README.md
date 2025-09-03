# Förståelse och Användning av Interfaces och Types i TypeScript

Detta dokument ger en introduktion till `interfaces` och `types` i TypeScript, vanliga fel, praktiska exempel från ett kontaktboksprogram samt en övningsuppgift.

## A. Introduktion

### Förklara konceptet på ett begripligt sätt

I TypeScript används `interfaces` och `types` för att beskriva strukturen på data och skapa tydligare, säkrare kod. De hjälper utvecklare att definiera vilka fält och metoder som ska finnas i ett objekt, och gör det lättare att upptäcka fel redan vid kompilering istället för under körning.

-   **Interface** används ofta för att beskriva formen på objekt, särskilt när flera delar av programmet ska följa samma struktur.
-   **Type alias** används för att ge namn åt vilken typ som helst – inte bara objekt – till exempel unionstyper, primitiva typer eller mer komplexa kombinationer.

### Varför använder man interfaces och types?

#### För att strukturera data
Om du har en kontaktbok kan du skapa ett `Contact`-interface:

```typescript
interface Contact {
  id: string;
  name: string;
  email: string;
}

Nu vet TypeScript att varje Contact-objekt måste ha dessa fält.

För att skapa flexibla typer

Med type kan du kombinera olika alternativ:
TypeScript

type ContactMethod = "email" | "phone" | "sms";

Här blir ContactMethod en unionstyp som bara tillåter tre specifika strängvärden.

För att återanvända och dela kontrakt mellan delar av koden

Om flera funktioner behöver hantera en User, kan ett interface eller type definiera exakt vad en User är – och TypeScript varnar om något saknas eller är fel.

B. Vanliga fel och felsökning

Här är några vanliga fel som nybörjare gör, tillsammans med felmeddelanden och lösningar.

1. Fel primitiv datatyp på vissa fält

Man råkar tilldela ett värde av fel typ till ett fält.

Felmeddelande:
TS2322: Type 'number' is not assignable to type 'string'.

Lösning:
Lösningen är att antingen konvertera värdet till rätt typ, ändra deklarationen av variabeln, eller tillåta en union beroende på vad du vill uppnå.

2. Förväxling av type och interface (t.ex. extends på ett type)

interface används främst för att beskriva objektstrukturer och klasser, medan type alias kan användas för allt: unioner, primitiva typer, funktionstyper m.m. Det är vanligt att felaktigt försöka utöka ett type med extends.

Exempel på fel:
TypeScript

type Person = {
  id: string;
  name: string;
};

// Försöker felaktigt använda 'extends' på ett type alias
interface Employee extends Person {
  role: string;
}

Felmeddelande:
TS2312: An interface can only extend an object type or intersection of object types with statically known members.

Lösning:

    Alternativ 1: Om du vill använda extends, ändra Person från type till interface.

    Alternativ 2: Om du vill fortsätta använda type, använd en intersection (&) för att kombinera typerna:
    TypeScript

    type Employee = Person & {
      role: string;
    };

3. Förvirring mellan optional (?) och undefined

Ett ? efter ett fältnamn (t.ex. name?: string) betyder att egenskapen kan vara helt utelämnad eller ha värdet undefined. Det kan orsaka buggar om man inte hanterar detta korrekt och till exempel försöker tilldela null.

Exempel på fel:
TypeScript

interface Person {
  id: number;
  name?: string;
}

const p: Person = { id: 1, name: null };

Felmeddelande:
Type 'null' is not assignable to type 'string | undefined'.

Lösning:

    Lösning 1: Använd undefined istället för null.

    Lösning 2: Utelämna fältet name helt från objektet, eftersom det är valfritt.
    TypeScript

const p: Person = { id: 1 }; // Helt korrekt!

Lösning 3: Om null måste tillåtas, lägg till det i typdefinitionen:
TypeScript

    interface Person {
      id: number;
      name?: string | null;
    }

C. Vårt kompletta program

Presentera programmet med tydliga kommentarer

I vårt projekt används både interface och type för att strukturera och göra koden mer säker, läsbar och flexibel.

Type alias för läsbarhet

Vi använder type alias för att ge mer beskrivande namn till primitiva typer:
TypeScript

export type ContactID = string;
export type ContactName = string;
export type CompanyName = string;

Union Type för begränsade val

Vi använder en union type för att säkerställa att endast specifika värden tillåts för ett fält:
TypeScript

export type PhoneNumberType = 'Mobile' | 'Home' | 'Work' | 'Other';

Här kan PhoneNumberType bara vara en av de fyra specificerade strängarna.

Interface för att definiera datastruktur

Vi använder ett interface för att definiera den exakta strukturen för ett Contact-objekt:
TypeScript

// Beskriver strukturen för en kontaktperson
export interface Contact {
  readonly id: ContactID;   // Unikt ID som inte kan ändras
  name: ContactName;        // Fullständigt namn
  emails: Email[];          // En lista med e-postadresser
  phones?: PhoneNumber[];   // Valfri lista med telefonnummer
  address?: Address[];      // Valfri lista med adresser
  companyName: CompanyName; // Företaget kontakten är associerad med
}

Detta säkerställer att alla funktioner som hanterar kontakter vet exakt vilka fält som finns. TypeScript kommer att varna om man försöker skapa en kontakt utan name eller emails.

Exempel på en kontakt:
TypeScript

const anna: Contact = {
  id: "1", // Unikt ID
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
  ],
  companyName: "ACME Corp",
};

Valfria fält (?)
Fälten phones? och address? är valfria. Det innebär att en kontakt kan skapas utan dem, vilket gör vår datamodell mer flexibel.

Inkludera instruktioner för hur man kör programmet

    Kompilera TypeScript: Öppna kommandotolken i Visual Studio Code och kör följande kommando för att omvandla TypeScript-koden till JavaScript.
    Bash

npx tsc

Kör programmet: Använd Node.js för att exekvera den kompilerade koden. Programmet kommer att starta och skriva ut alla kontakter i konsolen.
Bash

node dist/index.js

Skapa en egen kontakt: Följ mallen nedan för att lägga till en ny kontakt i koden.
TypeScript

    const dinKontakt: Contact = {
      id: "2", // Här ska du skriva in det näst högsta id-numret
      name: "Ditt Namn", // Här skriver du för- och efternamn
      emails: [{ type: "Work", eaddress: "din.email@example.com" }], // Typ: 'Personal', 'Work' eller 'Other'
      phones: [{ type: "Mobile", number: "070-9876543" }], // Typ: 'Mobile', 'Work', 'Home' eller 'Other'
      address: [
        {
          street: "Din Gata 1", // Här skriver du vilken gata som personen bor på
          postalCode: "12345", // Här skriver du vad för postnummer de har
          city: "Din Stad", // Här skriver du vilken stad som personen bor i
          country: "Sweden", // Här skriver du vilket land personen kommer från
        },
      ],
      companyName: "Ditt Företag", // Här skriver du ner vilket företag som personen jobbar på
    };

D. Övningsuppgift

Utöka eller modifiera programmet

Din uppgift är att lägga till en funktion som räknar det totala antalet kontakter som finns i systemet.

Instruktion:
Skapa en funktion som returnerar hur många kontakter som finns i listan just nu. Här är funktionens signatur som du ska implementera:
TypeScript

export function countContacts(): number

Ledtrådar:

    Du har redan en array som heter contacts.

    Kom ihåg att en array har en inbyggd egenskap (property) som berättar hur många element den innehåller.

    Testa gärna din funktion genom att anropa den och skriva ut resultatet med console.log.
