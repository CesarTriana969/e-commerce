// Carrito v1
// #1 BASE DE DATOS
const db = [
  {
    id: 1,
    name: 'GTX 1650 4gbs Oc - Gigabyte',
    price: 268.41,
    image: 'assets/img/GTX 1650 4GBS OC - GIGABYTE.png',
    category: 'gráficas',
    quantity: 10
  },
  {
    id: 2,
    name: 'RTX 3060 Vision White 3 Fans 12G - GIGABYTE',
    price: 532.82,
    image: 'assets/img/GIGABYTE RTX 3060 VISION WHITE 3 FANS 12G - GIGABYTE.png',
    category: 'gráficas',
    quantity: 15
  },
  {
    id: 3,
    name: 'RTX 3090 TI Gaming X Trio 24GBS - MSI',
    price: 1722.66,
    image: 'assets/img/RTX 3090 TI GAMING X TRIO 24GBS - MSI.png',
    category: 'gráficas',
    quantity: 20
  },
  {
    id: 4,
    name: 'RTX 4090 TUF Gaming OC 24GBS - ASUS',
    price: 2251.47,
    image: 'assets/img/RTX 4090 TUF GAMING OC 24GBS - ASUS.png',
    category: 'gráficas',
    quantity: 3
  },
  {
    id: 5,
    name: 'RTX 3070 TI Rog Strix Gaming White 8G - ASUS',
    price: 769.19,
    image: 'assets/img/RTX 3070 TI ROG STRIX GAMING WHITE 8G - ASUS.png',
    category: 'gráficas',
    quantity: 11
  },
  {
    id: 6,
    name: 'PC / RYZEN 7 5800X + RTX 309',
    price: 3006.64,
    image: 'assets/img/PC - RYZEN 7 5800X + RTX 3090 - EXIBIHICION.png',
    category: 'pc_gamers',
    quantity: 20
  },
  {
    id: 7,
    name: 'PC / RYZEN 5 5600G + RX VEGA',
    price: 643.19,
    image: 'assets/img/PC - RYZEN 5 5600G + RX VEGA.png',
    category: 'pc_gamers',
    quantity: 5
  },
  {
    id: 8,
    name: 'PC / CORE I5 12400 + RTX 3050',
    price: 1065.64,
    image: 'assets/img/PC - CORE I5 12400 + RTX 3050.png',
    category: 'pc_gamers',
    quantity: 7
  },
  {
    id: 9,
    name: 'PC / CORE I5 12600K + RTX 3060 TI',
    price: 1590.85,
    image: 'assets/img/PC - CORE I5 12600K + RTX 3060 TI.png',
    category: 'pc_gamers',
    quantity: 9
  },
  {
    id: 10,
    name: 'PC / RYZEN 5 7600X + RTX 3070 TI',
    price: 2397.70,
    image: 'assets/img/PC - RYZEN 5 7600X + RTX 3070 TI.png',
    category: 'pc_gamers',
    quantity: 20
  },
  {
    id: 11,
    name: 'SAMSUNG 49" Super Curvo Ultrawide (240HZ-1MS-GSYNC)',
    price: 1330.05,
    image: 'assets/img/SAMSUNG 49 SUPER CURVO ULTRAWIDE (240HZ-1MS-GSYNC).png',
    category: 'pantallas',
    quantity: 15
  },
  {
    id: 12,
    name: 'AOC 32" Gaming Curvo (165HZ-1MS)',
    price: 432.37,
    image: 'assets/img/AOC 32 GAMING CURVO (165HZ-1MS).png',
    category: 'pantallas',
    quantity: 3
  },
  {
    id: 13,
    name: 'ASUS 32" 2K IPS ProART Diseño (75HZ-5MS)',
    price: 616.95,
    image: 'assets/img/ASUS 32 2K IPS ProART DISEÑO (75HZ-5MS).png',
    category: 'pantallas',
    quantity: 21
  },
  {
    id: 14,
    name: 'Silla Molten Red Black - GEAR',
    price: 178.28,
    image: 'assets/img/SILLA MOLTEN RED BLACK - GEAR.png',
    category: 'sillas',
    quantity: 10
  },
  {
    id: 15,
    name: 'Silla T1 Race Black & Red - CORSAIR',
    price: 338.52,
    image: 'assets/img/SILLA T1 RACE BLACK & RED - CORSAIR.png',
    category: 'sillas',
    quantity: 11
  },
  {
    id: 16,
    name: 'Silla T1 Race Black & White - CORSAIR',
    price: 338.52,
    image: 'assets/img/SILLA T1 RACE BLACK & WHITE - CORSAIR.png',
    category: 'sillas',
    quantity: 11
  },
  {
    id: 17,
    name: 'Silla T1 Race Black - CORSAIR',
    price: 338.52,
    image: 'assets/img/SILLA T1 RACE BLACK - CORSAIR.png',
    category: 'sillas',
    quantity: 11
  }
]

/* const products = window.localStorage.getItem('productsDB') ? JSON.parse(window.localStorage.getItem('productsDB')) : db */


const products = db

// #2 Pintar los productos en el DOM
const productContainer = document.getElementById('products__content')

function printProducts() {
  let html = ''

  for (let product of products) {
    html += `
    <article class="products__card">
    <div class="products__shape">
      <img src="${product.image}" alt="${product.name}" class="products__img">
    </div>

    <div class="products__data">
      <h2 class="products__name">${product.name}</h2>
      <div class="">
        <h3 class="products__price">$ ${product.price}</h3>
        <span class="products__quantity">Quedan solo ${product.quantity} unidades</span>
      </div>
      <button type="button" class="button products__button addToCart" data-id="${product.id}">
        <i class="bx bx-plus"></i>
      </button>
    </div>
  </article>`
  }

  productContainer.innerHTML = html
  window.localStorage.setItem('productsDB', JSON.stringify(products))
}

printProducts()

// #3 Carrito
let cart = window.localStorage.getItem('cartDB') ? JSON.parse(window.localStorage.getItem('cartDB')) : []

const cartContainer = document.getElementById('cart__container')
const cartCount = document.getElementById('cart-count')
const itemsCount = document.getElementById('items-count')
const cartTotal = document.getElementById('cart-total')

function printCart() {
  let html = ''
  for (let article of cart) {
    const product = products.find(p => p.id === article.id)

    html += `
      < article class="cart__card" >
    <div class="cart__box">
      <img src="${product.image}" alt="${product.name}" class="cart__img">
    </div>

    <div class="cart__details">
      <h3 class="cart__title">${product.name} <span class="cart__price">$ ${product.price}</span></h3>

      <div class="cart__amount">
        <div class="cart__amount-content">
          <span class="cart__amount-box removeToCart" data-id="${product.id}">
            <i class="bx bx-minus"></i>
          </span>

          <span class="cart__amount-number">${article.qty}</span>

          <span class="cart__amount-box addToCart" data-id="${product.id}">
            <i class="bx bx-plus"></i>
          </span>
        </div>

        <i class="bx bx-trash-alt cart__amount-trash deleteToCart" data-id="${product.id}"></i>
      </div>

      <span class="cart__subtotal">
        <span class="cart__stock">Quedan ${product.quantity - article.qty} unidades</span>
        <span class="cart__subtotal-price">${product.price * article.qty}</span>
      </span>
    </div>
  </ > `
  }

  cartContainer.innerHTML = html
  cartCount.innerHTML = totalArticles()
  itemsCount.innerHTML = totalArticles()
  cartTotal.innerHTML = numberToCurrency(totalAmount())
  checkButtons()

  window.localStorage.setItem('cartDB', JSON.stringify(cart))
}

// #4 agregar al carrito
function addToCart(id, qty = 1) {
  const product = products.find(p => p.id === id)

  if (product && product.quantity > 0) {
    const article = cart.find(a => a.id === id)

    if (article) {
      if (checkStock(id, qty + article.qty)) {
        article.qty++
      } else {
        window.alert('No hay stock suficiente')
      }
    } else {
      cart.push({ id, qty })
    }
  } else {
    window.alert('Producto agotado')
  }
  printCart()
}

function checkStock(id, qty) {
  const product = products.find(p => p.id === id)
  return product.quantity - qty >= 0
}

// #5 remover articulos
function removeFromCart(id, qty = 1) {
  const article = cart.find(a => a.id === id)

  if (article && article.qty - qty > 0) {
    article.qty--
  } else {
    const confirm = window.confirm('Estás Seguro???')

    if (confirm) {
      cart = cart.filter(a => a.id !== id)
    }
  }
  printCart()
}

// #6 Eliminar del carrito
function deleteFormCart(id) {
  const article = cart.find(a => a.id === id)
  cart.splice(cart.indexOf(article), 1)
  printCart()
}

// #7 Contar Articulos
function totalArticles() {
  // let acc = 0
  // for (let article of cart) {
  //   acc += article.qty
  // }
  // return acc

  return cart.reduce((acc, article) => acc + article.qty, 0)
}

// #8 El total
function totalAmount() {
  return cart.reduce((acc, article) => {
    const product = products.find(p => p.id === article.id)

    return acc + product.price * article.qty
  }, 0)
}

// #9 Limpiar carrito
function clearCart() {
  cart = []
  // cart.length = 0
  printCart()
}

// #10 Comparar
function checkout() {
  cart.forEach(artcile => {
    const product = products.find(p => p.id === artcile.id)

    product.quantity -= artcile.qty
  })
  clearCart()
  printCart()
  printProducts()
  window.alert('Gracias por su compra')
}

function checkButtons() {
  if (cart.length > 0) {
    document.getElementById('cart-checkout').removeAttribute('disabled')
    document.getElementById('cart-empty').removeAttribute('disabled')
  } else {
    document.getElementById('cart-checkout').setAttribute('disabled', 'disabled')
    document.getElementById('cart-empty').setAttribute('disabled', 'disabled')
  }
}

function numberToCurrency(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(value)
}

printCart()

productContainer.addEventListener('click', function (e) {
  const add = e.target.closest('.addToCart')

  if (add) {
    const id = +add.dataset.id
    addToCart(id)
  }
})

cartContainer.addEventListener('click', function (e) {
  const remove = e.target.closest('.removeToCart')
  const add = e.target.closest('.addToCart')
  const deleteCart = e.target.closest('.deleteToCart')

  if (remove) {
    const id = +remove.dataset.id
    removeFromCart(id)
  }

  if (add) {
    const id = +add.dataset.id
    addToCart(id)
  }

  if (deleteCart) {
    const id = +deleteCart.dataset.id
    deleteFormCart(id)
  }
})

const actionButtons = document.getElementById('action-buttons')

actionButtons.addEventListener('click', function (e) {
  const clear = e.target.closest('#cart-empty')
  const buy = e.target.closest('#cart-checkout')

  if (clear) {
    clearCart()
  }

  if (buy) {
    checkout()
  }
})

