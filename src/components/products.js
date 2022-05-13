import React  ,{useReducer  , useContext}from 'react'
import Data from '../data'
import ProductItem  from './productItem'
import Cart  from './GlobalContext';




function Products() {
const {total , ClearCart , post} = useContext(Cart)
 


if(post.length !== 0){
  return (
    <section >
    <div className='container-products'>
     <h2>YOUR BAG</h2>
     <div className="Product">
     {
        post.map(Product => {
            return <ProductItem  key={Product.id} data={{...Product}} />
        })
     }
     </div>
     <div className='amount'>
     <p>total</p>
     <p>${total}</p>
     </div>
     <button className='btn' onClick={ClearCart}>Clear Cart</button>
    </div>   </section>)

}
 else{
   return(  

<section>
<div className='container-products'> 
 <h2>YOUR BAG</h2>
 <h4>is currently empty</h4>

</div>
</section>
   )


 } 
} 

  


export default Products