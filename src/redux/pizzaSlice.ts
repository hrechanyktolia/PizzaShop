import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import axios from "axios";

export const fetchPizza = createAsyncThunk(
    'pizza/fetchPizzaStatus',
    async ({order, sortBy, selectedCategory}) => {
        const {data} = await axios.get(`https://63a4bd1f2a73744b007f13dd.mockapi.io/pizzaItems?category=${selectedCategory}&sortBy=${sortBy}&order=${order}`)
        return data;
    }
)

type Products = {
    id: number,
    imageUrl: string,
    title: string,
    span: string,
    body: string,
    types: number[],
    price: number[],
}

interface IPizzaSlice {
    products: Products[];
    loading: string,
}

const initialState: IPizzaSlice = {
    products: [],
    loading: 'pending'
}

export const pizzaSlice = createSlice ({
    name: 'pizza',
    initialState,
    reducers: {
        setPizzaItems: (state, action) => {
            state.products = action.payload;
            state.loading = "succeeded";
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPizza.pending, (state) => {
            state.loading = 'pending'
            state.products = []
        });
        builder.addCase(fetchPizza.fulfilled, (state, action) => {
            state.products = action.payload;
            state.loading = 'succeeded'
        });
        builder.addCase(fetchPizza.rejected, (state) => {
            state.loading = 'failed'
            state.products = []
        })
    },
})

export const {setPizzaItems} = pizzaSlice.actions

export default pizzaSlice.reducer