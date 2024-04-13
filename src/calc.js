import { createRounds } from './index.js';
import { getRandomNumber } from './utils.js';

const questionMessage = '¿Cuál es el resultado de la expresión?';

function getRandomOperator() {
  const availableOperations = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * availableOperations.length);
  const randomOperator = availableOperations[randomIndex];
  return randomOperator;
}

export function getOperationResult(num1, num2, operator) {
  switch (operator) {
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '+':
      return num1 + num2;
    default:
      throw new Error('Operation no Available');
  }
}

const getRound = () => {
  const firstRandomNumber = getRandomNumber(10);
  const secondRandomNumber = getRandomNumber(10);
  const randomOperator = getRandomOperator();
  const correctAnswer = getOperationResult(firstRandomNumber, secondRandomNumber, randomOperator);

  const questionValue = `${firstRandomNumber} ${randomOperator} ${secondRandomNumber}`;
  return {
    questionMessage, correctAnswer, questionValue, isNumberAnswer: true,
  };
};

export default () => {
  createRounds(getRound);
};
