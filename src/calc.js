import { GAME_ROUNDS, runGame } from './index.js';
import { getRandomNumber } from './utils.js';

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
    default:
      return num1 + num2;
  }
}

const getRound = () => {
  const firstRandomNumber = getRandomNumber(10);
  const secondRandomNumber = getRandomNumber(10);
  const randomOperator = getRandomOperator();
  const correctAnswer = getOperationResult(firstRandomNumber, secondRandomNumber, randomOperator);
  const questionMessage = '¿Cuál es el resultado de la expresión?';
  const questionValue = `${firstRandomNumber} ${randomOperator} ${secondRandomNumber}`;
  return {
    questionMessage, correctAnswer, questionValue, isNumberAnswer: true,
  };
};

export default () => {
  const rounds = [];
  for (let i = 0; i < GAME_ROUNDS; i += 1) {
    const round = getRound();
    rounds.push(round);
  }
  runGame(rounds);
};
