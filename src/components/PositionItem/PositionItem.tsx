import React, {useEffect} from 'react'
import {PositionType} from "../../Types/restaurants"
import plus from "./plus.svg"
import {useStore} from "react-redux";
import {IRootState} from "../../Types/stateTypes/IRootState";
import {setCardPositions} from "../../state/actions";

interface Props {
    data: PositionType
}


const PositionItem: React.FC<Props> = (props) => {
    const dataUrl = props.data
    const store = useStore<IRootState>();
    const [disabledBtn, setDisabledBtn] = React.useState(false);
    let itemsArr = store.getState().position.cardPosition.filter(item => item.id === props.data.id)

    useEffect(()=> {
        if(itemsArr.length > 0 ) {
            setDisabledBtn(true)
        } else {

            setDisabledBtn(false)
        }
    },[itemsArr])

    const getItem = () => {
        store.dispatch(setCardPositions(dataUrl))
    };

    return (
        <div className={disabledBtn ? "singleItem disabled" : "singleItem"}>
            <div className="message">You have already added this product!</div>
            <div className="itemImage">
                <img src={dataUrl.positionImage} alt="fwfw"/>
            </div>
            <div className="itemInfo">
                <div className="itemName">
                    {dataUrl.positionName}
                </div>
                <div className="itemPrice">
                    {dataUrl.positionPrice} ₴
                </div>
            </div>
            <div className={disabledBtn ? "plusWrapper disabled" : "plusWrapper"} onClick={getItem}>
                <img src={plus} alt="plus"/>
            </div>
        </div>
    )
}

export default PositionItem;