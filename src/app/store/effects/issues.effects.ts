import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import * as issuesActions from '../actions/issues.actions';
import { switchMap, map } from 'rxjs/operators'



@Injectable()
export class IssuesEffects {



  constructor(
    private actions$: Actions,
    private http: HttpClient
    ) {}

    @Effect()
    loadIssues$: Observable<Action> = this.actions$.pipe(
      ofType(issuesActions.IssuesActionTypes.SetApiUrl),
      switchMap(() => {
        return this.http.get<Array<object>>('https://api.github.com/repos/plotly/angular-plotly.js/issues')
          .pipe(
            map((issuesArray) => {
              return new issuesActions.LoadIssues(issuesArray);
            })
          );
      })
    );
}
