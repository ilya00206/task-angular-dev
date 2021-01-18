import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { State } from 'src/app/state/state.reducers';
import { GetUsers } from 'src/app/state/state.actions';
import { getUsers } from './../../../../state/state.selectors';

@Component({
  selector: 'app-users-list',
  styleUrls: ['./list.component.scss'],
  template: `
    <h1>Users</h1>

    <a [routerLink]="['', 'contacts', 'new']">
      <h2>Go to user create</h2>
    </a>

    <ul *ngFor="let user of users$ | async">
      <li class="user">
        {{ user }}
      </li>
    </ul>
  `,
})
export class UsersListComponent implements OnInit {
  users$ = this.store.pipe(select(getUsers));

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(GetUsers());
  }
}
