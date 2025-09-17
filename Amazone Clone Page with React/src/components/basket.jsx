import { useEffect } from "react";

const Cart = ({ setCartCount }) => {
    useEffect(() => {
        fetch("http://localhost:3001/api/basket")
            .then(res => res.json())
            .then(data => {
                console.log("Sepet API cevabı:", data);
                setCartCount(data.length);
            })
            .catch(err => console.error("Sepeti alma hatası:", err));
    }, [setCartCount]);

};

export default Cart;