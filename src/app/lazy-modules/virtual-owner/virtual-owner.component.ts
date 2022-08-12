import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { GetAnimals } from 'src/app/state/state.actions';
import { State } from 'src/app/state/state.reducers';
import { getAnimals } from 'src/app/state/state.selectors';
import { VirtualOwnerService } from './virtual-owner.service';

@Component({
  selector: 'app-virtual-owner',
  templateUrl: './virtual-owner.component.html',
})
export class VirtualOwnerComponent implements OnInit {
  readonly form = this.service.createForm(+this.route.snapshot.params.id);
  readonly animals$ = this.store.pipe(select(getAnimals));
  constructor(
    private readonly service: VirtualOwnerService,
    private readonly store: Store<State>,
    private readonly route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.store.dispatch(GetAnimals());
    console.log(this.form.value);
  }
  submitForm() {
    console.log('Valid: ', this.form.valid);
    console.log(this.form.getRawValue());
  }
}
