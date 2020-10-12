import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Formularios';
  myForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      forbiddenNameValidator('Adriano'),
    ]),
    address: new FormControl(''),
  });

  onSubmit(): void {
    console.log(this.myForm.value);
  }
}

/** A hero's name can't match the given regular expression */
export function forbiddenNameValidator(invalidName: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (control.value === invalidName) {
      return { forbiddenName: { value: control.value } };
    }
    return null;
  };
}
