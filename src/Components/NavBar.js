import React from 'react';
import '../App.css';


const NavBar = () => {
    return <div className="NavBar">
        <div className="Logo"> MyLogo
        </div>
        <div className="Right">
            <div className="Links">
                <a href="/donate">Donate</a>
                <a href="/calculate">Calculate</a>
                <a href="/signin">Sign</a>
            </div>
        </div>
    </div>
}

export default NavBar;