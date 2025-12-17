import {
  getRandomName,
  getRandomEmail,
  getRandomAge,
  getRandomBirthday,
} from "./random.js";

const name1 = getRandomName();
const name2 = getRandomName();
const name3 = getRandomName();
console.log(name1, name2, name3);

const email1 = getRandomEmail();
const email2 = getRandomEmail();
const email3 = getRandomEmail();
console.log(email1, email2, email3);

const age1 = getRandomAge();
const age2 = getRandomAge();
const age3 = getRandomAge();
console.log(age1, age2, age3);

const birthday1 = getRandomBirthday();
const birthday2 = getRandomBirthday();
const birthday3 = getRandomBirthday();
console.log(birthday1, birthday2, birthday3);
