import express from "express";
import cors from "cors";
import { products } from "./products.js";

const app = express();
app.use(express.json());
app.use(cors());

// In-memory basket storage (in a real app, this would be in a database)
const basket = [];

const getBasketWithProducts = () => {
  return basket.map((item) => {
    const product = products.find((p) => p.id === item.productId);
    return Object.assign(Object.assign({}, item), {
      product,
      subtotal: product ? product.price * item.quantity : 0,
    });
  });
};

const wait = () => new Promise((res) => setTimeout(res, 1000));

// GET /api/products - Get all products
app.get("/api/products", async (req, res) => {
  await wait();
  const { category, search } = req.query;
  let filteredProducts = products;
  if (category) {
    filteredProducts = filteredProducts.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );
  }
  if (search) {
    const searchTerm = search.toLowerCase();
    filteredProducts = filteredProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(searchTerm) ||
        p.description.toLowerCase().includes(searchTerm)
    );
  }
  res.json(filteredProducts);
});
// GET /api/product/:id - Get specific product
app.get("/api/product/:id", async (req, res) => {
  await wait();
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);
  if (!product) {
    return res.status(404).send("Product not found");
  }
  res.json(product);
});
// POST /add-to-basket/:id - Add product to basket
app.post("/api/add-to-basket/:id", async (req, res) => {
  await wait();
  const productId = parseInt(req.params.id);
  const { quantity = 1 } = req.body || {};
  const product = products.find((p) => p.id === productId);
  if (!product) {
    return res.status(404).send("Product not found");
  }
  const existingItem = basket.find((item) => item.productId === productId);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    basket.push({ productId, quantity });
  }

  res.json(getBasketWithProducts());
});
// DELETE /remove-from-basket/:id - Remove product from basket
app.delete("/api/remove-from-basket/:id", async (req, res) => {
  await wait();
  const productId = parseInt(req.params.id);
  const { quantity = 1 } = req.body || {};
  const itemIndex = basket.findIndex((item) => item.productId === productId);
  if (itemIndex === -1) {
    return res.status(404).json({
      success: false,
      error: "Product not in basket",
    });
  }
  if (quantity && quantity > 0) {
    // Remove specific quantity
    basket[itemIndex].quantity -= quantity;
    if (basket[itemIndex].quantity <= 0) {
      basket.splice(itemIndex, 1);
    }
  } else {
    // Remove entire item
    basket.splice(itemIndex, 1);
  }

  res.json(getBasketWithProducts());
});

app.delete("/api/delete-from-basket/:id", async (req, res) => {
  await wait();
  const productId = parseInt(req.params.id);
  const itemIndex = basket.findIndex((item) => item.productId === productId);
  if (itemIndex === -1) {
    return res.status(404).json({
      success: false,
      error: "Product not in basket",
    });
  } else {
    // Remove entire item
    basket.splice(itemIndex, 1);
  }

  res.json(getBasketWithProducts());
});

// GET /basket - Get current basket
app.get("/api/basket", async (req, res) => {
  await wait();
  res.json(getBasketWithProducts());
});
// POST /basket/clear - Clear entire basket
app.post("/api/basket/clear", async (req, res) => {
  await wait();
  basket.length = 0;
  res.send([]);
});

app.listen(3001, () => {
  console.log("Server Started");
});
