#!/usr/bin/env node
import getUserName from '../src/cli.js';
import {
  isPrime, getUserAnswer, getRandomNumber, GAME_ROUNDS, printErrorQuestionMessage,
} from '../src/index.js';

let isWin = true;
console.log('¡Bienvenido a Brain Games!');

const userName = getUserName();
for (let i = 0; i < GAME_ROUNDS; i += 1) {
  const randomNumber = getRandomNumber(100);

  const correctAnswer = isPrime(randomNumber);

  const questionMessage = 'Responde "sí" si el número dado es primo. De lo contrario, responde "no"';
  const userAnswer = getUserAnswer(questionMessage, randomNumber);
  if (userAnswer !== correctAnswer) {
    printErrorQuestionMessage({ userAnswer, correctAnswer, userName });
    isWin = false;
    break;
  }

  console.log('¡Correcto!');
}
if (isWin) {
  console.log(`¡Felicitaciones, ${userName}!`);
}
