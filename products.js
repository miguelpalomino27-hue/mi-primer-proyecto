const products = [
 { id: 1, name: 'Laptop HP', price: 2500 },
 { id: 2, name: 'Mouse Logitech', price: 45 },
 { id: 3, name: 'Teclado Mecánico', price: 120 },
 { id: 4, name: 'Monitor LG', price: 850 },
];

function getProductById(id) {
 return products.find(p => p.id === id) ?? null;
}

function calculateDiscount(product, discount) {
 if (!product || product.price == null || product.price < 0) {
  throw new Error('Precio inválido');
 }
 return product.price - (product.price * discount);
}

function filterExpensive(minPrice) {
 return products.filter(p => p.price > minPrice);
}

module.exports = { getProductById, calculateDiscount, filterExpensive };