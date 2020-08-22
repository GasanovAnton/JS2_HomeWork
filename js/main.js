const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
const btnBasket = document.querySelector(".btn-cart")
const basket = document.querySelector(".basket")
class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.buttons = [];
        this.allProducts = [];//массив товаров c добавлением фото
        //this._fetchProducts();
        this.render();//вывод товаров на страницу
        this._getProducts()
            .then(data => {
                this.goods = [...data];
                this.render()
                this.buttons = document.querySelectorAll('.buy-btn');
            });
    }

    _getProducts() {
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }
    }

    goodsSum() {
        let sum = this.allProducts.reduce((accum, item) => accum += item.price, 0);
        return sum;
    }
}

class ProductItem {
    constructor(product, img = 'https://placeimg.com/320/240/tech') {
        this.title = product.product_name;
        this.id = product.id_product;
        this.price = product.price;
        this.img = img;
    }
    render() {
        return `<div class="product-item">
                    <h3>${this.title}</h3>
                    <img src="${this.img}" alt="${this.title}" height: 240>
                    <p>${this.price}</p>
                    <button class="buy-btn" data-id="${this.id}">
                        <Span class="buy-btn__text">Купить!</Span>
                    </button>
                </div>`
    }
}

let list = new ProductList();


class BasketList {
    constructor() {
        this.productInBasket = [];
        this.amount;
        this.countGoods;
        this._getProducts()
            .then(data => {
                this.productInBasket = [...data.contents];
                this.amount = data.amount;
                this.countGoods = data.countGoods;
                this.render()
            });
    }

    _getProducts() {
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }

    addBasketItem() {
        
    }

    removeBasketItem() {

    }

    changeBasketItem() {

    }
    render() {
        const block = document.querySelector('.basket__table')
        for (let product of this.productInBasket) {
            const basketObj = new BasketItem(product);
            block.insertAdjacentHTML('beforeend', basketObj.render());
        }
        block.insertAdjacentHTML('beforeend', this.renderTotal());
    }

    renderTotal() {
        return `<tr>
                    <td class="basket__ID"> </td>
                    <td class="basket__item-name"> Итог </td>
                    <td class="basket__price">${this.amount}</td>
                    <td class="basket__count">${this.countGoods}</td>
                </tr>`
    }
}

class BasketItem {
    constructor(productInBasket) {
        this.title = productInBasket.product_name;
        this.id = productInBasket.id_product;
        this.price = productInBasket.price;
        this.count = productInBasket.quantity;
    }
    render() {
        return `<tr>
                    <td class="basket__ID">${this.id}</td>
                    <td class="basket__item-name">${this.title}</td>
                    <td class="basket__price">${this.price}</td>
                    <td class="basket__count">${this.count}</td>
                </tr>`
    }
}

btnBasket.addEventListener('click', () => {
    basket.classList.toggle('hidden')
})

let newBasketList = new BasketList();






/*_fetchProducts() {
        this.goods = [
            { id: 1, title: 'Notebook', price: 2000, img: "https://placeimg.com/320/240/grayscale" },
            { id: 2, title: 'Mouse', price: 20, img: "https://placeimg.com/320/240/nature" },
            { id: 3, title: 'Keyboard', price: 200, img: "https://placeimg.com/320/240/tech" },
            { id: 4, title: 'Gamepad', price: 50, img: "https://placeimg.com/320/240/animals" },
        ];
    }*/








/*const products = [
    { id: 1, title: 'Notebook', price: 2000, img: src = "https://placeimg.com/320/240/grayscale" },
    { id: 2, title: 'Mouse', price: 20, img: src = "https://placeimg.com/320/240/nature" },
    { id: 3, title: 'Keyboard', price: 200, img: src = "https://placeimg.com/320/240/tech" },
    { id: 4, title: 'Gamepad', price: 50, img: src = "https://placeimg.com/320/240/animals" },
];

//Функция для формирования верстки каждого товара
const renderProduct = (item) => {
    return `<div class="product-item">
                <h3>${item.title}</h3>
                <img src="${item.img}" alt="${item.title}" height: 240>
                <p>${item.price}</p>
                <button class="buy-btn">
                    <Span class="buy-btn__text">Купить!</Span>
                </button>
            </div>`
};

const renderPage = list => {
    const productsList = list.map(item => renderProduct(item));
    const productsListNew = productsList.join('');
    document.querySelector('.products').innerHTML = productsListNew;
};

renderPage(products);*/