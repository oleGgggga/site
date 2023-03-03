import React from "react";
import { useNavigate } from 'react-router-dom';
const MainPage = () => {  
  const navigate = useNavigate();
      return (      
      <div className="main_screen">
        <h1 className="main_header">enjoy your ride</h1>
        <button onClick={()=>{navigate('/bikes')}} className="main_Btn_shop">Click and choose your bike</button>
      </div>
      
      
    );
    
};
export default MainPage;