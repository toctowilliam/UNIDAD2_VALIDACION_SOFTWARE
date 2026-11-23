function calcularTotal(precio, cantidad, descuento) {
  // Validar que los datos de entrada sean números válidos
  if (
    typeof precio !== 'number' || !Number.isFinite(precio) ||
    typeof cantidad !== 'number' || !Number.isFinite(cantidad) ||
    typeof descuento !== 'number' || !Number.isFinite(descuento)
  ) {
    throw new TypeError('Los parámetros deben ser números válidos');
  }

  // Validar rangos permitidos
  if (precio < 0 || cantidad <= 0 || descuento < 0 || descuento > 100) {
    throw new RangeError('Valores fuera del rango permitido');
  }

  if (descuento === 100) {
    return 0;
  }

  const subtotal = precio * cantidad;
  const valorDescuento = (subtotal * descuento) / 100;
  const total = subtotal - valorDescuento;

  // Redondear a 2 decimales
  return Math.round(total * 100) / 100;
}

module.exports = { calcularTotal };
