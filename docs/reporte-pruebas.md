# Reporte final de pruebas - Módulo de compras

## 1. Resumen de resultados
- **Ejecución inicial (código base):** 4 casos aprobados (CP-01, CP-02, CP-03, CP-05) y 8 fallidos (CP-04 y CP-06 a CP-12). Ver `evidencias/pruebas-iniciales.txt`.
- **Ejecución final (código corregido):** 12 casos aprobados y 0 fallidos. Ver `evidencias/pruebas-finales.txt`.

## 2. Defectos encontrados

| ID | Descripción y pasos | Esperado vs. Real | Severidad / Prioridad | Evidencia |
| :--- | :--- | :--- | :--- | :--- |
| DEF-01 | No redondea a 2 decimales (RF-03). Prueba: `calcularTotal(19.99, 3, 15)`. | Esperado: `50.97`. Real: `50.9745`. | Media / Alta | CP-04 fallido en `pruebas-iniciales.txt` |
| DEF-02 | No valida rangos ni lanza `RangeError` (RF-04). Pruebas: `precio=-10`, `cantidad=0`, `descuento=101`. | Esperado: lanzar `RangeError`. Real: devuelve valores negativos o 0 sin error. | Alta / Alta | CP-06 a CP-10 fallidos en `pruebas-iniciales.txt` |
| DEF-03 | No valida tipos ni finitud ni lanza `TypeError` (RF-05). Pruebas: `'10'`, `NaN`, `Infinity`. | Esperado: lanzar `TypeError`. Real: convierte el texto o devuelve `NaN`. | Alta / Alta | CP-11 y CP-12 fallidos en `pruebas-iniciales.txt` |

## 3. Cobertura por requisito
- **RF-01:** cubierto con CP-01 y CP-05 (Aprobado).
- **RF-02:** cubierto con CP-01, CP-02 y CP-03 (Aprobado).
- **RF-03:** cubierto con CP-02, CP-03, CP-04 y CP-05 (Aprobado, DEF-01 corregido).
- **RF-04:** cubierto con CP-06 a CP-10 (Aprobado, DEF-02 corregido).
- **RF-05:** cubierto con CP-11 y CP-12 (Aprobado, DEF-03 corregido).
- **RNF-01:** revisado con `scripts/rendimiento.js` (ver `evidencias/rendimiento.txt`).

## 4. Rendimiento y limitaciones (RNF-01)
Se ejecutaron 100,000 llamadas seguidas a `calcularTotal(19.99, 3, 15)` midiendo el tiempo con `performance.now()` en Windows_NT 10.0.26200 (x64), AMD Ryzen 7 3700U y Node.js v26.13.1. El tiempo total fue de **3.30 ms**, con un promedio de **0.000033 ms** por llamada (detalle en `evidencias/rendimiento.txt`).

**Limitaciones:** la prueba corre en un solo hilo en equipo local, sin red, sin base de datos ni usuarios concurrentes, y puede variar según los programas abiertos en el computador.

## 5. Riesgos pendientes
- Actualmente se permite `precio = 0` y cantidades con decimales (por ejemplo `1.5`); si el negocio solo acepta unidades enteras o precios mayores a cero, habría que ajustar esa regla.
- Con montos muy grandes, JavaScript puede perder algo de precisión por punto flotante.
- Quedan pendientes pruebas de integración cuando se conecte con el carrito de compras y facturación.
