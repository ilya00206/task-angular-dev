import { AbstractControl } from '@angular/forms';

export function ValidateEmail(control: AbstractControl) {
  const value: string = control.value;
  if (value.endsWith('@prowly.com') || value.includes('+')) {
    return { invalidEmail: true };
  }
  return null;
}
