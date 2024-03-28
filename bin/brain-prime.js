#!/usr/bin/env node
import getUserName from '../src/cli.js';
import { evenOrPrimeGame } from '../src/index.js';

let isWin = true;
console.log('¡Bienvenido a Brain Games!');

const userName = getUserName();
isWin = evenOrPrimeGame('prime', userName);
if (isWin) {
  console.log(`¡Felicitaciones, ${userName}!`);
}
