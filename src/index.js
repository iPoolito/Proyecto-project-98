import readlineSync from 'readline-sync';
import { getUserAnswer, checkAnswer } from './utils.js';

export const GAME_ROUNDS = 3;

export function getUserName() {
  const name = readlineSync.question('¿Cuál es tu nombre? ');
  console.log(`¡Hola, ${name}!`);
  return name;
}

export function runGame(rounds) {
  console.log('¡Bienvenido a Brain Games!');

  const userName = getUserName();

  for (let i = 0; i < rounds.length; i += 1) {
    const {
      questionMessage, correctAnswer, questionValue, isNumberAnswer,
    } = rounds[i];
    const userAnswer = getUserAnswer(questionMessage, questionValue, isNumberAnswer);
    if (!checkAnswer(userAnswer, correctAnswer, userName)) return;
    console.log('¡Correcto!');
  }
  console.log(`¡Felicidades, ${userName}!`);
}

export function createRounds(createRoundCallback) {
  const rounds = [];
  for (let i = 0; i < GAME_ROUNDS; i += 1) {
    const round = createRoundCallback();
    rounds.push(round);
  }
  runGame(rounds);
}
