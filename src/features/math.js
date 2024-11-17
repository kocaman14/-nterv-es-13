import { createSlice } from "@reduxjs/toolkit";

const initialState={
    number:0,
    finally:false,
    process:"",
    act:"",
    totaly:"",
    newAr:"",
    
   
}

export const mathLabSlice=createSlice({
name:"math",
initialState,
reducers:{
    enterNumber:(state,action)=>{
let sayi = action.payload      
state.number =sayi
console.log(state.number)

    },
    sendNumber:(state,action)=>{
state.totaly=state.process.map((proc)=>proc.number)
state.newAr=state.totaly.slice(-2)
console.log(state.newAr)
    },
    halfButton:(state,action)=>{
state.number = state.number / 2
state.act = "half"
state.process=[...state.process,{name:state.act,number:state.number}]


    },
    doubleButton:(state,action)=>{
state.number = state.number *2 
state.act = "dobule"
state.process=[...state.process,{name:state.act,number:state.number}]


    },
    incrementButton:(state,action)=>{
state.number +=1 
state.act = "increment"
state.process=[...state.process,{name:state.act,number:state.number}]

    },

decrementButton:(state,action)=>{
state.number -=1
state.act = "decrement"
state.process=[...state.process,{name:state.act,number:state.number}]

},
clearNumber:(state,action)=>{
state.process=[]
state.newAr=[]
state.number = 0

}








},



})



export const {enterNumber,sendNumber,halfButton,doubleButton,incrementButton,decrementButton,clearNumber} = mathLabSlice.actions
export default mathLabSlice.reducer