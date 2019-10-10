import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import * as issuesActions from '../actions/issues.actions';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers';



@Injectable()
export class IssuesEffects {



  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromRoot.State>
    ) {}

    @Effect()
    loadIssues$: Observable<Action> = this.actions$.pipe(
      ofType(issuesActions.IssuesActionTypes.SetApiUrl), // cada vez que se cambie la url
      withLatestFrom(this.store.select(fromRoot.getUrl)), // obtener url del estado
      switchMap(([action,apiUrl]) => {
        return this.http.get<Array<object>>(apiUrl) // llamar la api
          .pipe(
            map((issuesArray) => {
              return new issuesActions.LoadIssues(issuesArray); // mandar la respuesta a la accion
            })
          );
      })
    );
}
