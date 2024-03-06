const userLogin = prompt('Введите логин: ').trim();
const userPassword = prompt('Введите пароль: ').trim();
const existedUserLogin = 'the_best_user';
const existedUserPassword = '12345678';

existedUserLogin === userLogin && existedUserPassword === userPassword
  ? alert(`Добро пожаловать, ${userLogin}`)
  : alert('Неверный логин и (или) пароль!');