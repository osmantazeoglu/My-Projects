import express from 'express'
import cors from 'cors'
const app = express()
app.use(express.json())
app.use(cors())

const products = [
    {
        id: 1,
        image: "https://img.kitapyurdu.com/v1/getImage/fn:12057306/wh:true/wi:800",
        title: "Sari Yüz",
        author: "R.F. Kuang ve Elif Ersavci",
        rating: 4.2,
        reviewCount: 139,
        price: 143.00,
        discount: 50.00,
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
        discount: 50.00,
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
        discount: 50.00,
        deliveryDate: "FREE delivery on orders over 300 TL for products delivered by Amazon on Wednesday, September 10"
    },
    {
        id: 4,
        image: "https://img.kitapyurdu.com/v1/getImage/fn:11754005/wh:true/wi:800",
        title: "Sendeki Yüz Bende Olsa",
        author: "[Yazar] France Chal",
        rating: 5.0,
        reviewCount: 2,
        price: 131.78,
        discount: 50.00,
        deliveryDate: "FREE delivery on orders over 300 TL for products delivered by Amazon on Wednesday, September 10"
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
        deliveryDate: "FREE delivery on orders over 300 TL for products delivered by Amazon on Wednesday, September 10"
    },
    {
        id: 15,
        image: "https://img.kitapyurdu.com/v1/getImage/fn:12057316/wh:true/wi:800",
        title: "Mor Gece",
        author: "Virginia Woolf ve Selin Arslan",
        rating: 4.4,
        reviewCount: 189,
        price: 87.90,
        discount: 25.00,
        deliveryDate: "FREE delivery on orders over 300 TL for products delivered by Amazon on Wednesday, September 10"
    },
    {
        id: 16,
        image: "https://img.kitapyurdu.com/v1/getImage/fn:12057317/wh:true/wi:800",
        title: "Kırmızı Gül Bahçesi",
        author: "Haruki Murakami ve Deniz Yılmaz",
        rating: 4.9,
        reviewCount: 567,
        price: 189.50,
        discount: 80.00,
        deliveryDate: "FREE delivery on orders over 300 TL for products delivered by Amazon on Wednesday, September 10"
    },
    {
        id: 17,
        image: "https://img.kitapyurdu.com/v1/getImage/fn:12057318/wh:true/wi:800",
        title: "Mavi Deniz Masalları",
        author: "Isabel Allende ve Zeynep Kaya",
        rating: 4.7,
        reviewCount: 234,
        price: 156.80,
        discount: 65.00,
        deliveryDate: "FREE delivery on orders over 300 TL for products delivered by Amazon on Wednesday, September 10"
    },
    {
        id: 18,
        image: "https://img.kitapyurdu.com/v1/getImage/fn:12057319/wh:true/wi:800",
        title: "Yeşil Yaprak Rüzgarı",
        author: "Kazuo Ishiguro ve Ahmet Demir",
        rating: 4.6,
        reviewCount: 345,
        price: 142.30,
        discount: 55.00,
        deliveryDate: "FREE delivery on orders over 300 TL for products delivered by Amazon on Wednesday, September 10"
    },
    {
        id: 19,
        image: "https://img.kitapyurdu.com/v1/getImage/fn:12057320/wh:true/wi:800",
        title: "Altın Güneş Işığı",
        author: "Salman Rushdie ve Leyla Öz",
        rating: 4.8,
        reviewCount: 456,
        price: 178.90,
        discount: 70.00,
        deliveryDate: "FREE delivery on orders over 300 TL for products delivered by Amazon on Wednesday, September 10"
    },
    {
        id: 20,
        image: "https://img.kitapyurdu.com/v1/getImage/fn:12057321/wh:true/wi:800",
        title: "Gümüş Ay Parlaması",
        author: "Chimamanda Ngozi Adichie ve Selin Arslan",
        rating: 4.5,
        reviewCount: 289,
        price: 134.60,
        discount: 45.00,
        deliveryDate: "FREE delivery on orders over 300 TL for products delivered by Amazon on Wednesday, September 10"
    },
    {
        id: 21,
        image: "https://img.kitapyurdu.com/v1/getImage/fn:12057322/wh:true/wi:800",
        title: "Turkuaz Gökyüzü",
        author: "Jhumpa Lahiri ve Can Özkan",
        rating: 4.7,
        reviewCount: 378,
        price: 167.40,
        discount: 60.00,
        deliveryDate: "FREE delivery on orders over 300 TL for products delivered by Amazon on Wednesday, September 10"
    },
    {
        id: 22,
        image: "https://img.kitapyurdu.com/v1/getImage/fn:12057323/wh:true/wi:800",
        title: "Mor Gölge Dansı",
        author: "Toni Morrison ve Zeynep Tamer",
        rating: 4.9,
        reviewCount: 523,
        price: 198.70,
        discount: 75.00,
        deliveryDate: "FREE delivery on orders over 300 TL for products delivered by Amazon on Wednesday, September 10"
    },
    {
        id: 23,
        image: "https://img.kitapyurdu.com/v1/getImage/fn:12057324/wh:true/wi:800",
        title: "Kırmızı Şafak Vakti",
        author: "Gabriel García Márquez ve Emre Gül",
        rating: 4.6,
        reviewCount: 412,
        price: 145.80,
        discount: 50.00,
        deliveryDate: "FREE delivery on orders over 300 TL for products delivered by Amazon on Wednesday, September 10"
    },
    {
        id: 24,
        image: "https://img.kitapyurdu.com/v1/getImage/fn:12057325/wh:true/wi:800",
        title: "Mavi Rüya Gecesi",
        author: "Yann Martel ve Cagla Soykan",
        rating: 4.8,
        reviewCount: 334,
        price: 189.20,
        discount: 80.00,
        deliveryDate: "FREE delivery on orders over 300 TL for products delivered by Amazon on Wednesday, September 10"
    },
    {
        id: 25,
        image: "https://img.kitapyurdu.com/v1/getImage/fn:12057326/wh:true/wi:800",
        title: "Yeşil Orman Sırrı",
        author: "Paulo Coelho ve Mehmet Yılmaz",
        rating: 4.7,
        reviewCount: 456,
        price: 156.90,
        discount: 65.00,
        deliveryDate: "FREE delivery on orders over 300 TL for products delivered by Amazon on Wednesday, September 10"
    }
];
// In-memory basket storage (in a real app, this would be in a database)
const basket = [];

const getBasketWithProducts = () => {
    return basket.map(item => {
        const product = products.find(p => p.id === item.productId);
        return Object.assign(Object.assign({}, item), { product, subtotal: product ? product.price * item.quantity : 0 });
    });
}

const wait = () => new Promise(res => setTimeout(res, 1000))

// GET /api/products - Get all products
app.get('/api/products', async (req, res) => {
    await wait()
    const { category, search } = req.query;
    let filteredProducts = products;
    if (category) {
        filteredProducts = filteredProducts.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }
    if (search) {
        const searchTerm = search.toLowerCase();
        filteredProducts = filteredProducts.filter(p => p.name.toLowerCase().includes(searchTerm) ||
            p.description.toLowerCase().includes(searchTerm));
    }
    res.json(filteredProducts);
});
// GET /api/product/:id - Get specific product
app.get('/api/product/:id', async (req, res) => {
    await wait()
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);
    if (!product) {
        return res.status(404).send('Product not found');
    }
    res.json(product);
});
// POST /add-to-basket/:id - Add product to basket
app.post('/api/add-to-basket/:id', async (req, res) => {
    await wait()
    const productId = parseInt(req.params.id);
    const { quantity = 1 } = req.body || {};
    const product = products.find(p => p.id === productId);
    if (!product) {
        return res.status(404).send('Product not found');
    }
    const existingItem = basket.find(item => item.productId === productId);
    if (existingItem) {
        existingItem.quantity += quantity;
    }
    else {
        basket.push({ productId, quantity });
    }

    res.json(getBasketWithProducts());
});
// DELETE /remove-from-basket/:id - Remove product from basket
app.delete('/api/remove-from-basket/:id', async (req, res) => {
    await wait()
    const productId = parseInt(req.params.id);
    const { quantity = 1 } = req.body || {};
    const itemIndex = basket.findIndex(item => item.productId === productId);
    if (itemIndex === -1) {
        return res.status(404).json({
            success: false,
            error: 'Product not in basket'
        });
    }
    if (quantity && quantity > 0) {
        // Remove specific quantity
        basket[itemIndex].quantity -= quantity;
        if (basket[itemIndex].quantity <= 0) {
            basket.splice(itemIndex, 1);
        }
    }
    else {
        // Remove entire item
        basket.splice(itemIndex, 1);
    }

    res.json(getBasketWithProducts());
});
// GET /basket - Get current basket
app.get('/api/basket', async (req, res) => {
    await wait()
    res.json(getBasketWithProducts());
});
// POST /basket/clear - Clear entire basket
app.post('/api/basket/clear', async (req, res) => {
    await wait()
    basket.length = 0;
    res.send([]);
});



app.listen(3001, () => {
    console.log('Server Started')
})
