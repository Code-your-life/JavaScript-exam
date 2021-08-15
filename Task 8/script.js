/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator(num1, num2) {
  this.num1 = num1;
  this.num2 = num2
  this.sum = function () {
    return this.num1 + this.num2;
  };
  this.subtraction = function () {
    return this.num1 - this.num2;
  };
  this.multiplication = function () {
    return this.num1 * this.num2;
  };
  this.division = function () {
    return this.num1 / this.num2;
  };
}



const test = new Calculator(5, 6)
console.log(test.sum())
console.log(test.subtraction())
console.log(test.multiplication())
console.log(test.division())

const test1 = new Calculator(256, 365)
console.log(test1.sum())
console.log(test1.subtraction())
console.log(test1.multiplication())
console.log(test1.division())