import { useState } from "react";
import { Link } from "react-router-dom"

const Navbar = () => {
  const [isState, setIsState]=useState(false);
  const lock=()=>{
     document.body.classList.toggle('_lock')
  }
  const goTo=()=>{
    if(isState===true){
      setIsState(false);
    }
  }
   return (
    <nav className="navbar">
    <div className="navbarWraper">
    <div className="logo">
    <Link to ="/">Web disign</Link>
    </div>
    
    <div className="right-navbar">
    <div onClick={()=>{setIsState(!isState); lock()}} className="burg"><i class={!isState?'fa-solid fa-bars':'fa-solid fa-xmark'} ></i></div>  
      <ul className={!isState? "nav-link":"active_nav-link"}>
        <li onClick={()=>{if (isState===true) lock(); goTo()}}>
          <Link to ="/">Home</Link>
          
          
        </li>
        <li onClick={()=>{if (isState===true) lock(); goTo()}}>
        <Link to ="about">About</Link>
          
        </li>
        <li onClick={()=>{if (isState===true) lock(); goTo()}}>
        <Link to ="services">Services</Link>
          
        </li>
        <li onClick={()=>{if (isState===true) lock(); goTo()}}>
        <Link to ="price">Price</Link>
          
        </li>
      </ul>
    </div>
    </div> 
  </nav>
  );
};

export default Navbar;
