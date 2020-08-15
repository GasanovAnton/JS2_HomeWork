const products = [
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

renderPage(products);