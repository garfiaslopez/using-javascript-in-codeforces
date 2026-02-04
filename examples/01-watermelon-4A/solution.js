'use strict';

/**
 * ╔═══════════════════════════════════════════════════════════════════════════╗
 * ║  PROBLEMA: Watermelon (4A)                                                ║
 * ║  LINK: https://codeforces.com/problemset/problem/4/A                      ║
 * ║  DIFICULTAD: 800 (Muy fácil - Primer problema de muchos!)                 ║
 * ╠═══════════════════════════════════════════════════════════════════════════╣
 * ║  DESCRIPCIÓN:                                                             ║
 * ║  Pete y Billy quieren dividir una sandía de w kilos en dos partes,        ║
 * ║  cada una con peso PAR. Determina si es posible.                          ║
 * ║                                                                           ║
 * ║  ENTRADA: Un número w (1 ≤ w ≤ 100) - el peso de la sandía                ║
 * ║  SALIDA: "YES" si se puede dividir, "NO" si no                            ║
 * ║                                                                           ║
 * ║  PATRÓN USADO: Patrón 1 - Un solo caso de prueba                          ║
 * ╚═══════════════════════════════════════════════════════════════════════════╝
 *
 * ANÁLISIS:
 * - Para dividir en dos partes pares, necesitamos que w sea par (obvio)
 * - Pero w=2 no funciona porque sería 1+1 (ambos impares)
 * - Entonces w debe ser par Y mayor que 2
 *
 * EJEMPLOS:
 * - w=8 → 2+6 ✓ (ambos pares) → YES
 * - w=5 → 1+4, 2+3 ✗ (siempre uno impar) → NO
 * - w=2 → 1+1 ✗ (ambos impares) → NO
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
const printYesNo = (condition) => print(condition ? 'YES' : 'NO');

// ═══════════════════════════════════════════════════════════════════════════
// SECCIÓN 3: LECTURA DE ENTRADA - PATRÓN 1 (Un solo caso)
// ═══════════════════════════════════════════════════════════════════════════

function main() {
  const w = nextInt();
  solve(w);
}

// ═══════════════════════════════════════════════════════════════════════════
// SECCIÓN 4: SOLUCIÓN
// ═══════════════════════════════════════════════════════════════════════════

function solve(w) {
  // La sandía se puede dividir en dos partes pares si:
  // 1. El peso total es par (para que se pueda dividir en pares)
  // 2. El peso es mayor que 2 (porque 2 = 1+1, ambos impares)

  const esPar = w % 2 === 0;
  const mayorQueDos = w > 2;

  printYesNo(esPar && mayorQueDos);

  // Forma corta: printYesNo(w % 2 === 0 && w > 2);
  // Aún más corta: printYesNo(w > 2 && !(w & 1));
}

main();
