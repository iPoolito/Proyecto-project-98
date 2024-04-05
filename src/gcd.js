import { createRounds } from './index.js';
import { getRandomNumber } from './utils.js';

function getGCD(a, b) {
  let num1 = a;
  let num2 = b;
  let temporal;

  while (num2 !== 0) {
    temporal = num2;
    num2 = num1 % num2;
    num1 = temporal;
  }
  return num1;
}

const getRound = () => {
  const firstRandomNumber = getRandomNumber(20);
  const secondRandomNumber = getRandomNumber(20);
  const correctAnswer = getGCD(firstRandomNumber, secondRandomNumber);
  const questionMessage = 'Encuentra el máximo común divisor de los números dados.';
  const questionValue = `${firstRandomNumber} ${secondRandomNumber}`;
  return {
    questionMessage, correctAnswer, questionValue, isNumberAnswer: true,
  };
};

export default () => {
  createRounds(getRound());
};
