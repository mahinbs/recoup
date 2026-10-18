import React, { createContext, useContext } from 'react';
const CartContext = createContext({ items: [], count: 0, total: 0, add() {}, remove() {}, setQty() {}, clear() {} });
export function CartProvider({ children }) { return <CartContext.Provider value={{ items: [], count: 0, total: 0, add() {}, remove() {}, setQty() {}, clear() {} }}>{children}</CartContext.Provider>; }
export function useCart() { return useContext(CartContext); }
