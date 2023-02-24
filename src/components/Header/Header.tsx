import React from 'react'
import "./header.scss"
import Navigation from "../Navigation/Navigation";
import headerImage from "./images/headerImage.png"

const Header: React.FC<{}> = () => {

    return (
        <div className='headerWrapper'>
            <Navigation/>
            <div className="headerInfoWrapper">
                <div className="textwrap">
                    <h1>Are you starving?</h1>
                    <p>Within a few clicks, find meals that are accessible near you</p>
                </div>
                <div className="imgWrap">
                    <img src={headerImage} alt="headerImage"/>
                </div>
            </div>
        </div>
    )
}

export default Header;