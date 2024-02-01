// 12345
// NaN
console.log(Number('1 2 3 4 5'));

// 12345
// NaN
console.log(Number('1234 5'));

// 12345
console.log(Number('12345'));

// 'false'
console.log(String(false));

// будет ошибка
// false
console.log(Boolean(00000));

// будет еще ошибка
// true
console.log(Boolean(0.000001));

// undefined
console.log(String(undefined));

// 100
// NaN
console.log(Number('100f'));

// 100
console.log(Number('100'));

// 1
console.log(Number('00001'));