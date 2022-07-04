import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimalsListComponent } from './pages/animals/containers/list/list.component';

const routes: Routes = [
  {
    path: 'animals',
    pathMatch: 'full',
    component: AnimalsListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
