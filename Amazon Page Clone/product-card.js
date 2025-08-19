const productsData = [
    {
        id: 1,
        image: "https://img.kitapyurdu.com/v1/getImage/fn:12057306/wh:true/wi:800",
        title: "Sari Yüz",
        author: "R.F. Kuang ve Elif Ersavci",
        rating: 4.2,
        reviewCount: 139,
        price: 143.00,
        discount: 50.00,
        deliveryDate: "11 Ağu Cum"
    },
    {
        id: 2,
        image: "https://i.dr.com.tr/cache/500x400-0/originals/0002170854001-1.jpg",
        title: "Detaylar",
        author: "Ia Genberg ve Zeynep Tamer",
        rating: 4.1,
        reviewCount: 17,
        price: 72.00,
        discount: 50.00,
        deliveryDate: "11 Ağu Cum"
    },
    {
        id: 3,
        image: "https://img.kitapyurdu.com/v1/getImage/fn:11905540/wi:400/wh:true",
        title: "Yellowface",
        author: "R.F. Kuang ve Helen Laser",
        rating: 4.2,
        reviewCount: 261,
        price: 2117.70,
        deliveryDate: "Stokta sadece 1 adet kaldi."
    },
    {
        id: 4,
        image: "https://img.kitapyurdu.com/v1/getImage/fn:11754005/wh:true/wi:800",
        title: "Sendeki Yüz Bende Olsa",
        author: "[Yazar] France Chal[Çevirmen] Türkan Colak",
        rating: 5.0,
        reviewCount: 2,
        price: 131.78,
        discount: 50.00,
        deliveryDate: "9 Ağu Cmt"
    },
    {
        id: 5,
        image: "https://www.selyayincilik.com/kapaklar/opt/bir-ask.jpg",
        title: "Bir Ask",
        author: "Sara Mesa ve Cagla Soykan",
        rating: 5.0,
        reviewCount: 3,
        price: 99.00,
        discount: 50.00,
        deliveryDate: "9 Ağu Cmt"
    }
];

function createProductCard(product){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    productCard.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.title}" class="product-img">
        </div>
        <div class="product-info">
            <h3 class="product-title">${product.title}</h3>
            <p class="product-author">${product.author}</p>
            <div class="product-rating">
                ${'⭐'.repeat(Math.floor(product.rating))} (${product.reviewCount})
            </div>
            <p class="product-price">${product.price.toFixed(2)} TL</p>
            <button class="add-to-cart" data-product-id="${product.id}">Add to cart</button>
        </div>
    `;
        const addToCartBtn = productCard.querySelector('.add-to-cart');
        addToCartBtn.addEventListener('click', () => {
        alert(`${product.title} sepete eklendi!`);
    });

    return productCard;
}
document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.getElementById('products-container');

    productsData.forEach(product => {
        const card = createProductCard(product);
        productsContainer.appendChild(card);
    });
});