import {createSlice, PayloadAction} from '@reduxjs/toolkit'

type Sort = {
    name: string,
    sortProperty: '-rating' | 'title' | '-price' | 'price',
}

interface IFilterSlice {
    selectedCategory: number[];
    sort: Sort;
    search: string;
}


const initialState: IFilterSlice = {
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
        setSelectedCategory: (state, action: PayloadAction<number>) => {
            state.selectedCategory = action.payload
        },
        setSort: (state, action: PayloadAction<Sort>) => {
            state.sort = action.payload
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload
        },


    },
})

export const {setSelectedCategory, setSort, setSearch} = filterSlice.actions

export default filterSlice.reducer


