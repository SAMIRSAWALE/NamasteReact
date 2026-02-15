const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
    
    name : "cart",
    initialState : {
        items : [],
        count : 0,
    },
    reducers : {
        addItem : (state, action) => {
            let isExist = state.items.find(item => item.name === action.payload.name);
            console.log("this is the isexist",isExist);
            if(isExist)
            {
                  isExist.count += 1; 
            }
            else{
                 state.items.push({...action.payload,count : 1});
            }
        },
        removeItem : (state , action) =>
        {
            (action.payload);
            state.items = state.items.filter((index) => {
                return(index.name !==action.payload);
            })
        }
    }
}); 

export const {addItem , removeItem } = cartSlice.actions; 
export default cartSlice.reducer;