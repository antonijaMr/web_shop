import React, { createContext, useState } from "react";
import { getProduct } from "./services/ProductService.js";

export const cartContext = createContext();

export function CartProvider(props) {
    const [items, setItems] = useState([]);

    function addItemToCart(id) {
        const product = getProduct(id);
        setItems((prevItems) => {
            const item = prevItems.find((item) => (item.id == id));
            if (!item) {
                //item is not true
                return [...prevItems, {
                    id,
                    qty: 1,//quatntity koliko ih ima
                    product,
                    totalPrice: product.price
                }]
            } else {
                //if id matches
                return prevItems.map((item) => {
                    if (item.id == id) {
                        item.qty++;
                        item.totalPrice += product.price;
                    }
                    return item;
                })
            }
        })

    }
    function getItemsCount() {
        //what is sum???
        return items.reduce((sum, item) => (sum + item.qty), 0);
    }
    function getTotalPrice() {
        return items.reduce((sum, item) => (sum + item.totalPrice), 0);
    }

    return (
        <cartContext.Provider value={{items, getItemsCount, addItemToCart, getTotalPrice }}>
            {props.children}
        </cartContext.Provider>

    )
}