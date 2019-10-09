import { Component, ViewChild, OnInit } from '@angular/core';

// material
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

// ngrx
import { Store } from '@ngrx/store';
import * as fromRoot from './store/reducers';
import * as issuesActions from './store/actions/issues.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'prueba-irontec';
  apiUrl = '';
  issues$: Observable<any>;

  displayedColumns: string[] = ['state', 'title', 'body', 'url'];
  dataSource = new MatTableDataSource<Observable<any>>();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private store: Store<fromRoot.State>
  ) {
  }

  ngOnInit() {
    this.issues$ = this.store.select(fromRoot.getIssues);
    this.issues$.subscribe((issuesArray) => {
      this.dataSource.data = issuesArray;
    });
    this.dataSource.paginator = this.paginator; // asignar el paginador a la tabla
  }

  load() {
    this.store.dispatch(new issuesActions.SetApiUrl(this.apiUrl));
  }
}
