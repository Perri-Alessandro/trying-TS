"use strict";
console.log("ciao, prima prova TS");
const somma = (a, b) => a + b;
console.log(somma(3, 5));
let persona;
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
const getData = (data) => {
    console.log(data.id);
};
const array = [1, 2, 3];
const tupla = [1, "2"];
const qualunque = [1, "ciao"];
// let errore: string | number = true
let prova2 = ["", 2];
let cane;
const y = "ecco";
// ENUM, NUMERAZIONE , CREO QUALCOSA DI FACILE DA MANTERE E RICHIAMARE
var Ruolo;
(function (Ruolo) {
    Ruolo["ADMIN"] = "admin";
    Ruolo["USER"] = "user";
})(Ruolo || (Ruolo = {}));
const Human = {
    nome: "gigi",
    cognome: "rossi",
    ruole: Ruolo.ADMIN,
};
// INDICO IL TIPO DI RITORNO DELLA FUNZIONA
const difference = (num1 = 1, num2) => num1 - num2;
console.log(difference(10, 5));
// RITORNO VUOTO, UNDEFINED PER JS, SONO 2 COSE DIVERSE PER JS E TS, IN TS VUOL DIRE CH ENON C'è RETURN
const vuoto = (num1 = 1, num2) => console.log();
console.log("VOID", vuoto(5, 8));
// UNDEFINED, C'è RETURN ANCHE SE UNDEFINED
const undef = (num1 = 1, num2) => {
    console.log();
    return undefined;
};
//////////////////////////////////////////////////
