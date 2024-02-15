import React from 'react';
import { Outlet } from 'react-router-dom';

function Layout() {
    return(
        <>
        <div id="preloader">
        <div class="jumper">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>  
    <h1>Layout</h1>
    <Outlet />
    </>
    )
}
export default Layout
