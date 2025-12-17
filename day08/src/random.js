import Chance from "chance";
const chance = new Chance();

export function getRandomName() {
  return chance.name();
}

export function getRandomEmail() {
  return chance.email();
}

export function getRandomAge() {
  return chance.age();
}

export function getRandomBirthday() {
  return chance.birthday();
}
