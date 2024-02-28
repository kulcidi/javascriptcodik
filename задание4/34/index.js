let userAnswer = prompt('Как вас зовут?');
userAnswer = userAnswer.toUpperCase();
userAnswer = userAnswer.replace(/\s+/g, '');

let userAge = prompt('Сколько вам лет?');
userAge = Number;
userAge = userAge.replace(/\s+/g, '');

alert(`Ваше имя: ${userAnswer}`);
alert(`Ваше возраст: ${userAge}`);
