const { calcularTotal } = require('../src/compras');

describe('Pruebas de calcularTotal', () => {
  // Casos válidos y valores límite
  test('CP-01: cálculo normal con descuento del 10%', () => {
    expect(calcularTotal(25, 4, 10)).toBe(90);
  });

  test('CP-02: compra sin descuento (0%)', () => {
    expect(calcularTotal(50, 2, 0)).toBe(100);
  });

  test('CP-03: descuento del 100% debe dar 0', () => {
    expect(calcularTotal(50, 2, 100)).toBe(0);
  });

  test('CP-04: redondea el total a dos decimales', () => {
    expect(calcularTotal(19.99, 3, 15)).toBe(50.97);
  });

  test('CP-05: precio mínimo con una unidad', () => {
    expect(calcularTotal(0.01, 1, 0)).toBe(0.01);
  });

  // Validación de rangos (RangeError)
  test('CP-06: precio negativo lanza RangeError', () => {
    expect(() => calcularTotal(-10, 2, 5)).toThrow(RangeError);
  });

  test('CP-07: cantidad en 0 lanza RangeError', () => {
    expect(() => calcularTotal(10, 0, 5)).toThrow(RangeError);
  });

  test('CP-08: cantidad negativa lanza RangeError', () => {
    expect(() => calcularTotal(10, -3, 0)).toThrow(RangeError);
  });

  test('CP-09: descuento menor a 0% lanza RangeError', () => {
    expect(() => calcularTotal(10, 2, -1)).toThrow(RangeError);
  });

  test('CP-10: descuento mayor a 100% lanza RangeError', () => {
    expect(() => calcularTotal(10, 2, 101)).toThrow(RangeError);
  });

  // Validación de tipos (TypeError)
  test('CP-11: precio como texto lanza TypeError', () => {
    expect(() => calcularTotal('10', 2, 0)).toThrow(TypeError);
  });

  test('CP-12: valores NaN o Infinity lanzan TypeError', () => {
    expect(() => calcularTotal(10, NaN, 0)).toThrow(TypeError);
    expect(() => calcularTotal(Infinity, 1, 0)).toThrow(TypeError);
  });
});
