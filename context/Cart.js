import react from "react";
import { createContext, useReducer } from "react";


export const CartContext = createContext()

const initialState = {
    cart: { cartItems: [] }
}


function reducer(state, action) {
    switch (action.type) {
        case 'ADD_ITEMS': {
            const newItem = action.payload


            const exisitingItem = state.cart.cartItems.find((item) => item.slug === newItem.slug)


            const cartItems = exisitingItem ? state.cart.cartItems.map((item) => item.title === exisitingItem.title ? newItem : item) : [...state.cart.cartItems, newItem]

            return { ...state, cart: { ...state.cart, cartItems } }
        }

        default:
            return state
    }

}


export function CartContextProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, initialState)
    const value = { state, dispatch }

    return <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
}
