import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selectedCategory: [],
    sort: {
        name: 'популярністю',
        sortProperty: '-rating',
    },
    search: '',

}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload
        },
        setSort: (state, action) => {
            state.sort = action.payload
        },
        setSearch: (state, action) => {
            state.search = action.payload
        },


    },
})

// Action creators are generated for each case reducer function
export const {setSelectedCategory, setSort, setSearch} = filterSlice.actions

export default filterSlice.reducer


