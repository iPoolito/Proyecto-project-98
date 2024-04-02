import readlineSync from 'readline-sync';

export const GAME_ROUNDS = 3;

export function isEven(number) {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
}

export function isPrime(number) {
  if (number % 2 === 0) {
    return 'no';
  }
  return 'si';
}

export function getRandomNumber(number) {
  return Math.floor(Math.random() * number) + 1;
}

export function getUserAnswer(questionMessage, questionValue) {
  console.log(questionMessage);
  console.log(`Pregunta: ${questionValue}`);
  const userAnswer = readlineSync.question('Tu respuesta: ');
  return userAnswer;
}

export function getRandomOperator() {
  const availableOperations = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * availableOperations.length);
  const randomOperator = availableOperations[randomIndex];
  return randomOperator;
}

export function getOperationResult(num1, num2, operator) {
  switch (operator) {
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return num1 + num2;
  }
}

export function printErrorQuestionMessage({ userAnswer, correctAnswer, userName }) {
  console.log(`${userAnswer} es una respuesta incorrecta ;(. La respuesta correcta era '${correctAnswer}'.`);
  console.log(`¡Intentémoslo de nuevo, ${userName}!`);
}

export function getGCD(a, b) {
  let num1 = a;
  let num2 = b;
  let temporal;

  while (num2 !== 0) {
    temporal = num2;
    num2 = num1 % num2;
    num1 = temporal;
  }
  return num1;
}

export function getProgression(startStep, step) {
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

export function checkAnswer(userAnswer, correctAnswer, userName) {
  if (userAnswer !== correctAnswer) {
    printErrorQuestionMessage({ userAnswer, correctAnswer, userName });
    return false;
  }
  return true;
}

export function evenOrPrimeGame(gameType, userName) {
  for (let i = 0; i < GAME_ROUNDS; i += 1) {
    const randomNumber = getRandomNumber(100);
    const correctAnswer = gameType === 'even' ? isEven(randomNumber) : isPrime(randomNumber);
    const questionMessage = `Responde ${gameType === 'even' ? '"yes"' : '"si"'} si el número es ${gameType === 'even' ? 'par' : 'primo'}, de lo contrario responde "no".`;
    const userAnswer = getUserAnswer(questionMessage, randomNumber);
    if (!checkAnswer(userAnswer, correctAnswer, userName)) {
      return false;
    }
    console.log('¡Correcto!');
  }
  return true;
}
