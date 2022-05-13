import React from 'react'
const Reducer = (state , action) => {
   switch(action.type){
       case"CLEAR_CART" : return {...state , post : []}
       case"REMOVE_ITEM" : return {...state , post : state.post.filter(item => item.id !== action.payload) }
       case"INCRESE" :  return {...state ,  post: state.post.map(item => {
         if(item.id === action.payload){
           return {...item , amount : item.amount + 1 }
         }
         else{
           return {...item}
         }
       })}
   case"DECREME" :  return {...state ,  post: state.post.map(item => {
         if(item.id === action.payload){
           return {...item , amount : item.amount - 1 }
         }
         else{
           return {...item}
         }
       }).filter(item => item.amount >=1)}
case "FETCH_SUCCESS" :  let tmp  = [0]
                let  GetTotal = 0
              state.post.map(item => {
                tmp.push(item.amount )
                 GetTotal += parseFloat([item.price * item.amount])
              })
   return { isLoding: false,
   post : action.payload , amount : tmp.reduce((curent , acc ) => curent + acc) , 
    total: GetTotal.toFixed(2) }

 case "FETCH_FAILED" : return  {isLoding: false, error : true , ...state}
} 

}

export default Reducer

 
   
   