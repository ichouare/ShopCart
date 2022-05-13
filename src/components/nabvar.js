import  {useContext} from 'react'
import "../App.css"
import { FaCartArrowDown } from "react-icons/fa";
import Cart  from './GlobalContext';


const  Navbar = () => {
  const {amount} = useContext(Cart)

  return (
    <nav>
    <ul className='container'>
    <li>eshop</li>
    <li>
    <span className="amount">{amount}</span>
    <FaCartArrowDown  className="icon"/>
     
    
    </li>
   
    </ul>
    </nav>
  )
}

export default Navbar