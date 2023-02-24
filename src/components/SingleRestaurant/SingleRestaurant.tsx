import React from 'react';
import {useStore} from 'react-redux';
import {IRootState} from "../../Types/stateTypes/IRootState"
import {RestaurantsType} from "../../Types/restaurants";
import {setPositions} from "../../state/actions";
import starLogo from "./star.png";
import "./singleRestaurant.scss";

interface Props {
    data: RestaurantsType
    showPositions: (essence:boolean, restaurantName:string, logo:string) => void;
}

const SingleRestaurant: React.FC<Props> = (props) => {
    const store = useStore<IRootState>();
    const dataUrl = props.data

    const getPositions = () => {
        store.dispatch(setPositions(dataUrl.positions))
        props.showPositions(true, dataUrl.itemName, dataUrl.logo)
    };

    return (
        <div className="singleItemWrap" onClick={getPositions}>
            <div className="itemImage" style={{
                backgroundImage: `url(${dataUrl.coverImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: '250px',
            }}>
                <div className="itemInfo">
                    <div className="promotion">{dataUrl.promotionValue}% off</div>
                    <div className="speed">{dataUrl.speed}</div>
                </div>
            </div>
            <div className="itemDescription">
                <div className="itemLogo">
                    <img src={dataUrl.logo} alt="f3f3f"/>
                </div>
                <div className="itemDescriptionInfo">
                    <div className="itemName">
                        {dataUrl.itemName}
                    </div>
                    <div className="itemStar">
                        <img src={starLogo} alt="dewdew"/>
                        <div className="itemValue">{dataUrl.likeValue}</div>
                    </div>
                </div>
            </div>
            {dataUrl.openStatus ?
                <p className="itemLabel red">
                    Opens tomorrow
                </p> : <p className="itemLabel green">
                    Open Now
                </p>
            }
        </div>
    )
}

export default SingleRestaurant;