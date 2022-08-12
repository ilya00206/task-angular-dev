import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VirtualOwnerComponent } from './virtual-owner.component';

const routes: Routes = [
  {
    path: 'new',
    component: VirtualOwnerComponent,
  },
  {
    path: 'new/:id',
    component: VirtualOwnerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VirtualOwnerRoutingModule {}
