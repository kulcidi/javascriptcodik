let userAnswer = prompt('Как вас зовут?');
userAnswer = userAnswer.toUpperCase();
userAnswer = userAnswer.replace(/\s+/g, '');

alert(`Ваше имя: ${userAnswer}`);
