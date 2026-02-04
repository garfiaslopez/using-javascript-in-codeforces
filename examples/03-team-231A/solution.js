'use strict';

/**
 * ╔═══════════════════════════════════════════════════════════════════════════╗
 * ║  PROBLEMA: Team (231A)                                                    ║
 * ║  LINK: https://codeforces.com/problemset/problem/231/A                    ║
 * ║  DIFICULTAD: 800 (Muy fácil - Conteo básico)                              ║
 * ╠═══════════════════════════════════════════════════════════════════════════╣
 * ║  DESCRIPCIÓN:                                                             ║
 * ║  Tres amigos (Petya, Vasya, Tonya) participan en un concurso con n        ║
 * ║  problemas. Cada uno sabe o no sabe resolver cada problema (1 o 0).       ║
 * ║  Solo implementan la solución si AL MENOS 2 de ellos están seguros.       ║
 * ║  ¿Cuántos problemas resolverán?                                           ║
 * ║                                                                           ║
 * ║  ENTRADA:                                                                 ║
 * ║    - Primera línea: n (número de problemas)                               ║
 * ║    - Siguientes n líneas: 3 números (0 o 1) separados por espacio         ║
 * ║                                                                           ║
 * ║  SALIDA: Cantidad de problemas que resolverán                             ║
 * ║                                                                           ║
 * ║  PATRÓN USADO: Patrón 1 con múltiples líneas de datos                     ║
 * ╚═══════════════════════════════════════════════════════════════════════════╝
 *
 * ANÁLISIS:
 * - Para cada problema, sumar las opiniones (0 o 1) de los 3 amigos
 * - Si la suma es >= 2, el problema se resuelve
 * - Contar cuántos problemas cumplen esta condición
 *
 * EJEMPLOS:
 * - 1 1 0 → suma = 2 → ✓ se resuelve
 * - 1 1 1 → suma = 3 → ✓ se resuelve
 * - 1 0 0 → suma = 1 → ✗ no se resuelve
 * - 0 0 0 → suma = 0 → ✗ no se resuelve
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
const nextArray = (n) => Array.from({ length: n }, () => nextInt());

// ═══════════════════════════════════════════════════════════════════════════
// SECCIÓN 3: LECTURA DE ENTRADA
// ═══════════════════════════════════════════════════════════════════════════

function main() {
  const n = nextInt();

  // Leer las opiniones de cada problema
  // Cada problema tiene 3 valores (uno por cada amigo)
  const problemas = [];
  for (let i = 0; i < n; i++) {
    const opiniones = nextArray(3); // Lee [petya, vasya, tonya]
    problemas.push(opiniones);
  }

  solve(n, problemas);
}

// ═══════════════════════════════════════════════════════════════════════════
// SECCIÓN 4: SOLUCIÓN
// ═══════════════════════════════════════════════════════════════════════════

function solve(n, problemas) {
  let resueltos = 0;

  for (let i = 0; i < n; i++) {
    const [petya, vasya, tonya] = problemas[i];
    const seguros = petya + vasya + tonya;

    // Si al menos 2 están seguros, se resuelve
    if (seguros >= 2) {
      resueltos++;
    }
  }

  print(resueltos);

  // Forma más compacta usando filter:
  // const resueltos = problemas.filter(p => p[0] + p[1] + p[2] >= 2).length;
  // print(resueltos);

  // Forma aún más compacta:
  // print(problemas.filter(p => p.reduce((a, b) => a + b, 0) >= 2).length);
}

main();
