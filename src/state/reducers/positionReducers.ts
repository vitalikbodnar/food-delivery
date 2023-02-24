import {IRootState} from "../../Types/stateTypes/IRootState"
import {initialState} from '../../Helpers/initialState'
import {
    IPositionAction,
    POSITION_ACTION,
    CARD_POSITION_ACTION,
    MINUS_QUANTITY_ACTION,
    PLUS_QUANTITY_ACTION,
    DELETE_BASKET_ITEM,
    ICardPositionAction,
    IMinusQuantityAction, IPlusQuantityAction, IDeleteBasketItemAction
} from "../actionsType/positionTypes"

type PositionActions = IPositionAction;
type CardPositionActions = ICardPositionAction;
type MinusQuantityAction = IMinusQuantityAction;
type PlusQuantityAction = IPlusQuantityAction;
type DeleteBasketItemAction = IDeleteBasketItemAction;

export const positionReducers = (state: IRootState['position'] = initialState.position, action: PositionActions | CardPositionActions | MinusQuantityAction | PlusQuantityAction | DeleteBasketItemAction) => {
    switch (action.type) {
        case CARD_POSITION_ACTION:
            return {
                ...state,
                cardPosition: [...state.cardPosition, action.payload]
            }
        case POSITION_ACTION:
            return {
                ...state,
                positionItems: action.payload
            }
        case MINUS_QUANTITY_ACTION:
            return Object.assign({}, state, {
                cardPosition: state.cardPosition.map((item, id) => {
                    if (id === action.payload.id) {
                        return Object.assign({}, item, {
                            quantity: action.payload.quantity
                        })
                    }
                    return item
                })
            })
        case PLUS_QUANTITY_ACTION:
            return Object.assign({}, state, {
                cardPosition: state.cardPosition.map((item, id) => {
                    if (id === action.payload.id) {
                        return Object.assign({}, item, {
                            quantity: action.payload.quantity
                        })
                    }
                    return item
                })
            })
        case DELETE_BASKET_ITEM:
            return Object.assign({}, state, {
                cardPosition: state.cardPosition.filter(item => item.id !== action.payload)
            })
        default:
            return state;
    }
}