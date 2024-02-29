let userSring = prompt('Введите текст для обрезки:');
userSring = userSring.trim( );


let startSliceIndex = parseInt(prompt('Введите индекс, с которого нужно начать обрезку строки:'));
let endSliceIndex = parseInt(prompt("Введите индекс, с которого нужно закончить обрезку строки:"));

let slicedString = userSring.slice(startSliceIndex, endSliceIndex);

alert('Ваш результат:'+ slicedString);