
import {IPositionData} from "../../Types/stateTypes/IPositionState";

export const POSITION_ACTION = "POSITION_ACTION";
export interface IPositionAction {
  type: typeof POSITION_ACTION;
  payload: IPositionData;
}

export const CARD_POSITION_ACTION = "CARD_POSITION_ACTION";
export interface ICardPositionAction {
  type: typeof CARD_POSITION_ACTION;
  payload: ICardPositionAction;
}

export const MINUS_QUANTITY_ACTION = "MINUS_QUANTITY_ACTION";
export interface IMinusQuantityAction {
  type: typeof MINUS_QUANTITY_ACTION;
  payload: IPositionData;
}

export const PLUS_QUANTITY_ACTION = "PLUS_QUANTITY_ACTION";
export interface IPlusQuantityAction {
  type: typeof PLUS_QUANTITY_ACTION;
  payload: IPositionData;
}
export const DELETE_BASKET_ITEM = "DELETE_BASKET_ITEM";
export interface IDeleteBasketItemAction {
  type: typeof DELETE_BASKET_ITEM;
  payload: number;
}