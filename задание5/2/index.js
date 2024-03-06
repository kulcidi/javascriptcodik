let correctAnswers = 0;
let incorrectAnswers = 0;
const answer1 = 4;
const answer2 = 1;
const answer3 = 12;
const answer4 = 6;
const question1 = +prompt('Сколько будет 2+2?').trim();
if(question1 === answer1){
  alert('Верно!');
  correctAnswers++
}
else{
  alert('Неверно');
  incorrectAnswers++
}
const question2 = +prompt('Сколько будет 2x2?').trim();
if(question2 === answer1){
  alert('Верно!');
  correctAnswers++
}
else{
  alert('Неверно');
  incorrectAnswers++
}
const question3 = +prompt('У Пети было 5 яблок, 3 он съел, 1 отдал другу. Сколько яблок осталось у Пети?').trim();
if(question3 === answer2){
  alert('Верно!');
  correctAnswers++
}
else{
  alert('Неверно');
  incorrectAnswers++
}
const question4 = +prompt('У Маши было 10 конфет, 2 она съела, 1 отдала другу. После мама дала ей ещё 5 конфет. Сколько конфет в итоге осталось?').trim();
if(question4 === answer3){
  alert('Верно!');
  correctAnswers++
}
else{
  alert('Неверно');
  incorrectAnswers++
}
const question5 = +prompt('Сколько будет 2+2x2?').trim();
if(question5 === answer4){
  alert('Верно!');
  correctAnswers++
}
else{
  alert('Неверно');
  incorrectAnswers++
}
alert("Конец теста! Правильные ответы: " + correctAnswers + ". Неправильные ответы:" + incorrectAnswers );