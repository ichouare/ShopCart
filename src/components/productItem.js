import React , {useContext , useState} from 'react'
import { FaAngleDown , FaAngleUp } from "react-icons/fa";
import '../App.css'
import Cart  from './GlobalContext';

 
function ProductItem(data) {


    const {title , img , price , amount , id  } = data.data
    const {removeItem , increse , decreme} = useContext(Cart)
  return ( 
  
    <article>
    <img src={img} alt={title} />
    <div>
    <p>{title}</p>
    <p>$ {(price)}</p>
    <p onClick={()=>removeItem(id)} >remove</p>
    </div>
    <div>
    <FaAngleUp className='icon'  onClick={()=>increse(id)}/>
    <p >{amount}</p>
    <FaAngleDown className='icon' onClick={()=>decreme(id)}  />
    </div>

    
    </article>
  )
}

export default ProductItem