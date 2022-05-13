import react , { useEffect, useReducer} from 'react';
import './App.css';
import Navbar from './components/nabvar';
import Products from './components/products';
import Amount  from './components/GlobalContext';
import Reducer from "./components/Reducer"
import Data from "./data"


const initialValue = {
  isLoding :true,
  post:[] ,
  amount : 0 ,
  total : 0 , 
  error :" " 
}



function App() {
  
  const [state , dispatch] = useReducer(Reducer , initialValue)


  const ClearCart = () => {
  dispatch({type:"CLEAR_CART"})
}

  const removeItem = (id) => {
    dispatch({type:"REMOVE_ITEM",payload : id})
}
const increse = (id)=> {
  dispatch({type :"INCRESE" , payload: id })
}
const decreme = (id)=> {
  dispatch({type :"DECREME" , payload: id })
}
useEffect(()=> {
  const url ='https://course-api.com/react-useReducer-cart-project'
     fetch(url)
     .then(res => res.json())
     .then (data => dispatch({type:"FETCH_SUCCESS" , payload: data}))
     .catch(error => {
    dispatch({type:"FETCH_FAILED" , payload: error})

  })
} ,[state])


if( ! state.isLoding){
  return (
    <div>
     <h1>loding</h1>
    </div>
  )
}

else {

  return (
    <div className="App"  >
<Amount.Provider value={{...state , ClearCart  , removeItem , increse , decreme}}>
  <Navbar/>
  <Products />

</Amount.Provider>
     
    </div>
  );
}
 
  }

export default App;
