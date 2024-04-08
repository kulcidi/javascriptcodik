const numbers = [10, 4, 100, -5, 54, 2];

let cub = 0;


for (let i = 0; i < numbers.length; i++) {
  cub += numbers[i] ** 3;
}
console.log(cub);

let cub2 = 0;

for (let i of numbers) {
  cub2 += i ** 3;
}

console.log(cub2);

let cub3 = 0;
numbers.forEach((i) => {
  cub3 += i ** 3;
});
console.log(cub3);


let cub4 = numbers.reduce((accum, currentValue) => {
  return accum + (currentValue ** 3);
}, 0);

console.log(cub4);