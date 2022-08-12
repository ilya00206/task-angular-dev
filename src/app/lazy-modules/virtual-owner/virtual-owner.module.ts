import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { VirtualOwnerComponent } from './virtual-owner.component';
import { VirtualOwnerRoutingModule } from './virtual-owner.routing.module';
import { VirtualOwnerService } from './virtual-owner.service';

@NgModule({
  declarations: [VirtualOwnerComponent],
  imports: [CommonModule, VirtualOwnerRoutingModule, ReactiveFormsModule],
  providers: [VirtualOwnerService],
})
export class VirtualOwnerModule {}
