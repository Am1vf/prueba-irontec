import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { IssuesEffects } from './issues.effects';

describe('IssuesEffects', () => {
  let actions$: Observable<any>;
  let effects: IssuesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        IssuesEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<IssuesEffects>(IssuesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
