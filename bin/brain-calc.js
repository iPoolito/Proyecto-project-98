#!/usr/bin/env node
import getUserName from '../src/cli.js';
import {
  getUserAnswer,
  getRandomNumber,
  GAME_ROUNDS,
  getRandomOperator,
  getOperationResult,
  checkAnswer,
} from '../src/index.js';

let isWin = true;

console.log('¡Bienvenido a Brain Games!');

const userName = getUserName();
for (let i = 0; i < GAME_ROUNDS; i += 1) {
  const firstRandomNumber = getRandomNumber(10);
  const secondRandomNumber = getRandomNumber(10);
  const randomOperator = getRandomOperator();
  const correctAnswer = getOperationResult(firstRandomNumber, secondRandomNumber, randomOperator);

  const questionMessage = '¿Cuál es el resultado de la expresión?';
  const questionValue = `${firstRandomNumber} ${randomOperator} ${secondRandomNumber}`;
  const userAnswer = getUserAnswer(questionMessage, questionValue);

  if (!checkAnswer(Number(userAnswer), correctAnswer, userName)) {
    isWin = false;
    break;
  }

  console.log('¡Correcto!');
}
if (isWin) {
  console.log(`¡Felicitaciones, ${userName}!`);
}
