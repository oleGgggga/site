import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
export const fetchData = createAsyncThunk(
    'data/fetchData',
    async function(_, {rejectWithValue}) {
        try {
            const response = await fetch('http://localhost:3004/item');
            
            if (!response.ok) {
                throw new Error('Server Error!');
            }
    
            const data = await response.json();
    
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
const setError = (state, action) => {
    state.status = 'rejected';
    state.error = action.payload;
}
const initialState={
    data: [],
    filtredData: [],
    searchData:[],
    status: null,
    error: null,
    log:false,
};
const itemsSlice=createSlice({
    name: 'items',
    initialState,
    reducers:{
        loginEdit: (state)=>{
            state.log=true;
        },
        logoutEdit: (state)=>{
            state.log=false;
        },
        itemFilter: (state, action)=>{
            switch (`${action.payload}`){
                case '0':{
                const newItems=state.data.slice();
                state.filtredData=newItems;
                state.searchData=newItems;
                }
                break;
                case '1':{
                const newItems=state.data.slice(0,25);
                state.filtredData=newItems;
                state.searchData=newItems;
                }
                break;
                case '2':{
                const newItems=state.data.slice(25,50);
                state.filtredData=newItems;
                state.searchData=newItems;
                }
                break;
                default:{
                const newItems=state.data.slice();
                state.filtredData=newItems;
                state.searchData=newItems;
                }
                
            }
        },
        itemSearch: (state, action)=>{
            const searchValue=action.payload;
            const newArr=[...state.filtredData];
            state.searchData=newArr.filter(({title})=>{
                return (
                title.toLowerCase().includes(searchValue.toLowerCase()))
            })
        }
    },
    extraReducers: {
        [fetchData.pending]: (state) => {
            state.status = 'pending';
            state.error = null;
        },
        [fetchData.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.data = action.payload;
            state.filtredData=action.payload;
            state.searchData=action.payload;
        },
        [fetchData.rejected]: setError,
        
    },


})
export const {itemFilter, itemSearch, loginEdit, logoutEdit}=itemsSlice.actions;
export default itemsSlice.reducer;