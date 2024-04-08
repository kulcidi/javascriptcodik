const myName = "bebebe";
const programmingLanguage = "JavaScript";
const courseCreatorName = "Nikita Michalovich";
const reasonText = "bibibi";
const numberOfMonth = "456";

let myInfoText = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучала ${programmingLanguage} ${numberOfMonth} месяцев. Я уверена, что пройду данный курс до конца!`;

myInfoText = myInfoText.replaceAll("JavaScript", "JavaScript".toUpperCase());
console.log(myInfoText);
console.log(myInfoText.length);
console.log(myInfoText[0], myInfoText[myInfoText.length - 1]);
