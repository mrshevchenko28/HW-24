/* jshint esversion: 11 */
/*
 * #1
 *
 * Розробити функцію, яка використовує метод reduce масиву для обчислення суми усіх елементів масиву чисел.
 Функція повинна приймати масив чисел та повертати їх суму.
*/

function sumArray(numbers) {
  return numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue; }, 0);
}

// Використання функції
const exampleArray = [1, 2, 3, 4, 5];
const sum = sumArray(exampleArray);
console.log('Сума елементів масиву:', sum); // Виведення суми


/*
 * #2
 *
 * Розробити функцію, яка використовує метод map масиву для створення нового масиву, в якому кожен елемент буде вдвічі більшим за елементи вхідного масиву чисел.
*/

function doubleArrayElements(numbers) {
  return numbers.map((number) => {
    return number * 2;
  });
}

// Використання функції
const mapExampleArray = [1, 2, 3, 4, 5];
const doubledArray = doubleArrayElements(mapExampleArray);
console.log('Подвоєні елементи масиву:', doubledArray); // Виведення подвоєних елементів

function rootArrayElements(numbers) {
  return numbers.map((number) => {
    return Math.sqrt(number);
  });
} 
const mapExampleArray2 = [4, 9, 16, 25, 36];
const rootExampleArray = rootArrayElements(mapExampleArray2);
console.log('Square Root numbers:', rootExampleArray);


/*
 * #3
 *
 * Розробити клас `SkillsManager`, що відповідає за управління списком навичок. Клас повинен включати:
 * 1. Конструктор:
 * - Ініціалізує порожній масив `skills`, який буде використовуватися для зберігання навичок.
 * 2. Метод `addSkill(skill)`:
 * - Приймає один аргумент `skill` (рядок).
 * - Перевіряє, чи аргумент є рядком і має мінімум два символи.
 * - Якщо умови виконані, додає `skill` до масиву `skills` і повертає додану навичку.
 * - Якщо умови не виконані (навичка не є рядком або має менше двох символів), повертає `null`.
 * 3. Метод `getAllSkills()`:
 *   - Повертає поточний масив усіх навичок, збережених у класі.
 *
 * Загальні вимоги:
 * - Клас має бути модульним і здатним до використання в інших частинах програми, тому він повинен бути експортований.
 * - Клас має забезпечувати легке управління навичками, включаючи додавання нових навичок та отримання списку всіх наявних навичок.
 * - Код має бути написаний з урахуванням принципів чистого коду, забезпечуючи читабельність та легкість підтримки.
*/

class SkillsManager {
  constructor() {
    this.skills = [];
  }
  addSkill(exp) {
    if (typeof exp === 'string' && exp.length >= 2) {
      this.skills.push(exp);
      return exp;
    }
    return null;
  }
  getAllSkills() {
    return this.skills;
  }
}

const skillsManager = new SkillsManager();

console.log(skillsManager.addSkill('JavaScript'));
console.log(skillsManager.addSkill('CSS'));
console.log(skillsManager.addSkill('C'));
console.log(skillsManager.addSkill(123));
console.log(skillsManager.addSkill(undefined));
console.log(skillsManager.addSkill(null));
console.log(skillsManager.addSkill(123n));
console.log(skillsManager.getAllSkills());



/*
 * #4
 * Задача: Калькулятор дат.
 * Завдання: Створити модуль на JavaScript, який імплементує функцію-конструктор DateCalculator для створення об'єктів, здатних керувати датами. Калькулятор дат має надавати такі можливості:
 * Додавання днів: Метод addDays приймає кількість днів як аргумент і додає цю кількість до поточної дати об'єкта.
 * Віднімання днів: Метод subtractDays приймає кількість днів як аргумент і віднімає цю кількість від поточної дати об'єкта.
 * Отримання результату: Метод getResult повертає поточну дату об'єкта у форматі "YYYY-MM-DD".
 *
 * Критерії перевірки:
 * В модулі має бути визначена функція-конструктор DateCalculator, яка ініціалізує об'єкт з початковою датою.
 * Мають бути реалізовані та доступні методи addDays, subtractDays, та getResult для екземплярів DateCalculator.
 * Об'єкти DateCalculator мають створюватися за допомогою ключового слова new і використання функції-конструктора.
 */

function DateCalculator(initialDate) {
  this.date = new Date(initialDate);
  this.addDays = function(days) {
    const nowDays = this.date.getDate();
    this.date.setDate(nowDays + days);
  };
  this.subtractDays = function(days) {
  const currentDays = this.date.getDate();
  this.date.setDate(currentDays - days);
  };

  this.getResult = function() {
    return this.date.toISOString().slice(0, 10);
  };
}

// Демонстрація використання
const dateCalculator = new DateCalculator('2026-02-15');
dateCalculator.addDays(5);
console.log(dateCalculator.getResult()); // Виводить нову дату після додавання днів

dateCalculator.subtractDays(3);
console.log(dateCalculator.getResult()); // Виводить нову дату після віднімання днів

dateCalculator.addDays(485);
console.log(dateCalculator.getResult());

dateCalculator.subtractDays(6754);
console.log(dateCalculator.getResult());

const initialDateCalculator = new DateCalculator('2026-02-15'); // If I want to start from current date I have to create a new object
initialDateCalculator.addDays(5);
console.log(initialDateCalculator.getResult());

initialDateCalculator.subtractDays(3);
console.log(initialDateCalculator.getResult());

initialDateCalculator.addDays(485);
console.log(initialDateCalculator.getResult());

initialDateCalculator.subtractDays(6754);
console.log(initialDateCalculator.getResult());

export {rootArrayElements, doubleArrayElements, sumArray, SkillsManager, DateCalculator };
