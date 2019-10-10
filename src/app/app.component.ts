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

  // varuables de estado
  title = 'prueba-irontec';
  apiUrl = '';
  issues$: Observable<any>;

  showtable = false;

  // configuracion de tabla
  displayedColumns: string[] = ['state', 'title','creationDate', 'url'];
  dataSource = new MatTableDataSource<Observable<any>>();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private store: Store<fromRoot.State>
  ) {
  }

  ngOnInit() {
    // cuando cambien los issues actualizar dataSource
    this.issues$ = this.store.select(fromRoot.getIssues);
    this.issues$.subscribe((issuesArray) => { // tiene que haber otra forma...
      if (issuesArray.length >= 1) {
        this.showtable = true;
        this.dataSource.data = issuesArray;
      } else { this.showtable = false };
    });
    this.dataSource.paginator = this.paginator; // asignar el paginador a la tabla
  }

  load() {
    this.store.dispatch(new issuesActions.SetApiUrl(this.apiUrl));
  }
}
