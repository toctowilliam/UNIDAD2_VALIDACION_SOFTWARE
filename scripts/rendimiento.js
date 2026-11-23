const os = require('os');
const { performance } = require('perf_hooks');
const { calcularTotal } = require('../src/compras');

const iteraciones = 100000;

const inicio = performance.now();
for (let i = 0; i < iteraciones; i++) {
  calcularTotal(19.99, 3, 15);
}
const fin = performance.now();

const tiempoTotal = fin - inicio;
const promedio = tiempoTotal / iteraciones;

console.log('Prueba de rendimiento - calcularTotal');
console.log(`Sistema operativo: ${os.type()} ${os.release()} (${os.arch()})`);
console.log(`CPU: ${os.cpus()[0]?.model || 'No disponible'}`);
console.log(`Node.js: ${process.version}`);
console.log(`Iteraciones: ${iteraciones}`);
console.log(`Tiempo total: ${tiempoTotal.toFixed(2)} ms`);
console.log(`Promedio por llamada: ${promedio.toFixed(6)} ms`);
