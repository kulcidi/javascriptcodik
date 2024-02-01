console.log(+'S0'); // Неявное
console.log(String(+'50'));

console.log(Number('100'), typeof Number('100')); // Явное

console.log('' + 1);// Неявное
console.log(Number(''+ 1 ));

console.log(String(1), typeof String(1));// Явное

console.log (Boolean(0), typeof Boolean(0));// Явное

console.log(+'001');// Неявное
console.log(String(+'001'));

console.log(1 + '');// Неявное
console.log(Number(1 +''));

console.log(Boolean(1), typeof Boolean(1));// Явное

console.log(String(1), typeof String(1));// Явное

console.log(Number('Hello World'), typeof Number('Hello World'));// Явное