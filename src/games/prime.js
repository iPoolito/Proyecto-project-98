import { createRounds } from '../index.js';
import getRandomNumber from '../utils.js';

const questionMessage = 'Responde "yes" si el número dado es primo. De lo contrario, responde "no".';

// Reference that recursive function can be implement
function isPrimeNumber(number, divider = 3) {
  if (number === 2) return true;
  if (number < 2 || number % 2 === 0) return false;
  if (divider * divider > number) return true;
  if (number % divider === 0) return false;
  return isPrimeNumber(number, divider + 2);
}

const getRound = () => {
  const randomNumber = getRandomNumber(10);
  const correctAnswer = isPrimeNumber(randomNumber) ? 'yes' : 'no';
  return { questionMessage, correctAnswer, questionValue: randomNumber };
};

export default () => {
  createRounds(getRound);
};
