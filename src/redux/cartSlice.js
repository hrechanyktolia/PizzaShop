import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    products: [],
    totalSum: 0,
}

 export const cartSlice = createSlice ({
    name: 'cart',
    initialState,
    reducers: {
        // addProduct: (state, action) => {
        //     const findProduct = state.products.find(obj => obj.id === action.payload.id)
        //     if (findProduct) {
        //         findProduct.count++
        //     } else {
        //         state.products.push({...action.payload, count: 1})
        //     }
        //     state.totalSum = state.products.reduce((sum, obj) => sum + obj.price * obj.count, 0)
        // },

        addProduct: (state, action) => {
            const productToAdd = action.payload;
            const existingProductIndex = state.products.findIndex(
                (product) => product.id === productToAdd.id && product.type === productToAdd.type
            );

            if (existingProductIndex !== -1) {
                state.products[existingProductIndex].count += 1;
            } else {
                state.products.push({...productToAdd, count: 1});
            }
            state.totalSum = state.products.reduce((sum, obj) => sum + obj.price * obj.count, 0);
        },

        plusProduct: (state, action) => {
            const findProduct = state.products.find(obj => obj.id === action.payload)
            if (findProduct) {
                findProduct.count++
            }
            state.totalSum = state.products.reduce((sum, obj) => sum + obj.price * obj.count, 0)
        },
        minusProduct: (state, action) => {
            const findProduct = state.products.find(obj => obj.id === action.payload)
            if (findProduct && findProduct.count > 0) {
                findProduct.count--
            }
            state.totalSum = state.products.reduce((sum, obj) => sum + obj.price * obj.count, 0)
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter(obj => obj.id !== action.payload)

            state.totalSum = state.products.reduce((sum, obj) => sum + obj.price * obj.count, 0)
        },
    },
})

export const {addProduct, plusProduct, minusProduct, removeProduct} = cartSlice.actions

export default cartSlice.reducer
