#!/usr/bin/env node
import getUserName from '../src/cli.js';
import {
  getUserAnswer,
  getRandomNumber,
  GAME_ROUNDS,
  printErrorQuestionMessage,
  getGCD,
} from '../src/index.js';

let isWin = true;

console.log('¡Bienvenido a Brain Games!');

const userName = getUserName();
for (let i = 0; i < GAME_ROUNDS; i += 1) {
  const firstRandomNumber = getRandomNumber(20);
  const secondRandomNumber = getRandomNumber(20);
  const correctAnswer = getGCD(firstRandomNumber, secondRandomNumber);

  const questionMessage = 'Encuentra el máximo común divisor de los números dados.';
  const questionValue = `${firstRandomNumber} ${secondRandomNumber}`;
  const userAnswer = getUserAnswer(questionMessage, questionValue);

  if (Number(userAnswer) !== correctAnswer) {
    printErrorQuestionMessage({ userAnswer, correctAnswer, userName });
    isWin = false;
    break;
  }

  console.log('¡Correcto!');
}
if (isWin) {
  console.log(`¡Felicitaciones, ${userName}!`);
}
