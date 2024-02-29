let userText = prompt("Введите текст");
userText = userText.trim();

let wordToFind = prompt("Введите слово из текста");

let wordIndex = userText.indexOf(wordToFind);

let result = userText.substring(0, wordIndex + wordToFind.length).trim();

alert(`Результат: ${result}`);