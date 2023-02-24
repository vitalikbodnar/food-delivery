import {IPositionData} from "./IPositionState";

export interface IRootState {
   position: {
      positionItems: IPositionData[] | [];
      cardPosition: IPositionData[] | [];
   },
} 