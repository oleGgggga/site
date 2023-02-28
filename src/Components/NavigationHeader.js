import React, {useRef} from 'react';
import { NavLink } from 'react-router-dom';
function NavigationHeader ({status}){
    // function getLinkClass({isActive}) {
    //     let className="pageLink";
    //     if (isActive)
    //       className+=" activePageLink";
    //     return className;
    //   }
    //   const menuRef = useRef(null);
    return(
        <>
                <NavLink to="/" end className="header_logo">logo</NavLink>
            {/* <nav ref={menuRef} className={`menu_body ${status?'showMenu':''}`}>
                <ul className='menu_list'>
                <NavLink to="/" end className={getLinkClass}>bikes</NavLink>
                <NavLink to="/contacts" end className={getLinkClass}>contacts</NavLink>
                <NavLink to="/how to ride" end className={getLinkClass}>how to ride</NavLink>
                </ul>
            </nav> */}
        </>
    )
}
export default NavigationHeader;