const dog = {
  name: "Боря",
  type: "Собачка",
  makeSOund() {
    return "Гав!";
  },
  makeDomestic() {
    console.log(
      `${this.type} по имени ${this.name} говорит ${this.makeSOund()}`
    );
    return {
      name: this.name,
      type: this.type,
      makeSOund: this.makeSOund,
      isDomastic: true,
    };
  },
};

const bird = {
  name: "Чирик",
  type: "Птичка",
  makeSOund() {
    return "Кря!";
  },
  makeDomestic() {
    console.log(
      `${this.type} по имени ${this.name} говорит ${this.makeSOund()}`
    );
    return {
      name: this.name,
      type: this.type,
      makeSOund: this.makeSOund,
      isDomastic: true,
    };
  },
};

dog.makeDomestic();
