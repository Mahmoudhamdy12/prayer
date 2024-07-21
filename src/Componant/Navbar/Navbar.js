import { FaMosque } from "react-icons/fa6";

import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
      <h1>Prayer Times</h1>
      <div  className='mosque-icon'><FaMosque /></div>
    </div>
  )
}

export default Navbar