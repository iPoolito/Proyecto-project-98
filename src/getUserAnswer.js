import readlineSync from 'readline-sync';

export default function getUserAnswer(questionMessage, questionValue) {
  console.log(questionMessage);
  console.log(`Pregunta: ${questionValue}`);
  const userAnswer = readlineSync.question('Tu respuesta: ');
  return userAnswer;
}
