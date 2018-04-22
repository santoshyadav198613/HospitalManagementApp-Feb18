import { Directive } from '@angular/core';
import {
  Validator, AbstractControl, ValidationErrors,
  NG_VALIDATORS
} from '@angular/forms';

@Directive({
  selector: '[appPasswordValidator]',
  providers: [{
    provide: NG_VALIDATORS, useExisting: PasswordValidatorDirective,
    multi: true
  }]
})
export class PasswordValidatorDirective implements Validator {
  constructor() { }
  validate(c: AbstractControl): ValidationErrors | null {
    if (c.value !== undefined && c.value !== null) {
      if (c.value.length < 5 || c.value.length > 15) {
        return { passwordInvalid: true };
      }
      return null;
    }
    return null;
  }
}

