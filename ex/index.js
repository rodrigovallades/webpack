const product = {
  name: 'Black pen',
  price: 1.90,
  discount: 0.05
}

function clone(obj) {
  return { ...obj }
}

const newProduct = clone(product)
newProduct.name = 'Blue pen'

console.log(product, newProduct)
