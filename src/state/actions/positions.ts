import * as actions from "../actionsType/positionTypes"
import {IPositionData} from "../../Types/stateTypes/IPositionState";

export const setPositions = (position: IPositionData[]) => {
    return {
        type: actions.POSITION_ACTION,
        payload: position
    };
};

export const setCardPositions = (cardPosition: IPositionData | IPositionData[]) => {
    return {
        type: actions.CARD_POSITION_ACTION,
        payload: cardPosition
    };
};

export const minusQuantity = (id: number, quantity: number) => {
    return {
        type: actions.MINUS_QUANTITY_ACTION,
        payload: {
            id: id,
            quantity: quantity
        },
    };
};

export const plusQuantity = (id: number, quantity: number) => {
    return {
        type: actions.PLUS_QUANTITY_ACTION,
        payload: {
            id: id,
            quantity: quantity
        },
    };
};

export const deleteFromBasket = (id: number) => {
    return {
        type: actions.DELETE_BASKET_ITEM,
        payload: id
    };
};