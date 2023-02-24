import React from 'react'
import {PositionType} from "../../Types/restaurants"
import "./positions.scss"
import PositionItem from "../PositionItem/PositionItem";

interface Props {
    data: PositionType[]
    name: string
    logo: string
}

const Positions: React.FC<Props> = (props) => {
    const dataUrl = props.data

    return (
        <div className="itemWrap">
            <div className="itemHeader">
                <div className="shopName">{props.name} positions</div>
                <div className="itemLogo">
                    <img src={props.logo} alt="logo"/>
                </div>
            </div>
            <div className="listItem">
                {dataUrl.map((item:PositionType, index:number) => (
                    <PositionItem data={item} key={index}/>
                ))}
            </div>
        </div>
    )
}

export default Positions;