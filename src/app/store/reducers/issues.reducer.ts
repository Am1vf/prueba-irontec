import { Action } from '@ngrx/store';
import * as issuesActions from '../actions/issues.actions';


export const issuesFeatureKey = 'issues';

export interface State {
  ApiUrl: string;
  Issues: Array<object>;
}

export const initialState: State = {
  ApiUrl: '',
  Issues: []
};

export function reducer(state = initialState, action): State {
  switch (action.type) {

    case issuesActions.IssuesActionTypes.SetApiUrl:
      return handleSetApiUrl(state, action);

    case issuesActions.IssuesActionTypes.LoadIssues:
      return handleLoadIssues(state, action);

    default:
      return state;
  }
}

function handleSetApiUrl(state: State, action: issuesActions.SetApiUrl): State {
  return {
    ...state,
    ApiUrl: action.payload
  };
}

function handleLoadIssues(state: State, action: issuesActions.LoadIssues): State {
  return {
    ...state,
    Issues: action.payload
  };
}

// selector
export const getIssues = (state: State) => state.Issues;
