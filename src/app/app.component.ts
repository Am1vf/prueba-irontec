import { Component, ViewChild, OnInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'prueba-irontec';
  apiUrl = '';

  displayedColumns: string[] = ['state', 'title', 'body', 'url'];
  dataSource = new MatTableDataSource;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor() {

  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator; // asignar el paginador a la tabla
  }

  load() {
    console.log('load: ' + this.apiUrl+'/issues'); //TODO
    
    this.dataSource.data = [
      {
        "id": 1,
        "node_id": "MDU6SXNzdWUx",
        "url": "https://api.github.com/repos/octocat/Hello-World/issues/1347",
        "repository_url": "https://api.github.com/repos/octocat/Hello-World",
        "labels_url": "https://api.github.com/repos/octocat/Hello-World/issues/1347/labels{/name}",
        "comments_url": "https://api.github.com/repos/octocat/Hello-World/issues/1347/comments",
        "events_url": "https://api.github.com/repos/octocat/Hello-World/issues/1347/events",
        "html_url": "https://github.com/octocat/Hello-World/issues/1347",
        "number": 1347,
        "state": "open",
        "title": "Found a bug",
        "body": "I'm having a problem with this.",
        "locked": true,
        "active_lock_reason": "too heated",
        "comments": 0,
        "pull_request": {
          "url": "https://api.github.com/repos/octocat/Hello-World/pulls/1347",
          "html_url": "https://github.com/octocat/Hello-World/pull/1347",
          "diff_url": "https://github.com/octocat/Hello-World/pull/1347.diff",
          "patch_url": "https://github.com/octocat/Hello-World/pull/1347.patch"
        },
        "closed_at": null,
        "created_at": "2011-04-22T13:33:48Z",
        "updated_at": "2011-04-22T13:33:48Z"
      },
      {
        "id": 2,
        "node_id": "MDU6SXNzdWUx",
        "url": "https://api.github.com/repos/octocat/Hello-World/issues/1347",
        "repository_url": "https://api.github.com/repos/octocat/Hello-World",
        "labels_url": "https://api.github.com/repos/octocat/Hello-World/issues/1347/labels{/name}",
        "comments_url": "https://api.github.com/repos/octocat/Hello-World/issues/1347/comments",
        "events_url": "https://api.github.com/repos/octocat/Hello-World/issues/1347/events",
        "html_url": "https://github.com/octocat/Hello-World/issues/1347",
        "number": 1348,
        "state": "open",
        "title": "Found another bug",
        "body": "I'm having another problem with this.",
        "locked": true,
        "active_lock_reason": "too heated",
        "comments": 0,
        "pull_request": {
          "url": "https://api.github.com/repos/octocat/Hello-World/pulls/1347",
          "html_url": "https://github.com/octocat/Hello-World/pull/1347",
          "diff_url": "https://github.com/octocat/Hello-World/pull/1347.diff",
          "patch_url": "https://github.com/octocat/Hello-World/pull/1347.patch"
        },
        "closed_at": null,
        "created_at": "2011-04-22T13:33:48Z",
        "updated_at": "2011-04-22T13:33:48Z"
      },
      {
        "id": 3,
        "node_id": "MDU6SXNzdWUx",
        "url": "https://api.github.com/repos/octocat/Hello-World/issues/1347",
        "repository_url": "https://api.github.com/repos/octocat/Hello-World",
        "labels_url": "https://api.github.com/repos/octocat/Hello-World/issues/1347/labels{/name}",
        "comments_url": "https://api.github.com/repos/octocat/Hello-World/issues/1347/comments",
        "events_url": "https://api.github.com/repos/octocat/Hello-World/issues/1347/events",
        "html_url": "https://github.com/octocat/Hello-World/issues/1347",
        "number": 1348,
        "state": "open",
        "title": "Found another one",
        "body": "I'm having another problem with this.",
        "locked": true,
        "active_lock_reason": "too heated",
        "comments": 0,
        "pull_request": {
          "url": "https://api.github.com/repos/octocat/Hello-World/pulls/1347",
          "html_url": "https://github.com/octocat/Hello-World/pull/1347",
          "diff_url": "https://github.com/octocat/Hello-World/pull/1347.diff",
          "patch_url": "https://github.com/octocat/Hello-World/pull/1347.patch"
        },
        "closed_at": null,
        "created_at": "2011-04-22T13:33:48Z",
        "updated_at": "2011-04-22T13:33:48Z"
      },
      {
        "id": 4,
        "node_id": "MDU6SXNzdWUx",
        "url": "https://api.github.com/repos/octocat/Hello-World/issues/1347",
        "repository_url": "https://api.github.com/repos/octocat/Hello-World",
        "labels_url": "https://api.github.com/repos/octocat/Hello-World/issues/1347/labels{/name}",
        "comments_url": "https://api.github.com/repos/octocat/Hello-World/issues/1347/comments",
        "events_url": "https://api.github.com/repos/octocat/Hello-World/issues/1347/events",
        "html_url": "https://github.com/octocat/Hello-World/issues/1347",
        "number": 1348,
        "state": "open",
        "title": "And another one",
        "body": "I'm having another problem with this.",
        "locked": true,
        "active_lock_reason": "too heated",
        "comments": 0,
        "pull_request": {
          "url": "https://api.github.com/repos/octocat/Hello-World/pulls/1347",
          "html_url": "https://github.com/octocat/Hello-World/pull/1347",
          "diff_url": "https://github.com/octocat/Hello-World/pull/1347.diff",
          "patch_url": "https://github.com/octocat/Hello-World/pull/1347.patch"
        },
        "closed_at": null,
        "created_at": "2011-04-22T13:33:48Z",
        "updated_at": "2011-04-22T13:33:48Z"
      },
      {
        "id": 5,
        "node_id": "MDU6SXNzdWUx",
        "url": "https://api.github.com/repos/octocat/Hello-World/issues/1347",
        "repository_url": "https://api.github.com/repos/octocat/Hello-World",
        "labels_url": "https://api.github.com/repos/octocat/Hello-World/issues/1347/labels{/name}",
        "comments_url": "https://api.github.com/repos/octocat/Hello-World/issues/1347/comments",
        "events_url": "https://api.github.com/repos/octocat/Hello-World/issues/1347/events",
        "html_url": "https://github.com/octocat/Hello-World/issues/1347",
        "number": 1348,
        "state": "open",
        "title": "And another one",
        "body": "I'm having another problem with this.",
        "locked": true,
        "active_lock_reason": "too heated",
        "comments": 0,
        "pull_request": {
          "url": "https://api.github.com/repos/octocat/Hello-World/pulls/1347",
          "html_url": "https://github.com/octocat/Hello-World/pull/1347",
          "diff_url": "https://github.com/octocat/Hello-World/pull/1347.diff",
          "patch_url": "https://github.com/octocat/Hello-World/pull/1347.patch"
        },
        "closed_at": null,
        "created_at": "2011-04-22T13:33:48Z",
        "updated_at": "2011-04-22T13:33:48Z"
      },
      {
        "id": 6,
        "node_id": "MDU6SXNzdWUx",
        "url": "https://api.github.com/repos/octocat/Hello-World/issues/1347",
        "repository_url": "https://api.github.com/repos/octocat/Hello-World",
        "labels_url": "https://api.github.com/repos/octocat/Hello-World/issues/1347/labels{/name}",
        "comments_url": "https://api.github.com/repos/octocat/Hello-World/issues/1347/comments",
        "events_url": "https://api.github.com/repos/octocat/Hello-World/issues/1347/events",
        "html_url": "https://github.com/octocat/Hello-World/issues/1347",
        "number": 1348,
        "state": "open",
        "title": "And another one",
        "body": "I'm having another problem with this.",
        "locked": true,
        "active_lock_reason": "too heated",
        "comments": 0,
        "pull_request": {
          "url": "https://api.github.com/repos/octocat/Hello-World/pulls/1347",
          "html_url": "https://github.com/octocat/Hello-World/pull/1347",
          "diff_url": "https://github.com/octocat/Hello-World/pull/1347.diff",
          "patch_url": "https://github.com/octocat/Hello-World/pull/1347.patch"
        },
        "closed_at": null,
        "created_at": "2011-04-22T13:33:48Z",
        "updated_at": "2011-04-22T13:33:48Z"
      },
      {
        "id": 7,
        "node_id": "MDU6SXNzdWUx",
        "url": "https://api.github.com/repos/octocat/Hello-World/issues/1347",
        "repository_url": "https://api.github.com/repos/octocat/Hello-World",
        "labels_url": "https://api.github.com/repos/octocat/Hello-World/issues/1347/labels{/name}",
        "comments_url": "https://api.github.com/repos/octocat/Hello-World/issues/1347/comments",
        "events_url": "https://api.github.com/repos/octocat/Hello-World/issues/1347/events",
        "html_url": "https://github.com/octocat/Hello-World/issues/1347",
        "number": 1348,
        "state": "open",
        "title": "And another one",
        "body": "I'm having another problem with this.",
        "locked": true,
        "active_lock_reason": "too heated",
        "comments": 0,
        "pull_request": {
          "url": "https://api.github.com/repos/octocat/Hello-World/pulls/1347",
          "html_url": "https://github.com/octocat/Hello-World/pull/1347",
          "diff_url": "https://github.com/octocat/Hello-World/pull/1347.diff",
          "patch_url": "https://github.com/octocat/Hello-World/pull/1347.patch"
        },
        "closed_at": null,
        "created_at": "2011-04-22T13:33:48Z",
        "updated_at": "2011-04-22T13:33:48Z"
      },
      {
        "id": 8,
        "node_id": "MDU6SXNzdWUx",
        "url": "https://api.github.com/repos/octocat/Hello-World/issues/1347",
        "repository_url": "https://api.github.com/repos/octocat/Hello-World",
        "labels_url": "https://api.github.com/repos/octocat/Hello-World/issues/1347/labels{/name}",
        "comments_url": "https://api.github.com/repos/octocat/Hello-World/issues/1347/comments",
        "events_url": "https://api.github.com/repos/octocat/Hello-World/issues/1347/events",
        "html_url": "https://github.com/octocat/Hello-World/issues/1347",
        "number": 1348,
        "state": "open",
        "title": "And another one",
        "body": "I'm having another problem with this.",
        "locked": true,
        "active_lock_reason": "too heated",
        "comments": 0,
        "pull_request": {
          "url": "https://api.github.com/repos/octocat/Hello-World/pulls/1347",
          "html_url": "https://github.com/octocat/Hello-World/pull/1347",
          "diff_url": "https://github.com/octocat/Hello-World/pull/1347.diff",
          "patch_url": "https://github.com/octocat/Hello-World/pull/1347.patch"
        },
        "closed_at": null,
        "created_at": "2011-04-22T13:33:48Z",
        "updated_at": "2011-04-22T13:33:48Z"
      },
      {
        "id": 9,
        "node_id": "MDU6SXNzdWUx",
        "url": "https://api.github.com/repos/octocat/Hello-World/issues/1347",
        "repository_url": "https://api.github.com/repos/octocat/Hello-World",
        "labels_url": "https://api.github.com/repos/octocat/Hello-World/issues/1347/labels{/name}",
        "comments_url": "https://api.github.com/repos/octocat/Hello-World/issues/1347/comments",
        "events_url": "https://api.github.com/repos/octocat/Hello-World/issues/1347/events",
        "html_url": "https://github.com/octocat/Hello-World/issues/1347",
        "number": 1348,
        "state": "open",
        "title": "And another one",
        "body": "I'm having another problem with this.",
        "locked": true,
        "active_lock_reason": "too heated",
        "comments": 0,
        "pull_request": {
          "url": "https://api.github.com/repos/octocat/Hello-World/pulls/1347",
          "html_url": "https://github.com/octocat/Hello-World/pull/1347",
          "diff_url": "https://github.com/octocat/Hello-World/pull/1347.diff",
          "patch_url": "https://github.com/octocat/Hello-World/pull/1347.patch"
        },
        "closed_at": null,
        "created_at": "2011-04-22T13:33:48Z",
        "updated_at": "2011-04-22T13:33:48Z"
      },
      {
        "id": 10,
        "node_id": "MDU6SXNzdWUx",
        "url": "https://api.github.com/repos/octocat/Hello-World/issues/1347",
        "repository_url": "https://api.github.com/repos/octocat/Hello-World",
        "labels_url": "https://api.github.com/repos/octocat/Hello-World/issues/1347/labels{/name}",
        "comments_url": "https://api.github.com/repos/octocat/Hello-World/issues/1347/comments",
        "events_url": "https://api.github.com/repos/octocat/Hello-World/issues/1347/events",
        "html_url": "https://github.com/octocat/Hello-World/issues/1347",
        "number": 1348,
        "state": "open",
        "title": "And another one",
        "body": "I'm having another problem with this.",
        "locked": true,
        "active_lock_reason": "too heated",
        "comments": 0,
        "pull_request": {
          "url": "https://api.github.com/repos/octocat/Hello-World/pulls/1347",
          "html_url": "https://github.com/octocat/Hello-World/pull/1347",
          "diff_url": "https://github.com/octocat/Hello-World/pull/1347.diff",
          "patch_url": "https://github.com/octocat/Hello-World/pull/1347.patch"
        },
        "closed_at": null,
        "created_at": "2011-04-22T13:33:48Z",
        "updated_at": "2011-04-22T13:33:48Z"
      }
    ];
  }
}
