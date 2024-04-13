import { createRounds } from './index.js';
import { getRandomNumber } from './utils.js';

const questionMessage = 'Responde "yes" si el número es par, de lo contrario responde "no".';

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  }
  return false;
}

const getRound = () => {
  const randomNumber = getRandomNumber(15);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

  return { questionMessage, correctAnswer, questionValue: randomNumber };
};

export default () => {
  createRounds(getRound);
};
