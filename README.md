# 🚀 Codeforces JavaScript Template

Template para resolver problemas de programación competitiva usando **JavaScript** y **Node.js** en plataformas como Codeforces, HackerRank, OmegaUp, entre otras.

## 📋 Tabla de Contenidos

- [Requisitos](#-requisitos)
- [Inicio Rápido](#-inicio-rápido)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Funciones de Lectura](#-funciones-de-lectura)
- [Funciones de Salida](#-funciones-de-salida)
- [Utilidades](#-utilidades)
- [Patrones de Entrada](#-patrones-de-entrada)
- [Tips de Debugging](#-tips-de-debugging)
- [Errores Comunes](#-errores-comunes)
- [Ejemplo Completo](#-ejemplo-completo)

---

## 📦 Requisitos

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- Un editor de código (recomendado: VS Code)

Verifica tu instalación:
```bash
node --version
```

---

## ⚡ Inicio Rápido

### 1. Clona o descarga este repositorio

### 2. Escribe tu entrada de prueba en `input.txt`
```
3
5
1 2 3 4 5
3
10 20 30
2
100 200
```

### 3. Modifica la función `solve()` en `main.js`
```javascript
function solve(n, arr) {
  const result = sum(arr);
  print(result);
}
```

### 4. Ejecuta tu solución
```bash
node main.js < input.txt
```

### 5. ¡Sube tu código a Codeforces!
Copia **TODO** el contenido de `main.js` y pégalo en el judge.

---

## 📁 Estructura del Proyecto

```
CodeforcesJSTemplate/
├── main.js      # Tu código de solución
├── input.txt    # Archivo de entrada para pruebas locales
└── README.md    # Este archivo
```

---

## 📖 Funciones de Lectura

| Función | Descripción | Ejemplo de uso |
|---------|-------------|----------------|
| `next()` | Lee el siguiente token como string | `const s = next();` |
| `nextInt()` | Lee el siguiente token como número entero | `const n = nextInt();` |
| `nextBig()` | Lee el siguiente token como BigInt (números > 10¹⁵) | `const big = nextBig();` |
| `nextFloat()` | Lee el siguiente token como número decimal | `const f = nextFloat();` |
| `nextArray(n)` | Lee n números enteros como array | `const arr = nextArray(5);` |
| `nextBigArray(n)` | Lee n números BigInt como array | `const arr = nextBigArray(5);` |
| `nextMatrix(n, m)` | Lee una matriz de n×m números | `const mat = nextMatrix(3, 4);` |
| `nextStringArray(n)` | Lee n strings como array | `const words = nextStringArray(3);` |

---

## 📤 Funciones de Salida

| Función | Descripción | Ejemplo |
|---------|-------------|---------|
| `print(x)` | Imprime un valor con salto de línea | `print(42);` → `42\n` |
| `printArray(arr)` | Imprime array separado por espacios | `printArray([1,2,3]);` → `1 2 3\n` |
| `printYesNo(cond)` | Imprime YES o NO | `printYesNo(true);` → `YES\n` |
| `printYesNoCapitalized(cond)` | Imprime Yes o No | `printYesNoCapitalized(false);` → `No\n` |

---

## 🛠 Utilidades

### Constantes
```javascript
const MOD = 1000000007n;  // BigInt para operaciones modulares
const MODn = 1000000007;  // Number para operaciones modulares
```

### Funciones Matemáticas
| Función | Descripción | Ejemplo |
|---------|-------------|---------|
| `gcd(a, b)` | Máximo Común Divisor | `gcd(12, 8)` → `4` |
| `lcm(a, b)` | Mínimo Común Múltiplo | `lcm(4, 6)` → `12` |
| `sum(arr)` | Suma de elementos | `sum([1,2,3])` → `6` |
| `max(arr)` | Máximo de un array | `max([1,5,3])` → `5` |
| `min(arr)` | Mínimo de un array | `min([1,5,3])` → `1` |

---

## 📥 Patrones de Entrada

### Patrón 1: Un solo caso de prueba

**input.txt:**
```
5
1 2 3 4 5
```

**Código:**
```javascript
const n = nextInt();
const arr = nextArray(n);
solve(n, arr);
```

---

### Patrón 2: Múltiples casos con T al inicio ⭐ (MÁS COMÚN)

**input.txt:**
```
3
5
1 2 3 4 5
3
10 20 30
2
100 200
```

**Código:**
```javascript
const t = nextInt();
for (let i = 0; i < t; i++) {
  const n = nextInt();
  const arr = nextArray(n);
  solve(n, arr);
}
```

---

### Patrón 3: Dos números por línea

**input.txt:**
```
2
3 5
10 2
```

**Código:**
```javascript
const t = nextInt();
for (let i = 0; i < t; i++) {
  const n = nextInt();
  const k = nextInt();
  solve(n, k);
}
```

---

### Patrón 4: String como entrada

**input.txt:**
```
3
abc
hello
world
```

**Código:**
```javascript
const t = nextInt();
for (let i = 0; i < t; i++) {
  const s = next();
  solve(s);
}
```

---

### Patrón 5: Matriz / Grid

**input.txt:**
```
3 4
1 2 3 4
5 6 7 8
9 10 11 12
```

**Código:**
```javascript
const n = nextInt();
const m = nextInt();
const matrix = nextMatrix(n, m);
solve(n, m, matrix);
```

---

### Patrón 6: Grafos - Lista de aristas

**input.txt:**
```
5 4
1 2
2 3
3 4
4 5
```

**Código:**
```javascript
const n = nextInt(); // número de nodos
const m = nextInt(); // número de aristas
const edges = [];
for (let i = 0; i < m; i++) {
  const u = nextInt();
  const v = nextInt();
  edges.push([u, v]);
}
solve(n, edges);
```

---

### Patrón 7: Leer hasta fin de archivo (EOF)

**input.txt:**
```
1 2
3 4
5 6
```

**Código:**
```javascript
while (idx < input.length) {
  const a = nextInt();
  const b = nextInt();
  solve(a, b);
}
```

---

## 🐛 Tips de Debugging

### Usa `console.error()` para debug
```javascript
function solve(n, arr) {
  console.error('Debug n:', n);
  console.error('Debug arr:', JSON.stringify(arr));

  // Tu solución aquí...
}
```

`console.error()` escribe a **stderr**, no afecta la salida que lee el juez.

### Visualizar estructuras de datos
```javascript
// Arrays
console.error('Array:', arr);

// Objetos y arrays anidados
console.error('Matrix:', JSON.stringify(matrix));

// Con formato bonito
console.error('Data:', JSON.stringify(obj, null, 2));
```

> ⚠️ **IMPORTANTE:** Elimina o comenta los `console.error()` antes de enviar tu solución para evitar **Time Limit Exceeded (TLE)**.

---

## ❌ Errores Comunes

### 1. Overflow de números
**Problema:** JavaScript pierde precisión con números mayores a 10¹⁵

**Solución:** Usa `BigInt`
```javascript
// ❌ Mal
const big = nextInt(); // Pierde precisión

// ✅ Bien
const big = nextBig();
const result = big * 2n; // Operaciones con BigInt usan 'n'
```

### 2. Off-by-one errors
**Problema:** Índices fuera de rango

```javascript
// ❌ Mal - índice fuera de rango
for (let i = 0; i <= n; i++) { arr[i]; }

// ✅ Bien
for (let i = 0; i < n; i++) { arr[i]; }
```

### 3. Olvidar leer toda la entrada
**Problema:** El programa termina sin leer todos los datos

```javascript
// ❌ Mal - no lee el array
const t = nextInt();
for (let i = 0; i < t; i++) {
  const n = nextInt();
  // Falta: const arr = nextArray(n);
  solve(n);
}
```

### 4. Formato de salida incorrecto
**Problema:** Espacios o saltos de línea extra

```javascript
// ❌ Mal - espacio extra al final
print(arr.join(' ') + ' ');

// ✅ Bien
printArray(arr);
```

### 5. Comparar con === vs ==
```javascript
// ❌ Puede fallar
if (str == 0) { }

// ✅ Mejor
if (str === '0') { }
if (Number(str) === 0) { }
```

---

## 📝 Ejemplo Completo

### Problema: Suma de Arrays
*Dado T casos de prueba, para cada caso calcula la suma de un array de N elementos.*

**input.txt:**
```
3
5
1 2 3 4 5
3
10 20 30
4
100 200 300 400
```

**main.js:**
```javascript
function main() {
  const t = nextInt();
  for (let i = 0; i < t; i++) {
    const n = nextInt();
    const arr = nextArray(n);
    solve(n, arr);
  }
}

function solve(n, arr) {
  const result = sum(arr);
  print(result);
}
```

**Salida esperada:**
```
15
60
1000
```

---

## 🔗 Recursos Útiles

- [Codeforces](https://codeforces.com/) - Plataforma principal de competitive programming
- [Node.js Documentation](https://nodejs.org/docs/latest/api/)
- [MDN JavaScript Reference](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference)

---

## 📄 Licencia

Este template es de uso libre para fines educativos. ¡Compártelo con quien quieras! 🎓

---

**¡Buena suerte en tus competencias!** 🏆
