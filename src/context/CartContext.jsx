import React, { createContext, useContext, useMemo, useReducer } from "react";

const CartContext = createContext(null);

function cartReducer(state, action) {
    switch (action.type) {
        case "ADD": {
            const { product } = action;
            const key = `${product.id}`;
            const qty = state.items[key]?.qty ?? 0;
            return {
                ...state,
                items: {
                    ...state.items,
                    [key]: { product, qty: qty + 1 },
                },
            };
        }
        case "INC": {
            const key = action.key;
            const item = state.items[key];
            if (!item) return state;
            return {
                ...state,
                items: { ...state.items, [key]: { ...item, qty: item.qty + 1 } },
            };
        }
        case "DEC": {
            const key = action.key;
            const item = state.items[key];
            if (!item) return state;
            const newQty = Math.max(0, item.qty - 1);
            const newItems = { ...state.items };
            if (newQty === 0) delete newItems[key];
            else newItems[key] = { ...item, qty: newQty };
            return { ...state, items: newItems };
        }
        case "REMOVE": {
            const key = action.key;
            const newItems = { ...state.items };
            delete newItems[key];
            return { ...state, items: newItems };
        }
        case "CLEAR":
            return { items: {} };
        default:
            return state;
    }
}

export function CartProvider({ children }) {
    const [state, dispatch] = useReducer(cartReducer, { items: {} });

    const totals = useMemo(() => {
        const entries = Object.values(state.items);
        const subtotal = entries.reduce(
            (acc, { product, qty }) => acc + product.price * qty,
            0
        );
        return { count: entries.reduce((a, b) => a + b.qty, 0), subtotal };
    }, [state.items]);

    const value = useMemo(
        () => ({ state, dispatch, totals }),
        [state, totals]
    );

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error("useCart must be used within CartProvider");
    return ctx;
}
