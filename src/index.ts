console.log("ciao, prima prova TS");

const somma = (a: number, b: number) => a + b;
console.log(somma(3, 5));

let persona: {
  nome: "gigi";
  cognome: "rossi";
  età: number;
  indirizzo: {
    via: string;
    civico: number;
    città: string;
  };
};

persona = {
  nome: "gigi",
  cognome: "rossi",
  età: 90,
  indirizzo: {
    via: "",
    civico: 90,
    città: "an",
  },
};

const getData = (data: { id: number; username: string; password: string }) => {
  console.log(data.id);
};

const array: number[] = [1, 2, 3];

const tupla: [number, string] = [1, "2"];

const qualunque: any[] = [1, "ciao"];

// let errore: string | number = true

let prova2: string | number | any[] = ["", 2];

type Cane = {
  nome: string;
  cognome: string;
  età: number;
};

let cane: Cane;

type Prova = string | number;
const y: Prova = "ecco";

// ENUM, NUMERAZIONE , CREO QUALCOSA DI FACILE DA MANTERE E RICHIAMARE
enum Ruolo {
  ADMIN = "admin",
  USER = "user",
}
const Human = {
  nome: "gigi",
  cognome: "rossi",
  ruole: Ruolo.ADMIN,
};

// INDICO IL TIPO DI RITORNO DELLA FUNZIONA
const difference = (num1 = 1, num2: number): number => num1 - num2;

console.log(difference(10, 5));

// RITORNO VUOTO, UNDEFINED PER JS, SONO 2 COSE DIVERSE PER JS E TS, IN TS VUOL DIRE CH ENON C'è RETURN
const vuoto = (num1 = 1, num2: number): void => console.log();

console.log("VOID", vuoto(5, 8));

// UNDEFINED, C'è RETURN ANCHE SE UNDEFINED
const undef = (num1 = 1, num2: number): undefined => {
  console.log();
  return undefined;
};

//////////////////////////////////////////////////
