import React, {useRef} from 'react';
import { NavLink } from 'react-router-dom';
function NavigationHeader ({status, cbChangeStatus}){
    function getLinkClass({isActive}) {
        let className="pageLink";
        if (isActive)
          className+=" activePageLink";
        return className;
      }
      const menuRef = useRef(null);
    return(
        <>
                <NavLink  onClick={()=>cbChangeStatus()} to="/" end className="header_logo">logo</NavLink>
            <nav ref={menuRef} className={`menu_body ${status?'showMenu':''}`}>
                <ul className='menu_list'>
                <NavLink onClick={()=>cbChangeStatus()} to="/bikes" end className={getLinkClass}>bikes</NavLink>
                <NavLink  onClick={()=>cbChangeStatus()} to="/shops" end className={getLinkClass}>shops</NavLink>
                <NavLink  onClick={()=>cbChangeStatus()} to="/HowToRide" end className={getLinkClass}>how to ride</NavLink>
                </ul>
            </nav>
        </>
    )
}
export default React.memo(NavigationHeader);