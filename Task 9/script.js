/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kiru atveju false 
------------------------------------------------------------------------------------------------------ */
class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }
  wasExpensive() {
    return this.budget > 100000000 ? true : false
  }
}

const test = new Movie('Fast and Furious', 'Jonas Jonaitis', 500000000)
console.log(test.wasExpensive())
const test1 = new Movie('Fast and Furious', 'Jonas Jonaitis', 5000)
console.log(test1.wasExpensive())
