# Matriz de casos de prueba (`src/compras.js`)

| ID | Requisito | Técnica | Datos (precio, cantidad, descuento) | Resultado esperado | Prioridad | Estado |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| CP-01 | RF-01, RF-02 | Partición válida | (25, 4, 10) | 90 | Alta | Aprobado |
| CP-02 | RF-02, RF-03 | Valor límite | (50, 2, 0) | 100 | Alta | Aprobado |
| CP-03 | RF-02, RF-03 | Valor límite | (50, 2, 100) | 0 | Alta | Aprobado |
| CP-04 | RF-03 | Partición válida (decimales) | (19.99, 3, 15) | 50.97 | Alta | Aprobado* |
| CP-05 | RF-01, RF-03 | Valor límite mínimo | (0.01, 1, 0) | 0.01 | Media | Aprobado |
| CP-06 | RF-04 | Límite inválido (precio < 0) | (-10, 2, 5) | Lanza RangeError | Alta | Aprobado* |
| CP-07 | RF-04 | Límite inválido (cantidad = 0) | (10, 0, 5) | Lanza RangeError | Alta | Aprobado* |
| CP-08 | RF-04 | Partición inválida (cantidad < 0) | (10, -3, 0) | Lanza RangeError | Alta | Aprobado* |
| CP-09 | RF-04 | Límite inválido (descuento < 0) | (10, 2, -1) | Lanza RangeError | Alta | Aprobado* |
| CP-10 | RF-04 | Límite inválido (descuento > 100) | (10, 2, 101) | Lanza RangeError | Alta | Aprobado* |
| CP-11 | RF-05 | Tipo inválido (string) | ('10', 2, 0) | Lanza TypeError | Alta | Aprobado* |
| CP-12 | RF-05 | No finito (NaN / Infinity) | (10, NaN, 0) y (Infinity, 1, 0) | Lanza TypeError | Alta | Aprobado* |

*Los casos con asterisco fallaron en la primera ejecución con el código inicial (`evidencias/pruebas-iniciales.txt`) y pasaron después de las correcciones (`evidencias/pruebas-finales.txt`).
