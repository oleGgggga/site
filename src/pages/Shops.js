import { textAlign } from "@mui/system";
import React, {useEffect, useState, useRef} from "react";
export const Shops=()=>{
    useEffect(() => {
        frameRef.current.src="https://yandex.ru/map-widget/v1/?um=constructor%3A5e9485c5f539b7e17367e17d50586868eb6d17b1fb6956829d64f72ea9888727&amp;source=constructor"
    },[]);
    const [loading, setLoading]=useState(true);
    const frameRef = useRef(null);
    return(
        <div className="contactWraper">
            <h1 className="locationHdr">Find our shops</h1>
            {loading?<h3 style={{textAlign: 'center', fontSize: '25px'}}>Loading...</h3>:null}
            <iframe ref={ frameRef } onLoad={()=>{setLoading(false)}} width="100%" height="400" frameBorder="0"></iframe>
        </div>
    )
}