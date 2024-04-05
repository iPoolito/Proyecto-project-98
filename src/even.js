import { GAME_ROUNDS, runGame } from './index.js';
import { getRandomNumber } from './utils.js';

function isEven(number) {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
}

const getRound = () => {
  const randomNumber = getRandomNumber(10);
  const correctAnswer = isEven(randomNumber);
  const questionMessage = 'Responde "yes" si el número es par, de lo contrario responde "no".';
  return { questionMessage, correctAnswer, questionValue: randomNumber };
};

export default () => {
  const rounds = [];
  for (let i = 0; i < GAME_ROUNDS; i += 1) {
    const round = getRound();
    rounds.push(round);
  }
  runGame(rounds);
};
