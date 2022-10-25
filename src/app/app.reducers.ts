import { ActionReducerMap } from "@ngrx/store";
import { contadorReducer } from './contador/contador.reducer';

export interface AppState{
  contador: number;
}

export const reducers: ActionReducerMap<AppState, any> = {
  contador: contadorReducer
};
