#!/usr/bin/env node
import getUserName from '../src/cli.js';
import getRandomNumber from '../src/getRandomNumber.js';
import getUserAnswer from '../src/getUserAnswer.js';
import isEven from '../src/isEven.js';

const GAME_ROUNDS = 3;
let isWin = true;
console.log('¡Bienvenido a Brain Games!');

const userName = getUserName();
for (let i = 0; i < GAME_ROUNDS; i += 1) {
  const randomNumber = getRandomNumber(100);

  const correctAnswer = isEven(randomNumber);

  const questionMessage = 'Responde "yes" si el número es par, de lo contrario responde "no".';
  const userAnswer = getUserAnswer(questionMessage, randomNumber);
  if (userAnswer !== correctAnswer) {
    console.log(`${userAnswer} es una respuesta incorrecta ;(. La respuesta correcta era '${correctAnswer}'.`);
    console.log(`¡Intentémoslo de nuevo, ${userName}!`);
    isWin = false;
    break;
  }

  console.log('¡Correcto!');
}
if (isWin) {
  console.log(`¡Felicitaciones, ${userName}!`);
}
