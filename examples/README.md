# 📚 Ejemplos de Problemas Resueltos

Esta carpeta contiene soluciones a problemas populares de Codeforces para principiantes, usando el template de JavaScript.

## 🎯 Problemas Incluidos

| # | Problema | Dificultad | Conceptos | Link |
|---|----------|------------|-----------|------|
| 01 | Watermelon (4A) | 800 ⭐ | Condicionales, paridad | [Ver problema](https://codeforces.com/problemset/problem/4/A) |
| 02 | Way Too Long Words (71A) | 800 ⭐ | Strings, manipulación | [Ver problema](https://codeforces.com/problemset/problem/71/A) |
| 03 | Team (231A) | 800 ⭐ | Arrays, conteo, loops | [Ver problema](https://codeforces.com/problemset/problem/231/A) |

---

## 📁 Estructura de cada ejemplo

```
XX-nombre-problema/
├── solution.js   # Solución completa con explicación
└── input.txt     # Entrada de ejemplo para probar
```

---

## 🚀 Cómo ejecutar los ejemplos

```bash
# Navega a la carpeta del ejemplo
cd examples/01-watermelon-4A

# Ejecuta la solución
node solution.js < input.txt
```

---

## 📝 Descripción de cada problema

### 01 - Watermelon (4A) 🍉

**El problema más famoso de Codeforces para comenzar.**

- **Tema:** Matemáticas básicas, condicionales
- **Dificultad:** 800 (el nivel más bajo)
- **Patrón de entrada:** Un solo número

**Resumen:** Determinar si un número w se puede dividir en dos números pares positivos.

**Ejecutar:**
```bash
cd examples/01-watermelon-4A && node solution.js < input.txt
# Salida esperada: YES
```

---

### 02 - Way Too Long Words (71A) 📝

**Introducción a la manipulación de strings.**

- **Tema:** Strings, acceso a caracteres
- **Dificultad:** 800
- **Patrón de entrada:** T casos con strings

**Resumen:** Abreviar palabras largas (>10 caracteres) con el formato: primera letra + número de letras intermedias + última letra.

**Ejecutar:**
```bash
cd examples/02-way-too-long-words-71A && node solution.js < input.txt
# Salida esperada:
# word
# l10n
# i18n
# p43s
```

---

### 03 - Team (231A) 👥

**Introducción a arrays y conteo.**

- **Tema:** Arrays, loops, conteo
- **Dificultad:** 800
- **Patrón de entrada:** Múltiples líneas con arrays

**Resumen:** Contar cuántos problemas serán resueltos si al menos 2 de 3 amigos están seguros de la solución.

**Ejecutar:**
```bash
cd examples/03-team-231A && node solution.js < input.txt
# Salida esperada: 2
```

---

## 💡 Tips para resolver problemas

### 1. Lee el problema completo
- No te saltes los ejemplos
- Entiende las restricciones (tamaño de números, límites)

### 2. Analiza los ejemplos a mano
- Resuelve los ejemplos sin código primero
- Identifica el patrón

### 3. Identifica el patrón de entrada
- ¿Un solo caso o múltiples?
- ¿Qué datos vienen en cada línea?

### 4. Empieza simple
- Escribe la solución más directa primero
- Optimiza solo si es necesario

### 5. Prueba con casos extremos
- ¿Qué pasa con el mínimo? (n=1)
- ¿Qué pasa con el máximo?
- ¿Hay casos especiales?

---

## 🎓 Orden recomendado de estudio

1. **Watermelon** - Entender entrada/salida básica
2. **Way Too Long Words** - Manipulación de strings
3. **Team** - Trabajar con arrays

Después de dominar estos, prueba:
- [A+B (1A)](https://codeforces.com/problemset/problem/1/A)
- [Theatre Square (1A)](https://codeforces.com/problemset/problem/1/A)
- [Next Round (158A)](https://codeforces.com/problemset/problem/158/A)

---

## 🔗 Recursos para practicar

- [Codeforces Problemset ordenado por dificultad](https://codeforces.com/problemset?order=BY_RATING_ASC)
- [Codeforces Ladder](https://earthshakira.github.io/a2oj-clientside/server/Ladders.html) - Problemas organizados por nivel

¡Buena suerte! 🚀
