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
            state.items = state.items.filter((index) => {
                return(index.name !==action.payload);
            })
        },
        incrementCount : (state , action) =>
        { 
            let IncCount = state.items.find(item => item.name === action.payload.name) 
            if(IncCount)
            {
                IncCount.count+=1;
            }
        },
        decrementCount : (state , action) =>
        { 
            let IncCount = state.items.find(item => item.name === action.payload.name) 
            if(IncCount)
            {
                IncCount.count-=1;
            }
        },
    }
}); 

export const {addItem , removeItem ,incrementCount ,decrementCount} = cartSlice.actions; 
export default cartSlice.reducer;