// (1) Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso il for in tutte le proprietà.
// (2) Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// (3) Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// ****** Prima parte *****
// 1) Creare un oggetto con delle proprietà.
var studente = {
  nome : 'Federico',
  cognome : 'Rossi',
  eta : 26
};
// 2) Stampare tutte le proprietà dell'oggetto.
for (var key in studente) {
  // console.log(studente[key]);
}

// ****** Seconda parte *****
// 1) Creare un array di oggetti.
var studenti = [
  {
    nome : 'Federico',
    cognome : 'Rossi',
    eta : 26
  },
  {
    nome : 'Alessio',
    cognome : 'Verdi',
    eta : 18
  },
  {
    nome : 'Francesco',
    cognome : 'Neri',
    eta : 30
  }
];

// 2) Stampare nome e cognome di ognuno.
for (var i = 0; i < studenti.length; i++) {
  // console.log(studenti[i].nome);
  // console.log(studenti[i].cognome);
}

// ****** Terza parte *****
// 1) Inserire i prompt da chiedere all'utente.
var nome = prompt('Inserisci il nome:');
var cognome = prompt('Inserisci il cognome:');
var eta = parseInt(prompt('Inserisci l\'età:'));

// 2) Aggiungere un nuovo oggetto dentro l'array studenti.
// PRIMO METODO: pusho direttamente l'oggetto creato dentro l'array.
studenti.push({
  nome : nome,
  cognome : cognome,
  eta : eta
});

// SECONDO METODO: creo una variabile dentro la quale inserisco il nuovo oggetto. Dopo pusho la variabile dentro l'array.
// var nuovoOggetto = {
//   nome : nome,
//   cognome : cognome,
//   eta : eta
// };
// studenti.push(nuovoOggetto);

console.log(studenti);
