import { createSlice } from '@reduxjs/toolkit'

const trelloSlice = createSlice({
    name: 'trello',
    initialState:{
        trello: []
    },
    reducers: {

    }
})

export const {} = trelloSlice.actions;

export default trelloSlice.reducer;