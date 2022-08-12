import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnimalsListComponent } from './pages/animals/containers/list/list.component';

const routes: Routes = [
  {
    path: 'animals',
    pathMatch: 'full',
    component: AnimalsListComponent,
  },
  {
    path: 'owners',
    loadChildren: () =>
      import('./lazy-modules/virtual-owner/virtual-owner.module').then(
        (m) => m.VirtualOwnerModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
