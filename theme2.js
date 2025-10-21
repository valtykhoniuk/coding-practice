// 6. Практичні завдання та реальні сценарії
// 36️⃣ Як реалізувати свій власний метод myPush() для масиву через прототип?

Array.prototype.myPush = function (input) {
  if (Array.isArray(input)) {
    for (let element of input) {
      this[this.length] = element;
    }
  } else {
    this[this.length] = input;
  }

  return this.length;
};

// 37️⃣ Як реалізувати просту ієрархію класів, наприклад, Human → Pilot → MilitaryPilot?
class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Привіт, мене звати ${this.name}, мені ${this.age} років.`);
  }
}

class Pilot extends Human {
  constructor(name, age, flightHours) {
    super(name, age);
    this.flightHours = flightHours;
  }

  introduce() {
    super.introduce();
    console.log(`Я пілот з досвідом ${this.flightHours} годин.`);
  }
}

class MilitaryPilot extends Pilot {
  //так само
}

// 38️⃣ Як можна реалізувати клас SuperMath, який перевіряє правильність операцій?
class SuperMath {
  add(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Inputs must be numbers");
    }
    return a + b;
  }

  subtract(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Inputs must be numbers");
    }
    return a - b;
  }

  multiply(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Inputs must be numbers");
    }
    return a * b;
  }

  divide(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Inputs must be numbers");
    }
    if (b === 0) {
      throw new Error("You cant divide by 0");
    }
    return a / b;
  }
}
// 39️⃣ Як би ти створила клас User, у якого є метод getInfo(), що повертає ім’я та вік користувача?
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getInfo() {
    return `Info of user: ${this.name}, ${this.age}`;
  }
}
// 40️⃣ Як можна використовувати об’єкти та класи для відображення даних у HTML (наприклад, рендеринг списку користувачів)?
