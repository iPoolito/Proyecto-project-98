import readlineSync from 'readline-sync';

export const GAME_ROUNDS = 3;

export function isEven(number) {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
}
export function getRandomNumber(number) {
  return Math.floor(Math.random() * number);
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
