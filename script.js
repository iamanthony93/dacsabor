let frutas = ["pera", "manzana", "banana"];

function Persona() {
  this.nombre = "melo";
}
let OtraFruta = frutas.map(function (el) {
  el = el + "s";
  console.log(this);
  return el;
}, frutas);

console.log(OtraFruta);
// let nums = [9, 4, 25];

// function multiplicar(num, arr) {
//   console.log(arr);
//   num = num * 2;
//   return num;
// }
// console.log(nums.map(multiplicar));
