import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {UserReducer} from './user.reducer';

export interface State {
      'user': any[];
}

export const reducers: ActionReducerMap<any> = {
      user: UserReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
