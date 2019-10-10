import { Action } from '@ngrx/store';

export enum IssuesActionTypes {
  LoadIssues = '[Issues] Load Issues',
  SetApiUrl = '[ApiUrl] Set ApiUrl'
}

export class LoadIssues implements Action {
  readonly type = IssuesActionTypes.LoadIssues;

  constructor(public payload: Array<object>) {}
}

export class SetApiUrl implements Action {
  readonly type = IssuesActionTypes.SetApiUrl;

  constructor(public payload: string) {}
}

export type IssuesActions = LoadIssues | SetApiUrl;
