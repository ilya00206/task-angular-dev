import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ValidateEmail } from './validators';

@Injectable()
export class VirtualOwnerService {
  constructor(private readonly fb: FormBuilder) {}

  createForm(id: number | '' = '') {
    const form = this.fb.group({
      fullName: [''],
      email: ['', [ValidateEmail]],
      animal: [id],
    });
    return form;
  }
}
