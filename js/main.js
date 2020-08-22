const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
const btnBasket = document.querySelector(".btn-cart");
const basket = document.querySelector(".basket");
let productInBasketGlobal = [];
let buttons = [];
class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];//массив товаров c добавлением фото
        //this._fetchProducts();
        this.render();//вывод товаров на страницу
        this._getProducts()
            .then(data => {
                this.goods = [...data];
                this.render();
                this.btnActive();
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

    btnActive() {
        buttons = document.querySelectorAll('.buy-btn');
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                newBasketList.addBasketItem(btn);
            })
        })
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
                productInBasketGlobal = this.productInBasket;
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

    addBasketItem(btn) {
        console.log(btn.dataset.id);
        this.productInBasket.forEach(product => {
            if (btn.dataset.id == product.id_product) {
                product.quantity += 1;
                product.price += product.price;
                this.render();
            }
        })
    }

    clearBasket() {

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
    constructor(product) {
        this.title = product.product_name;
        this.id = product.id_product;
        this.price = product.price;
        this.count = product.quantity;
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