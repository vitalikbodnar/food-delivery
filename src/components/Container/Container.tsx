import React from 'react'
import Header from "../Header/Header";
import Information from "../Information/Information";
import "./container.scss"
import RestaurantsContainer from "../RestaurantsContainer/RestaurantsContainer";

const Container: React.FC<{}> = () => {

    return (
        <div className='containerWrapper'>
            <Header/>
            <Information/>
            <RestaurantsContainer/>
        </div>
    )
}

export default Container;