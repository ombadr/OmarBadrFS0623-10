/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']

for (const pet of pets) {
  console.log('ESERCIZIO 1: ' + pet)
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

console.log('ESERCIZIO 2: ' + pets.sort())


/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

console.log('ESERCIZIO 3: ' + pets.reverse())

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

const firstElement = pets.shift()

pets.push(firstElement)


console.log('ESERCIZIO 4: ' + pets) //

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]


for (const car of cars) {
  let plateValue = Math.floor(Math.random() * 100000)
  car['licensePlate'] = plateValue
}

console.log(cars)

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

const newCar = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red',
  trims: ['EcoBoost', 'GT', 'Shelby GT500']
}

cars.push(newCar)

for (const car of cars) {
  car.trims.pop()
}

console.log(cars)
/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []

for (const car of cars) {
  let firstElement = car.trims.shift();
  justTrims.push(firstElement)
}

console.log(justTrims)

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (const car of cars) {
  if (car.color.charAt(0) === 'b') {
    console.log('Fizz')
  } else {
    console.log('Buzz')
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let i = 0

do {
  console.log(numericArray[i])
  i++
} while (numericArray[i] !== 32)

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']

const alfabeto = 'abcdefghijklmnopqrstuvwxyz'.split('')

const newArr = []

for (const character of charactersArray) {

  switch (character) {

    case 'a':
      newArr.push(alfabeto.indexOf(character) + 1)
      break
    case 'b':
      newArr.push(alfabeto.indexOf(character) + 1)
      break
    case 'c':
      newArr.push(alfabeto.indexOf(character) + 1)
      break
    case 'd':
      newArr.push(alfabeto.indexOf(character) + 1)
      break
    case 'e':
      newArr.push(alfabeto.indexOf(character) + 1)
      break
    case 'f':
      newArr.push(alfabeto.indexOf(character) + 1)
      break
    case 'g':
      newArr.push(alfabeto.indexOf(character) + 1)
      break
    case 'h':
      newArr.push(alfabeto.indexOf(character) + 1)
      break
    case 'i':
      newArr.push(alfabeto.indexOf(character) + 1)
      break
    case 'j':
      newArr.push(alfabeto.indexOf(character) + 1)
      break
    case 'k':
      newArr.push(alfabeto.indexOf(character) + 1)
      break
    case 'l':
      newArr.push(alfabeto.indexOf(character) + 1)
      break
    case 'm':
      newArr.push(alfabeto.indexOf(character) + 1)
      break
    case 'n':
      newArr.push(alfabeto.indexOf(character) + 1)
      break
    case 'o':
      newArr.push(alfabeto.indexOf(character) + 1)
      break
    case 'p':
      newArr.push(alfabeto.indexOf(character) + 1)
      break
    case 'q':
      newArr.push(alfabeto.indexOf(character) + 1)
      break
    case 'r':
      newArr.push(alfabeto.indexOf(character) + 1)
      break
    case 's':
      newArr.push(alfabeto.indexOf(character) + 1)
      break
    case 't':
      newArr.push(alfabeto.indexOf(character) + 1)
      break
    case 'u':
      newArr.push(alfabeto.indexOf(character) + 1)
      break
    case 'v':
      newArr.push(alfabeto.indexOf(character) + 1)
      break
    case 'w':
      newArr.push(alfabeto.indexOf(character) + 1)
      break
    case 'x':
      newArr.push(alfabeto.indexOf(character) + 1)
      break
    case 'y':
      newArr.push(alfabeto.indexOf(character) + 1)
      break
    case 'z':
      newArr.push(alfabeto.indexOf(character) + 1)
      break
    default:
      console.log('INVALID VALUE')
  }

}

console.log(newArr)