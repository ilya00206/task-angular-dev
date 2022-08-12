import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { mapAnimalWithProfiles } from 'src/app/core/models/animal.model';

import { GetAnimals } from 'src/app/state/state.actions';
import { State } from 'src/app/state/state.reducers';
import {
  getAnimals,
  getAnimalsProfiles,
  getAnimalsWithProfiles,
} from '../../../../state/state.selectors';

@Component({
  selector: 'app-animals-list',
  styleUrls: ['./list.component.scss'],
  template: `
    <h1>Animals</h1>

    <a [routerLink]="['', 'owners', 'new']">
      <h2>Create virtual owner</h2>
    </a>

    <ul *ngFor="let animal of animals$ | async">
      <li class="animal">
        <a [routerLink]="['', 'owners', 'new', animal.id]">
          <app-animal-item [animal]="animal"></app-animal-item>
        </a>
      </li>
    </ul>
  `,
})
export class AnimalsListComponent implements OnInit {
  readonly animals$ = this.store.pipe(select(getAnimalsWithProfiles));

  /*** Zadanie nr 5 zrozumiałem w taki sposób, ale napisałem po prostu nowy selektor
   *  Remember to dispatch an action to get profiles - lista już się pobiera w GetAnimals action jako concatMap więc znowu robić dispatch nie ma sensu
   */

  // readonly animals$ = combineLatest([
  //   this.store.select(getAnimals),
  //   this.store.select(getAnimalsProfiles),
  // ]).pipe(
  //   filter(([animals, profiles]) => !!animals && !!profiles),
  //   map(([animals, profiles]) => mapAnimalWithProfiles(animals, profiles)),
  // );

  constructor(private readonly store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(GetAnimals());
  }
}
