class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        //this.allProducts = [];//массив товаров c добавлением фото
        this._fetchProducts();
        this.render();//вывод товаров на страницу
        this.goodsSum();
    }
    _fetchProducts() {
        this.goods = [
            { id: 1, title: 'Notebook', price: 2000, img: "https://placeimg.com/320/240/grayscale" },
            { id: 2, title: 'Mouse', price: 20, img: "https://placeimg.com/320/240/nature" },
            { id: 3, title: 'Keyboard', price: 200, img: "https://placeimg.com/320/240/tech" },
            { id: 4, title: 'Gamepad', price: 50, img: "https://placeimg.com/320/240/animals" },
        ];
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);

            // this.allProducts.push(item);
            block.insertAdjacentHTML("beforeend", item.render());
            //block.innerHTML += item.render();
        }
    }

    goodsSum() {
        let sum = 0;
        this.goods.forEach(function (item) {
            sum += item.price
        });
        console.log(sum);
    }
}

class ProductItem {
    constructor(product) {
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = product.img;
    }
    render() {
        return `<div class="product-item">
                    <h3>${this.title}</h3>
                    <img src="${this.img}" alt="${this.title}" height: 240>
                    <p>${this.price}</p>
                    <button class="buy-btn">
                        <Span class="buy-btn__text">Купить!</Span>
                    </button>
                </div>`
    }
}

let list = new ProductList();


class BasketList {
    constructor() {
        this.products = [];
    }

    productInTheBasket() {
        this.products = [

        ]
    }

    renderBasketItem() {

    }

    sumBasketItem() {
        let sumInBasket = 0;
        this.products.forEach(function (item) {
            sum += item.price
        });
        return sumInBasket
    }
}

class BasketItem {
    constructor() {

    }

    renderBasketItem() {

    }

    addBasketItem() {

    }

    removeBasketItem() {

    }
}







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