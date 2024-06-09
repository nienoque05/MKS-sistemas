"use client"

import { IProducts } from "@/types/Types";
import { createContext, ReactNode, useState } from "react";

interface CartProps {
  id: number;
  name: string;
  photo: string;
  price: string;
  total: number;
  amount: number;
  brand: string;
  description: string;
 
}

interface ContextCartData {
  cart: CartProps[];
  cartAmount: number;
  addItemCart: (newItem: IProducts) => void;
  removeItemCart: (product: CartProps) => void;
  total: any;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as ContextCartData);

function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartProps[]>([]);
  const [total, setTotal] = useState<string | null >();

  function addItemCart(newItem: IProducts){
    const indexItem = cart.findIndex(item => item.id === newItem.id)

    if(indexItem !== -1){
                let cartList = cart;
                cartList[indexItem].amount = cartList[indexItem].amount + 1
                cartList[indexItem].total = cartList[indexItem].amount * Number(cartList[indexItem].price)
                setCart(cartList)
                totalResultCart(cartList)
                return;

    }

    let data = {
        ...newItem, amount:1, total: newItem.price
    }
        setCart(products => [...products, data])
        totalResultCart([...cart, data])
}
  function removeItemCart(product: CartProps) {
    const indexItem = cart.findIndex(item => item.id === product.id)
    if(cart[indexItem]?.amount > 1){
       let cartList = cart;
       cartList[indexItem].amount = cartList[indexItem].amount -1;
       cartList[indexItem].total = cartList[indexItem].total - Number(cartList[indexItem].price)
       setCart(cartList)
       totalResultCart(cartList)
       return
    }
    const updatedCart = cart.filter(item => item.id !== product.id);
    setCart(updatedCart);
    totalResultCart(updatedCart);
  }

  function totalResultCart(items: CartProps[]) {
    let result = items.reduce((acc, obj) => acc + parseFloat(obj.price) * obj.amount, 0);
    const format = result.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
    setTotal(format);
  }

  return (
    <CartContext.Provider value={{ cart, cartAmount: cart.length, addItemCart, removeItemCart, total }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
