import React from 'react'
import "./information.scss"

import itemsData from "../../Helpers/information.json"
import {InformationType} from "../../Types/information"

const Information: React.FC<{}> = () => {
    return (
        <div className='informationWrapper'>
            <div className="informationTitle">
                <h3>{itemsData.information.title}</h3>
            </div>
            <div className="itemWrapper">
                {
                    itemsData.information.items.map((item: InformationType) => (
                        <div className="informationItems" key={item.id}>
                            <div className="itemsImage">
                                <img src={item.itemImg} alt={item.altText}/>
                            </div>
                            <div className="itemsTitle">
                                {item.itemTitle}
                            </div>
                            <div className="itemsText">
                                {item.itemText}
                            </div>
                        </div>

                    ))
                }
            </div>
        </div>
    )
}

export default Information;