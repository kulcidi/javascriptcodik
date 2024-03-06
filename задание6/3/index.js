function getDivCount(num = 1) {
  result = 0;
  if (num < 0 || !Number.isInteger(num)) {
    console.log("number должно быть целым числом и больше нуля!");
  } else {
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        result++;
      }
    }
  }
  return result;
}
console.log(getDivCount(80));