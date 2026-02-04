'use strict';

/**
 * ╔═══════════════════════════════════════════════════════════════════════════╗
 * ║  PROBLEMA: Way Too Long Words (71A)                                       ║
 * ║  LINK: https://codeforces.com/problemset/problem/71/A                     ║
 * ║  DIFICULTAD: 800 (Muy fácil - Manipulación de strings)                    ║
 * ╠═══════════════════════════════════════════════════════════════════════════╣
 * ║  DESCRIPCIÓN:                                                             ║
 * ║  Las palabras muy largas son difíciles de leer. Abreviar palabras de      ║
 * ║  más de 10 caracteres con: primera letra + cantidad de letras en          ║
 * ║  medio + última letra.                                                    ║
 * ║                                                                           ║
 * ║  ENTRADA:                                                                 ║
 * ║    - Primera línea: n (número de palabras)                                ║
 * ║    - Siguientes n líneas: una palabra cada una                            ║
 * ║                                                                           ║
 * ║  SALIDA: La palabra original o su abreviación                             ║
 * ║                                                                           ║
 * ║  PATRÓN USADO: Patrón 4 - String como entrada con T casos                 ║
 * ╚═══════════════════════════════════════════════════════════════════════════╝
 *
 * ANÁLISIS:
 * - Si la palabra tiene 10 o menos caracteres → imprimirla tal cual
 * - Si tiene más de 10 → primera + (longitud-2) + última
 *
 * EJEMPLOS:
 * - "word" (4 letras) → "word" (no se abrevia)
 * - "localization" (12 letras) → "l10n" (l + 10 + n)
 * - "internationalization" (20 letras) → "i18n" (i + 18 + n)
 */

// ═══════════════════════════════════════════════════════════════════════════
// SECCIÓN 1: LECTURA DE ENTRADA
// ═══════════════════════════════════════════════════════════════════════════

const fs = require('fs');

const data = fs.readFileSync(0, 'utf8').trim();
const input = data.length ? data.split(/\s+/) : [];
let idx = 0;

// ═══════════════════════════════════════════════════════════════════════════
// SECCIÓN 2: FUNCIONES AUXILIARES
// ═══════════════════════════════════════════════════════════════════════════

const next = () => input[idx++];
const nextInt = () => Number(next());
const print = (x) => process.stdout.write(String(x) + '\n');

// ═══════════════════════════════════════════════════════════════════════════
// SECCIÓN 3: LECTURA DE ENTRADA - PATRÓN 4 (Strings con T casos)
// ═══════════════════════════════════════════════════════════════════════════

function main() {
  const n = nextInt();
  for (let i = 0; i < n; i++) {
    const word = next();
    solve(word);
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// SECCIÓN 4: SOLUCIÓN
// ═══════════════════════════════════════════════════════════════════════════

function solve(word) {
  // Si la palabra tiene 10 o menos caracteres, no abreviar
  if (word.length <= 10) {
    print(word);
    return;
  }

  // Abreviar: primera letra + letras en medio + última letra
  const primera = word[0];
  const ultima = word[word.length - 1];
  const letrasEnMedio = word.length - 2;

  const abreviacion = primera + letrasEnMedio + ultima;
  print(abreviacion);

  // Forma corta usando template literals:
  // print(`${word[0]}${word.length - 2}${word[word.length - 1]}`);
}

main();
