import { createRounds } from './index.js';
import { getRandomNumber } from './utils.js';

function getProgression(startStep, step) {
  const progression = [startStep];
  let currentValue = startStep;
  for (let i = 0; i < 10; i += 1) {
    // eslint-disable-next-line no-unused-vars
    currentValue += step;
    progression.push(currentValue);
  }
  const randomIndex = Math.floor(Math.random() * progression.length);
  const correctAnswer = progression[randomIndex];
  progression[randomIndex] = '..';
  return { correctAnswer, progression: progression.join(' ') };
}

const getRound = () => {
  const startStep = getRandomNumber(100);
  const stepProgression = getRandomNumber(10);
  const { progression, correctAnswer } = getProgression(startStep, stepProgression);
  const questionMessage = '¿Qué número falta en la progresión?';
  const questionValue = `${progression}`;
  return {
    questionMessage, correctAnswer, questionValue, isNumberAnswer: true,
  };
};

export default () => {
  createRounds(getRound());
};
