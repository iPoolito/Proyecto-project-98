import { createRounds } from './index.js';
import { getRandomNumber } from './utils.js';

function isPrime(number) {
  if (number < 2) {
    return 'no';
  }
  const sqrtNumber = Math.sqrt(number);
  for (let i = 2; i <= sqrtNumber; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
}
const getRound = () => {
  const randomNumber = getRandomNumber(10);
  const correctAnswer = isPrime(randomNumber);
  const questionMessage = 'Responde "yes" si el número dado es primo. De lo contrario, responde "no".';
  return { questionMessage, correctAnswer, questionValue: randomNumber };
};

export default () => {
  createRounds(getRound);
};
