import readlineSync from 'readline-sync';

export function getRandomNumber(number) {
  return Math.floor(Math.random() * number) + 1;
}

export function getUserAnswer(questionMessage, questionValue, isNumberAnswer) {
  console.log(questionMessage);
  console.log(`Pregunta: ${questionValue}`);
  const userAnswer = readlineSync.question('Tu respuesta: ');
  return isNumberAnswer ? Number(userAnswer) : userAnswer;
}

export function printErrorQuestionMessage({ userAnswer, correctAnswer, userName }) {
  console.log(`${userAnswer} es una respuesta incorrecta ;(. La respuesta correcta era '${correctAnswer}'.`);
  console.log(`¡Intentémoslo de nuevo, ${userName}!`);
}

export function checkAnswer(userAnswer, correctAnswer, userName) {
  if (userAnswer !== correctAnswer) {
    printErrorQuestionMessage({ userAnswer, correctAnswer, userName });
    return false;
  }
  return true;
}
