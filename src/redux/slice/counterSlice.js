import { createSlice } from "@reduxjs/toolkit";
import { resetDestination } from "./destinationSlice";
import { reseReduxopedia, resetReduxopedia} from "../action/actions";

const initialState = {count : 0 }

export const counterSlice = createSlice({
    name:"counter",
    initialState: initialState,
    reducers: {
        increment: (state)=>{
            state.count += 1;
        },
        decrement: (state) =>{
            state.count -= 1
        },
        increaseMultiplier: (state, action)=>{
            state.count += Number(action.payload)
        },
        decreaseMultiplier: (state, action)=>{
            state.count -= Number(action.payload)
        }
    },
    extraReducers: (builder) =>{
        builder.addCase(resetReduxopedia, (state)=>{
            state.count = 0;
        })
    }
})

export const { 
    increment,
    decrement, 
    increaseMultiplier, 
    decreaseMultiplier,
    resetCount
} = counterSlice.actions;
export const counterReducer = counterSlice.reducer