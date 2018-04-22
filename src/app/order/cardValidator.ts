import {
    AbstractControl, ValidationErrors,
} from '@angular/forms';


export class CutomValidator {
    static cardValidator(c: AbstractControl): ValidationErrors | null {
        if (c !== undefined || c !== null) {
            if (c.value.toString().length < 16 || c.value.toString().length > 19) {
                return { cardInvalid: true };
            }
            return null;
        }
        return null;
    }
}
