#!/usr/bin/env node
import getUserName from '../src/cli.js';
import {
  getUserAnswer,
  getRandomNumber,
  GAME_ROUNDS,
  printErrorQuestionMessage,
  getProgression,
} from '../src/index.js';

let isWin = true;

console.log('¡Bienvenido a Brain Games!');

const userName = getUserName();
for (let i = 0; i < GAME_ROUNDS; i += 1) {
  const startStep = getRandomNumber(100);
  const stepProgression = getRandomNumber(10);
  const { progression, correctAnswer } = getProgression(startStep, stepProgression);

  const questionMessage = '¿Qué número falta en la progresión?';
  const questionValue = `${progression}`;
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
