import React from 'react'
import plusImage from "../BasketModal/plus.svg";
import {IPositionData} from "../../Types/stateTypes/IPositionState";
import {deleteFromBasket, minusQuantity, plusQuantity} from "../../state/actions";
import {useStore} from "react-redux";
import {IRootState} from "../../Types/stateTypes/IRootState";

interface Props {
    data: IPositionData
}

const BasketItem: React.FC<Props> = (props) => {
    const store = useStore<IRootState>();
    const minus = () => {
        if (props.data.quantity === 1){
            store.dispatch(deleteFromBasket(props.data.id))
        } else {
            let value = props.data.quantity - 1;
            store.dispatch(minusQuantity(props.data.id, value))
        }

    }

    const plus = () => {
        let value = props.data.quantity + 1;
        store.dispatch(plusQuantity(props.data.id, value))
    }

    return (
        <div className="itemWrap">
            <div className="itemValue">
                <div className="itemImage">
                    <img src={props.data.positionImage} alt="positionImage"/>
                </div>
                <div className="minus" onClick={minus}>
                    <div className="minusWrapper">
                        <div className="line"></div>
                    </div>
                </div>
                <div className="value">{props.data.quantity}</div>
                <div className="plus" onClick={plus}>
                    <img src={plusImage} alt="plus"/>
                </div>
            </div>
            <div className="itemName">
                {props.data.positionName}
            </div>
            <div className="itemPrice">
                {props.data.positionPrice * props.data.quantity} ₴
            </div>
        </div>
    )
}

export default BasketItem;