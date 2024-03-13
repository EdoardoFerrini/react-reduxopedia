import { createSlice } from "@reduxjs/toolkit"
import { resetReduxopedia } from "../action/actions"
const initialState = () =>{
    return {
        destinations : [
            {
                name: "Hong Kong",
                days: 7,
                fact: "world's longest covered scalator",
            },
            {
                name: "Japan",
                days: 10,
                fact: "Japan is mostly mountains",
            },
            {
                name: "New Zeland",
                days: 14,
                fact: "Last country in the world to be inhabitated by humans",
            },
    ],
    destinationSelected: null
}
}

export const destinationSlice = createSlice({
    name:"destination",
    initialState: initialState,
    reducers: {
        destinationClicked: (state, action)=>{
            state.destinationSelected = action.payload
        },
        resetDestination: (state,action)=>{
            console.log(action)
            state.destinationSelected = null
        }
    },
    extraReducers: (builder) =>{
        builder.addCase(resetReduxopedia, (state)=>{
            state.destinationSelected = null;
        })
    }
})

export const { destinationClicked, resetDestination } = destinationSlice.actions
export const destinationReducer = destinationSlice.reducer