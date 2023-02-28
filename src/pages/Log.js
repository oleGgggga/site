import React, { useRef, useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux'
import { loginEdit} from "../redux/itemsSlice";
import { logoutEdit } from "../redux/itemsSlice";
export const Log = () => {
    const userRef = useRef();
    const [errMsg, setErrMsg] = useState('');
    const dispatch=useDispatch();
    const success=useSelector(state=>state.items.log);
    useEffect(() => {
        userRef.current.focus();
    }, [])
    const submit=(eo)=>{
        eo.preventDefault();
        const name=eo.target[0].value;
        const psw=eo.target[1].value;
        fetch("http://localhost:3004/user/").then((res) => {
            return res.json();
        }).then(([res]) => {
        if (res.password === psw && res.name===name) {
                    dispatch(loginEdit());
                    setErrMsg('');
        }else {
                    setErrMsg('wrong password should be 123 or name should be oleg');
                } 
        }
        ).catch((err) => {
            setErrMsg(err);
        });
        }
    return (
        success ?
        <div className="info_wraper">
        <div className="info_container">
            <div>
                <h1 style={{fontSize: "30px", textAlign: "center", marginBottom: "30px"}}>You are logged in!</h1>
                <p>
                    <button className="logOut" onClick={()=>{dispatch(logoutEdit());}}>log out</button>
                </p>
            </div>
        </div>
        </div>
        :
        <div className="info_wraper">
            <div className="info_container">
            <div className="logwr">
            <p className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
                    <h1>Sign In</h1>
                    <form onSubmit={submit}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            className="username"
                            ref={userRef}
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            className="password"
                            required
                        />
                        <button>Sign In</button>
                    </form>
            </div>
            </div>
        </div>
    )
}