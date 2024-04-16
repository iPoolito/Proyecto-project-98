import { createRounds } from '../index.js';
import getRandomNumber from '../utils.js';

const questionMessage = '¿Qué número falta en la progresión?';
const progressionLength = 8;

function getProgression(startStep, step, hiddenNumIdx) {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    const current = startStep + i * step;
    const element = i === hiddenNumIdx ? '..' : current;
    progression.push(element);
  }
  return progression.join(' ');
}

const getRound = () => {
  const startStep = getRandomNumber(100);
  const stepProgression = getRandomNumber(10);
  const hiddenNumIdx = Math.floor(Math.random() * progressionLength);
  const progression = getProgression(startStep, stepProgression, hiddenNumIdx);
  const correctAnswer = startStep + hiddenNumIdx * stepProgression;
  const questionValue = `${progression}`;
  return {
    questionMessage, correctAnswer, questionValue, isNumberAnswer: true,
  };
};

export default () => {
  createRounds(getRound);
};
