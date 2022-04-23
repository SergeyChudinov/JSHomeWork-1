const products = [
    {id: 1, title: 'Notebook', price: 1000},
    {id: 2, title: 'Mouse', price: 100},
    {id: 3, title: 'Keyboard', price: 250},
    {id: 4, title: 'Gamepad', price: 150},
];

const getProductHTMLString = (good, img='https://via.placeholder.com/200x150') => {
    return `
      <div class="product-item">
        <img src="${img}" alt="Some img">
        <h3>${good.title}</h3>
        <p>${good.price}</p>
        <button class="by-btn">Добавить</button>
      </div>`;
};

const renderProducts = (productList) => {
  const list = productList.map((good) => getProductHTMLString(good)).join('');

  document.querySelector('.products').innerHTML = list;

}

renderProducts(products);


