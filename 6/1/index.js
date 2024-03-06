function getName1(name) {
    return `Ваше имя ${name}`;
  }
  
  
  const getName2 = function (name) {
    return `Ваше имя ${name}`;
  };
  
  
  const getName3 = (name) => `Ваше имя ${name}`;
  
  console.log(getName1("bebe"));
  console.log(getName2("bebe"));
  console.log(getName3("bebe"));