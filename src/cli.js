import readlineSync from 'readline-sync';

export default function getUserName() {
  const name = readlineSync.question('¿Cuál es tu nombre? ');
  console.log(`¡Hola, ${name}!`);
  return name;
}
