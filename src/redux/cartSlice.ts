import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export type CartProducts = {
    id: number,
    imageUrl: string,
    title: string,
    span: string,
    price: number,
    type: string,
}

interface ICartSlice {
    products: CartProducts[];
    totalSum: number;
    cartPopup: null;
}


const initialState: ICartSlice = {
    products: [],
    totalSum: 0,
    cartPopup: null,
}

 export const cartSlice = createSlice ({
    name: 'cart',
     initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<CartProducts>) => {
            const findProduct = state.products.find(obj => obj.id === action.payload.id)
            if (findProduct) {
                findProduct.count++
            } else {
                state.products.push({...action.payload, count: 1})
            }
            state.totalSum = state.products.reduce((sum, obj) => sum + obj.price * obj.count, 0)
        },

        // addProduct: (state, action) => {
        //     const findProduct = state.products.find(product => product.id === action.payload.id && product.type === action.payload.type);
        //
        //     if (findProduct) {
        //         findProduct.count += 1;
        //     } else {
        //         state.products.push({...action.payload, count: 1});
        //     }
        //
        //     state.totalSum = state.products.reduce((sum, obj) => sum + obj.price * obj.count, 0);
        // },

        minusProduct: (state, action: PayloadAction<number>) => {
            const findProduct = state.products.find(obj => obj.id === action.payload)
            if (findProduct  && findProduct.count > 0) {
                findProduct.count--
            }
            state.totalSum = state.products.reduce((sum, obj) => sum + obj.price * obj.count, 0)
        },
        removeProduct: (state, action: PayloadAction<number>) => {
            state.products = state.products.filter(obj => obj.id !== action.payload)

            state.totalSum = state.products.reduce((sum, obj) => sum + obj.price * obj.count, 0)
        },
        toggleCartBtn: (state, action: PayloadAction<boolean>) => {
            state.cartPopup = action.payload
        }
    },
})


export const {addProduct, minusProduct, removeProduct, toggleCartBtn} = cartSlice.actions

export default cartSlice.reducer
