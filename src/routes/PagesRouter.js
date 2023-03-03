import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import { InfoPage } from '../pages/InfoPage';
import { PageNotFound } from '../pages/PageNotFound';
import { Cart } from '../pages/Cart';
import { Log } from '../pages/Log';
import Shop from '../Components/Shop';
import { Shops } from '../pages/Shops';
import {HowToRide} from '../pages/HowToRide';
import { Order } from '../pages/Order';
import {Success} from '../pages/Success';
function PagesRouter(){
    return(
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path='/info/:id' element={<InfoPage/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/log'  element={<Log/>}/>
            <Route path='/shops' element={<Shops/>}/>
            <Route path='/bikes' element={<Shop/>}/>
            <Route path='/HowToRide' element={<HowToRide/>}/>
            <Route path='/order' element={<Order/>}/>
            <Route path="*" element={<PageNotFound/>}/>
            <Route path='/success' element={<Success/>}/>
        </Routes>
        
        
    )
};
export default PagesRouter;