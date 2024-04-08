function addDays(date, days = 1 ) {

  const timeStamp = date.getTime();
  const convertMe = 24 * 60 * 60 * 1000;
  const newTimeStamp = timeStamp + days + convertMe;

  const newDate = new Date(newTimeStamp);
  return newDate; 

}

const date = new Date();
const addToDate = addDays(date, 9); 
console.log(addToDate);
