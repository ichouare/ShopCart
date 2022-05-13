import  {useContext} from 'react'
import "../App.css"
import { FaCartArrowDown } from "react-icons/fa";
import Cart  from './GlobalContext';


const  Navbar = () => {
  const {amount} = useContext(Cart)

  return (
    <nav>
    <ul className='container'>
    <li><span>e</span>shop</li>
    <li>
    <FaCartArrowDown  className="icon"/>
     <span className="amount">{amount}</span>
    
    </li>
   
    </ul>
    </nav>
  )
}

export default Navbar