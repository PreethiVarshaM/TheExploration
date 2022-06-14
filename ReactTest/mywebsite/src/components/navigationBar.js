import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { FaRegSnowflake } from 'react-icons/fa';
import { VscThreeBars } from "react-icons/vsc";

function NavBar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)
    return (
        <>
            <nav className="navBar">
                <div className="navBar-container">
                    <Link to="/" className="navBar-logo">
                        MY WEBSITE <i className='fab.fa-typo3' />
                        <FaRegSnowflake />
                    </Link>
                    <div className="menu_icon" onClick={handleClick}>
                        <i className={click ? { VscThreeBars } : { VscThreeBars }} />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;