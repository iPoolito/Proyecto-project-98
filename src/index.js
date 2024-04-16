import readlineSync from 'readline-sync';

export const GAME_ROUNDS = 3;

export function runGame(rounds) {
  console.log('¡Bienvenido a Brain Games!');

  const userName = readlineSync.question('¿Cuál es tu nombre? ');
  console.log(`¡Hola, ${userName}!`);

  for (let i = 0; i < rounds.length; i += 1) {
    const {
      questionMessage, correctAnswer, questionValue, isNumberAnswer,
    } = rounds[i];
    console.log(questionMessage);
    console.log(`Pregunta: ${questionValue}`);
    const answer = readlineSync.question('Tu respuesta: ');

    const userAnswer = isNumberAnswer ? Number(answer) : answer;
    if (userAnswer !== correctAnswer) {
      console.log(`${userAnswer} es una respuesta incorrecta ;(. La respuesta correcta era '${correctAnswer}'.`);
      console.log(`¡Intentémoslo de nuevo, ${userName}!`);
      return;
    }
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
