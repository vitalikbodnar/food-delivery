import React, {useState,} from 'react'
import SingleRestaurant from "../SingleRestaurant/SingleRestaurant";
import {useSelector} from "react-redux"
import {IRootState} from "../../Types/stateTypes/IRootState"
import {RestaurantsType} from "../../Types/restaurants"
import Positions from "../Positions/Positions";
import itemData from "../../Helpers/restaurants.json"
import btnImg from "./backBtn.png"
import "./restaurantsContainer.scss"

const RestaurantsContainer: React.FC<{}> = () => {
    const dataUrl = itemData.restaurants
    const positions = useSelector((state: IRootState) => state.position)
    const [showPosition, setShowPosition] = useState<boolean>(false)
    const [restaurantName, setRestaurantName] = useState<string>("")
    const [restaurantLogo, setRestaurantLogo] = useState<string>("")

    const showPositionsFunc = (essence: boolean, restaurantName:string, logo:string) => {
        if (positions.positionItems.length > 0) {
            setShowPosition(essence)
        }
        setRestaurantName(restaurantName)
        setRestaurantLogo(logo)
    }

    const closePositionFunc = () => {
        setShowPosition(false)
    }

    return (
        <div className='restaurantsWrapper'>
            {!showPosition ?
                <>
                    <h3 className="restaurantsTitle">{dataUrl.title}</h3>
                    <div className="itemList">
                        {dataUrl.items.map((item: RestaurantsType, index) => (
                            <SingleRestaurant data={item} showPositions={showPositionsFunc} key={index}/>
                        ))}
                    </div>
                </>
                :
                <>
                    {positions.positionItems.length > 0 ?
                        <>
                            <div className="backButton" onClick={closePositionFunc}>
                                <img src={btnImg} alt="backButton"/>
                                <div className="backButtonText">Back</div>
                            </div>
                            <div className="propositionList">
                                <Positions data={positions.positionItems} name={restaurantName} logo={restaurantLogo}/>
                            </div>
                        </>
                        : null
                    }
                </>
            }
        </div>
    )
}

export default RestaurantsContainer;