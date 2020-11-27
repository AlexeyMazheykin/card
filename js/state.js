const state = {
    id: 1,
    vendorCode: '123OH:Owerb456',
    type: 'cond',
    title: 'Наружный кондиционер MXZ-2E5',
    inStock: true,
    price: 140700,
    images: [
        {
            src: "./img/card-pic/mitsubishi.jpg",
            alt: "12345678"
        },
        {
            src: "./img/card-pic/ec88f83c72347a4d4f034c71d2c80b27.png",
            alt: "middd"
        }
    ]
}
const isUserAuth = true;
const user = {
    discount: 11
}


// adding list of thumbs
const thumbsContainer = document.querySelector('.card__choice');
state.images.forEach((image) => {
    let thumb = document.createElement('a');
    thumb.classList = 'card__choice-thumb';
    thumb.href = '#!';
    thumb.innerHTML = `<img src=${image.src} alt=${image.alt} class="card__choice-pic" />`
    thumbsContainer.appendChild(thumb);
});


//Card filling

// Vendor Code
document.querySelector('#vendor__code').textContent = state.vendorCode;
// Title
document.querySelector('.card__title').textContent = state.title;
// Is In Stock
document.querySelector('#in__stock').textContent = state.inStock ? 'в наличии' : 'нет в наличии';
//Price
state.price.toLocaleString('ru-RU');
user__price.textContent =
    isUserAuth ?
        `${((state.price - state.price * user.discount / 100).toLocaleString('ru-RU'))}.00`
             : 'sssss';













