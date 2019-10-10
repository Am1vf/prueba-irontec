import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromIssues from './issues.reducer';


export interface State {

  [fromIssues.issuesFeatureKey]: fromIssues.State;
}

export const reducers: ActionReducerMap<State> = {

  [fromIssues.issuesFeatureKey]: fromIssues.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [consoleLogs] : [];

// mostrar los cambios de estado por consola en el entorno de desarrollo
export function consoleLogs(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state: State, action: any): any => {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('prev state', state);
    console.log('action', action);
    console.log('next state', result);
    console.groupEnd();

    return result;
  };
}

// selectores
export const selectIssuesState = createFeatureSelector<fromIssues.State>('issues');
export const getIssues = createSelector(selectIssuesState, fromIssues.getIssues);
export const getUrl = createSelector(selectIssuesState, fromIssues.getUrl);
