import React from 'react'
import "./navigation.scss"
import logo from "./images/logo.png"
import basket from "./images/basket.png"
import location from "./images/location.png"
import BasketModal from "../BasketModal/BasketModal";
import {useSelector} from "react-redux";
import {IRootState} from "../../Types/stateTypes/IRootState";

const Navigation: React.FC<{}> = () => {

    const basketItems = useSelector((state: IRootState) => state.position.cardPosition)
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className='navigationWrapper'>
            <div className="logo"><img alt="logo" src={logo}/></div>
            <div className="location">
                <div className="boldText">Deliver to:</div>
                <div className="commonText">
                    <img alt="location" src={location}/>
                    Current Location
                </div>
                <div className="boldText">Mohammadpur Bus Stand, Dhaka</div>
            </div>
            <div className="basket" onClick={() => setModalShow(true)}>
                <img alt="basket" src={basket} className="image"/>
                <div className="basketItemWrap">
                    {basketItems.length > 0 ?
                        <div className="basketItemNumber">{basketItems.length}</div>
                        : null}
                </div>
            </div>
            <BasketModal show={modalShow} onHide={() => setModalShow(false)}/>
        </div>
    )
}

export default Navigation;