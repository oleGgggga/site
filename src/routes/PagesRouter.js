import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import { InfoPage } from '../pages/InfoPage';
import { PageNotFound } from '../pages/PageNotFound';
import { Cart } from '../pages/Cart';
import { Log } from '../pages/Log';
import { Contact } from '../pages/Contact';
function PagesRouter(){
    return(
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path='/info/:id' element={<InfoPage/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/log'  element={<Log/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
        
        
    )
};
export default PagesRouter;