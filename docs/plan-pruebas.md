# Plan de pruebas - Módulo de compras (`src/compras.js`)

## 1. Alcance
En este documento se detallan las pruebas dinámicas realizadas a la función `calcularTotal(precio, cantidad, descuento)` ubicada en `src/compras.js`.

**Qué se prueba:**
- RF-01: Calcular el subtotal multiplicando precio por cantidad con valores positivos.
- RF-02: Aplicar descuentos válidos entre 0% y 100%.
- RF-03: Redondear el total a dos decimales (y devolver 0 cuando el descuento es del 100%).
- RF-04: Lanzar `RangeError` si el precio es menor a 0, la cantidad es menor o igual a 0, o el descuento está fuera de 0 a 100.
- RF-05: Lanzar `TypeError` si algún dato no es número o no es finito (`NaN`, `Infinity`, texto, `null`, `undefined`).
- RNF-01: Prueba básica de rendimiento en equipo local.

**Qué queda fuera:**
- Interfaz gráfica, base de datos, pasarelas de pago y pruebas de carga en servidor.

## 2. Nivel y tipos de pruebas
- Nivel: pruebas unitarias sobre la función `calcularTotal`.
- Tipos: pruebas funcionales (casos normales, casos inválidos y valores límite), pruebas de regresión después de corregir los errores encontrados y una prueba básica de rendimiento.

## 3. Riesgos identificados
- Errores de decimales por el manejo de punto flotante en JavaScript.
- Que la función acepte precios negativos, cantidad en cero o descuentos mayores al 100% y calcule totales incorrectos.
- Que JavaScript convierta textos o valores inválidos automáticamente y devuelva `NaN` en vez de lanzar `TypeError`.

## 4. Ambiente de pruebas
- Equipo local: Windows_NT 10.0.26200 (x64), AMD Ryzen 7 3700U, Node.js v26.13.1.
- Herramienta de pruebas: Jest ejecutado con `npm test` (`jest --runInBand`).

## 5. Criterios de entrada y salida
- Entrada: código base en `src/compras.js`, dependencias instaladas con `npm install` y casos definidos en `docs/matriz-casos.md`.
- Salida: los 12 casos automatizados aprobados tras corregir el código, al menos tres defectos documentados, pruebas de regresión sin fallos y salidas guardadas en `evidencias/`.
