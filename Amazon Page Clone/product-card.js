const productsData = [
    {
        id: 1,
        image: "https://img.kitapyurdu.com/v1/getImage/fn:12057306/wh:true/wi:800",
        title: "Sarı Yüz",
        author: "R.F. Kuang ve Elif Ersavcı",
        rating: 4.2,
        reviewCount: 139,
        price: 143.00,
        discount: 60,
        deliveryDate: "FREE delivery on orders over 300 TL for products delivered by Amazon on Wednesday, September 10"
    },
    {
        id: 2,
        image: "https://i.dr.com.tr/cache/500x400-0/originals/0002170854001-1.jpg",
        title: "Detaylar",
        author: "Ia Genberg ve Zeynep Tamer",
        rating: 4.1,
        reviewCount: 17,
        price: 72.00,
        discount: 70,
        deliveryDate: "FREE delivery on orders over 300 TL for products delivered by Amazon on Wednesday, September 10"
    },
    {
        id: 3,
        image: "https://img.kitapyurdu.com/v1/getImage/fn:11905540/wi:400/wh:true",
        title: "Yellowface",
        author: "R.F. Kuang ve Helen Laser",
        rating: 4.2,
        reviewCount: 261,
        price: 2117.70,
        discount: 80,
        deliveryDate: "FREE delivery on orders over 300 TL for products delivered by Amazon on Wednesday, September 10"
    },
    {
        id: 4,
        image: "https://img.kitapyurdu.com/v1/getImage/fn:11754005/wh:true/wi:800",
        title: "Sendeki Yüz Bende Olsa",
        author: "France Chal",
        rating: 5.0,
        reviewCount: 2,
        price: 131.78,
        discount: 50,
        deliveryDate: "FREE delivery on orders over 300 TL for products delivered by Amazon on Wednesday, September 10"
    },
    {
        id: 5,
        image: "https://www.selyayincilik.com/kapaklar/opt/bir-ask.jpg",
        title: "Bir Aşk",
        author: "Sara Mesa ve Çağla Soykan",
        rating: 5.0,
        reviewCount: 3,
        price: 99.00,
        discount: 60,
        deliveryDate: "FREE delivery on orders over 300 TL for products delivered by Amazon on Wednesday, September 10"
    },
    {
        id: 6,
        image: "https://img.kitapyurdu.com/v1/getImage/fn:12057316/wh:true/wi:800",
        title: "Gece ve Gündüz",
        author: "Virginia Woolf",
        rating: 4.4,
        reviewCount: 189,
        price: 87.90,
        discount: 70,
        deliveryDate: "FREE delivery on orders over 300 TL for products delivered by Amazon on Wednesday, September 10"
    },
    {
        id: 7,
        image: "https://img.kitapyurdu.com/v1/getImage/fn:12057317/wh:true/wi:800",
        title: "Norwegian Wood",
        author: "Haruki Murakami",
        rating: 4.9,
        reviewCount: 567,
        price: 189.50,
        discount: 80,
        deliveryDate: "FREE delivery on orders over 300 TL for products delivered by Amazon on Wednesday, September 10"
    },
    {
        id: 8,
        image: "https://img.kitapyurdu.com/v1/getImage/fn:12057318/wh:true/wi:800",
        title: "Denizaltında 20.000 Fersah",
        author: "Jules Verne",
        rating: 4.7,
        reviewCount: 234,
        price: 156.80,
        discount: 90,
        deliveryDate: "FREE delivery on orders over 300 TL for products delivered by Amazon on Wednesday, September 10"
    },
    {
        id: 9,
        image: "https://img.kitapyurdu.com/v1/getImage/fn:12057319/wh:true/wi:800",
        title: "Gömülü Dev",
        author: "Kazuo Ishiguro",
        rating: 4.6,
        reviewCount: 345,
        price: 142.30,
        discount: 60,
        deliveryDate: "FREE delivery on orders over 300 TL for products delivered by Amazon on Wednesday, September 10"
    },
    {
        id: 10,
        image: "https://img.kitapyurdu.com/v1/getImage/fn:12057320/wh:true/wi:800",
        title: "Geceyarısı Çocukları",
        author: "Salman Rushdie",
        rating: 4.8,
        reviewCount: 456,
        price: 178.90,
        discount: 70,
        deliveryDate: "FREE delivery on orders over 300 TL for products delivered by Amazon on Wednesday, September 10"
    },
    {
        id: 11,
        image: "https://img.kitapyurdu.com/v1/getImage/fn:12057321/wh:true/wi:800",
        title: "Amerikanah",
        author: "Chimamanda Ngozi Adichie",
        rating: 4.5,
        reviewCount: 289,
        price: 134.60,
        discount: 80,
        deliveryDate: "FREE delivery on orders over 300 TL for products delivered by Amazon on Wednesday, September 10"
    },
    {
        id: 12,
        image: "https://img.kitapyurdu.com/v1/getImage/fn:12057322/wh:true/wi:800",
        title: "Yabancı",
        author: "Albert Camus",
        rating: 4.7,
        reviewCount: 378,
        price: 167.40,
        discount: 90,
        deliveryDate: "FREE delivery on orders over 300 TL for products delivered by Amazon on Wednesday, September 10"
    },
    {
        id: 13,
        image: "https://img.kitapyurdu.com/v1/getImage/fn:12057323/wh:true/wi:800",
        title: "Sevilen",
        author: "Toni Morrison",
        rating: 4.9,
        reviewCount: 523,
        price: 198.70,
        discount: 100,
        deliveryDate: "FREE delivery on orders over 300 TL for products delivered by Amazon on Wednesday, September 10"
    },
    {
        id: 14,
        image: "https://img.kitapyurdu.com/v1/getImage/fn:12057324/wh:true/wi:800",
        title: "Yüzyıllık Yalnızlık",
        author: "Gabriel García Márquez",
        rating: 4.6,
        reviewCount: 412,
        price: 145.80,
        discount: 70,
        deliveryDate: "FREE delivery on orders over 300 TL for products delivered by Amazon on Wednesday, September 10"
    },
    {
        id: 15,
        image: "https://img.kitapyurdu.com/v1/getImage/fn:12057325/wh:true/wi:800",
        title: "Hayvanlardan Tanrılara Sapiens",
        author: "Yuval Noah Harari",
        rating: 4.8,
        reviewCount: 334,
        price: 189.20,
        discount: 60,
        deliveryDate: "FREE delivery on orders over 300 TL for products delivered by Amazon on Wednesday, September 10"
    },
    {
        id: 16,
        image: "https://img.kitapyurdu.com/v1/getImage/fn:12057326/wh:true/wi:800",
        title: "Simyacı",
        author: "Paulo Coelho",
        rating: 4.7,
        reviewCount: 456,
        price: 156.90,
        discount: 80,
        deliveryDate: "FREE delivery on orders over 300 TL for products delivered by Amazon on Wednesday, September 10"
    },
    {
        id: 17,
        image: "https://img.kitapyurdu.com/v1/getImage/fn:12057327/wh:true/wi:800",
        title: "Beyaz Kale",
        author: "Orhan Pamuk",
        rating: 4.6,
        reviewCount: 298,
        price: 129.50,
        discount: 90,
        deliveryDate: "FREE delivery on orders over 300 TL for products delivered by Amazon on Wednesday, September 10"
    },
    {
        id: 18,
        image: "https://img.kitapyurdu.com/v1/getImage/fn:12057328/wh:true/wi:800",
        title: "Napoli Romanları",
        author: "Elena Ferrante",
        rating: 4.8,
        reviewCount: 432,
        price: 154.20,
        discount: 100,
        deliveryDate: "FREE delivery on orders over 300 TL for products delivered by Amazon on Wednesday, September 10"
    },
    {
        id: 19,
        image: "https://img.kitapyurdu.com/v1/getImage/fn:12057329/wh:true/wi:800",
        title: "Gülün Adı",
        author: "Umberto Eco",
        rating: 4.7,
        reviewCount: 389,
        price: 178.40,
        discount: 70,
        deliveryDate: "FREE delivery on orders over 300 TL for products delivered by Amazon on Wednesday, September 10"
    },
    {
        id: 20,
        image: "https://img.kitapyurdu.com/v1/getImage/fn:12057330/wh:true/wi:800",
        title: "Ruhlar Evi",
        author: "Isabel Allende",
        rating: 4.9,
        reviewCount: 511,
        price: 162.30,
        discount: 60,
        deliveryDate: "FREE delivery on orders over 300 TL for products delivered by Amazon on Wednesday, September 10"
    },
    {
        id: 21,
        image: "https://img.kitapyurdu.com/v1/getImage/fn:12057331/wh:true/wi:800",
        title: "Damızlık Kızın Öyküsü",
        author: "Margaret Atwood",
        rating: 4.5,
        reviewCount: 245,
        price: 148.90,
        discount: 50,
        deliveryDate: "FREE delivery on orders over 300 TL for products delivered by Amazon on Wednesday, September 10"
    },
    {
        id: 22,
        image: "https://img.kitapyurdu.com/v1/getImage/fn:12057332/wh:true/wi:800",
        title: "Semerkant",
        author: "Amin Maalouf",
        rating: 4.7,
        reviewCount: 367,
        price: 139.80,
        discount: 60,
        deliveryDate: "FREE delivery on orders over 300 TL for products delivered by Amazon on Wednesday, September 10"
    },
    {
        id: 23,
        image: "https://img.kitapyurdu.com/v1/getImage/fn:12057333/wh:true/wi:800",
        title: "Yaşlı Adam ve Deniz",
        author: "Ernest Hemingway",
        rating: 4.8,
        reviewCount: 478,
        price: 174.60,
        discount: 70,
        deliveryDate: "FREE delivery on orders over 300 TL for products delivered by Amazon on Wednesday, September 10"
    },
    {
        id: 24,
        image: "https://img.kitapyurdu.com/v1/getImage/fn:12057334/wh:true/wi:800",
        title: "Görünmez Kentler",
        author: "Italo Calvino",
        rating: 4.6,
        reviewCount: 352,
        price: 127.40,
        discount: 80,
        deliveryDate: "FREE delivery on orders over 300 TL for products delivered by Amazon on Wednesday, September 10"
    },
    {
        id: 25,
        image: "https://img.kitapyurdu.com/v1/getImage/fn:12057335/wh:true/wi:800",
        title: "Bulut Atlası",
        author: "David Mitchell",
        rating: 4.9,
        reviewCount: 589,
        price: 195.00,
        discount: 90,
        deliveryDate: "FREE delivery on orders over 300 TL for products delivered by Amazon on Wednesday, September 10"
    },
    {
        id: 26,
        image: "https://img.kitapyurdu.com/v1/getImage/fn:12057336/wh:true/wi:800",
        title: "Aşk",
        author: "Elif Şafak",
        rating: 4.4,
        reviewCount: 221,
        price: 118.90,
        discount: 100,
        deliveryDate: "FREE delivery on orders over 300 TL for products delivered by Amazon on Wednesday, September 10"
    },
    {
        id: 27,
        image: "https://img.kitapyurdu.com/v1/getImage/fn:12057337/wh:true/wi:800",
        title: "Bereketli Topraklar Üzerinde",
        author: "Orhan Kemal",
        rating: 4.7,
        reviewCount: 341,
        price: 132.40,
        discount: 50,
        deliveryDate: "FREE delivery on orders over 300 TL for products delivered by Amazon on Wednesday, September 10"
    },
    {
        id: 28,
        image: "https://img.kitapyurdu.com/v1/getImage/fn:12057338/wh:true/wi:800",
        title: "İnce Memed",
        author: "Yaşar Kemal",
        rating: 4.9,
        reviewCount: 564,
        price: 176.30,
        discount: 60,
        deliveryDate: "FREE delivery on orders over 300 TL for products delivered by Amazon on Wednesday, September 10"
    },
    {
        id: 29,
        image: "https://img.kitapyurdu.com/v1/getImage/fn:12057339/wh:true/wi:800",
        title: "Amerikan Tanrıları",
        author: "Neil Gaiman",
        rating: 4.8,
        reviewCount: 487,
        price: 162.50,
        discount: 70,
        deliveryDate: "FREE delivery on orders over 300 TL for products delivered by Amazon on Wednesday, September 10"
    },
    {
        id: 30,
        image: "https://img.kitapyurdu.com/v1/getImage/fn:12057340/wh:true/wi:800",
        title: "Mrs Dalloway",
        author: "Virginia Woolf",
        rating: 4.6,
        reviewCount: 312,
        price: 147.20,
        discount: 80,
        deliveryDate: "FREE delivery on orders over 300 TL for products delivered by Amazon on Wednesday, September 10"
    },
    {
        id: 31,
        image: "https://img.kitapyurdu.com/v1/getImage/fn:12057341/wh:true/wi:800",
        title: "Hobbit",
        author: "J.R.R. Tolkien",
        rating: 4.9,
        reviewCount: 678,
        price: 198.40,
        discount: 90,
        deliveryDate: "FREE delivery on orders over 300 TL for products delivered by Amazon on Wednesday, September 10"
    },
    {
        id: 32,
        image: "https://img.kitapyurdu.com/v1/getImage/fn:12057342/wh:true/wi:800",
        title: "Buz ve Ateşin Şarkısı",
        author: "George R.R. Martin",
        rating: 4.8,
        reviewCount: 523,
        price: 189.70,
        discount: 100,
        deliveryDate: "FREE delivery on orders over 300 TL for products delivered by Amazon on Wednesday, September 10"
    },
    {
        id: 33,
        image: "https://img.kitapyurdu.com/v1/getImage/fn:12057343/wh:true/wi:800",
        title: "Uçurtma Avcısı",
        author: "Khaled Hosseini",
        rating: 4.7,
        reviewCount: 389,
        price: 154.90,
        discount: 50,
        deliveryDate: "FREE delivery on orders over 300 TL for products delivered by Amazon on Wednesday, September 10"
    },
    {
        id: 34,
        image: "https://img.kitapyurdu.com/v1/getImage/fn:12057344/wh:true/wi:800",
        title: "Satranç",
        author: "Stefan Zweig",
        rating: 4.5,
        reviewCount: 389,
        price: 154.90,
        discount: 60,
        deliveryDate: "FREE delivery on orders over 300 TL for products delivered by Amazon on Wednesday, September 10"
    },
    {
        id: 35,
        image: "https://img.kitapyurdu.com/v1/getImage/fn:12057345/wh:true/wi:800",
        title: "Orlando",
        author: "Virginia Woolf",
        rating: 4.6,
        reviewCount: 275,
        price: 160.00,
        discount: 70,
        deliveryDate: "FREE delivery on orders over 300 TL for products delivered by Amazon on Wednesday, September 10"
    },
    {
        id: 36,
        image: "https://img.kitapyurdu.com/v1/getImage/fn:12057346/wh:true/wi:800",
        title: "Şato",
        author: "Franz Kafka",
        rating: 4.5,
        reviewCount: 315,
        price: 130.00,
        discount: 80,
        deliveryDate: "FREE delivery on orders over 300 TL for products delivered by Amazon on Wednesday, September 10"
    },
    {
        id: 37,
        image: "https://img.kitapyurdu.com/v1/getImage/fn:12057347/wh:true/wi:800",
        title: "Don Kişot",
        author: "Miguel de Cervantes",
        rating: 4.8,
        reviewCount: 492,
        price: 210.00,
        discount: 90,
        deliveryDate: "FREE delivery on orders over 300 TL for products delivered by Amazon on Wednesday, September 10"
    },
    {
        id: 38,
        image: "https://img.kitapyurdu.com/v1/getImage/fn:12057348/wh:true/wi:800",
        title: "Monte Kristo Kontu",
        author: "Alexandre Dumas",
        rating: 4.7,
        reviewCount: 365,
        price: 190.00,
        discount: 100,
        deliveryDate: "FREE delivery on orders over 300 TL for products delivered by Amazon on Wednesday, September 10"
    },
    {
        id: 39,
        image: "https://img.kitapyurdu.com/v1/getImage/fn:12057349/wh:true/wi:800",
        title: "Vadideki Zambak",
        author: "Honoré de Balzac",
        rating: 4.4,
        reviewCount: 212,
        price: 120.00,
        discount: 50,
        deliveryDate: "FREE delivery on orders over 300 TL for products delivered by Amazon on Wednesday, September 10"
    },
    {
        id: 40,
        image: "https://img.kitapyurdu.com/v1/getImage/fn:12057350/wh:true/wi:800",
        title: "Çavdar Tarlasında Çocuklar",
        author: "J.D. Salinger",
        rating: 4.6,
        reviewCount: 334,
        price: 145.00,
        discount: 60,
        deliveryDate: "FREE delivery on orders over 300 TL for products delivered by Amazon on Wednesday, September 10"
    },
    {
        id: 41,
        image: "https://img.kitapyurdu.com/v1/getImage/fn:12057351/wh:true/wi:800",
        title: "Anna Karenina",
        author: "Lev Tolstoy",
        rating: 4.9,
        reviewCount: 523,
        price: 200.00,
        discount: 70,
        deliveryDate: "FREE delivery on orders over 300 TL for products delivered by Amazon on Wednesday, September 10"
    },
    {
        id: 42,
        image: "https://img.kitapyurdu.com/v1/getImage/fn:12057352/wh:true/wi:800",
        title: "Suç ve Ceza",
        author: "Fyodor Dostoyevski",
        rating: 4.8,
        reviewCount: 612,
        price: 185.00,
        discount: 80,
        deliveryDate: "FREE delivery on orders over 300 TL for products delivered by Amazon on Wednesday, September 10"
    },
    {
        id: 43,
        image: "https://img.kitapyurdu.com/v1/getImage/fn:12057353/wh:true/wi:800",
        title: "Savaş ve Barış",
        author: "Lev Tolstoy",
        rating: 4.9,
        reviewCount: 698,
        price: 220.00,
        discount: 90,
        deliveryDate: "FREE delivery on orders over 300 TL for products delivered by Amazon on Wednesday, September 10"
    },
    {
        id: 44,
        image: "https://img.kitapyurdu.com/v1/getImage/fn:12057354/wh:true/wi:800",
        title: "Dönüşüm",
        author: "Franz Kafka",
        rating: 4.5,
        reviewCount: 345,
        price: 115.00,
        discount: 100,
        deliveryDate: "FREE delivery on orders over 300 TL for products delivered by Amazon on Wednesday, September 10"
    },
    {
        id: 45,
        image: "https://img.kitapyurdu.com/v1/getImage/fn:12057355/wh:true/wi:800",
        title: "Madame Bovary",
        author: "Gustave Flaubert",
        rating: 4.6,
        reviewCount: 278,
        price: 138.00,
        discount: 50,
        deliveryDate: "FREE delivery on orders over 300 TL for products delivered by Amazon on Wednesday, September 10"
    }
];

function createProductCard(product) {
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