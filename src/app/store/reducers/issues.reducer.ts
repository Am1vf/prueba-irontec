import { Action } from '@ngrx/store';
import * as issuesActions from '../actions/issues.actions';


export const issuesFeatureKey = 'issues';

// definicion e inicializacion de estado
export interface State {
  ApiUrl: string;
  Issues: Array<object>;
}

export const initialState: State = {
  ApiUrl: '',
  Issues: []
};

// actualizaciones de estado
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
  const apiUrl = action.payload.replace('github.com/', 'api.github.com/repos/').concat('/issues'); // convertir url a api
  return {
    ...state,
    ApiUrl: apiUrl
  };
}

function handleLoadIssues(state: State, action: issuesActions.LoadIssues): State {
  return {
    ...state,
    Issues: action.payload
  };
}

// selectores acceso al estado
export const getIssues = (state: State) => state.Issues;
export const getUrl = (state: State) => state.ApiUrl;
