import { Injectable } from '@angular/core';
import errorMessages from './form-error-messages.json';
import { FormControl, AbstractControl } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class FormErrorMessagesService {

  getErrorMessage(formControl: FormControl) {
    const firstErrorKey = Object.keys(formControl.errors)[0];
    let errorMessage: string = errorMessages[firstErrorKey];
    const occurenceToReplace = errorMessage.match(/\${(.*?)\}/);
    if (occurenceToReplace) {
      errorMessage = errorMessage.replace(occurenceToReplace[0].toString(), formControl.errors[firstErrorKey][occurenceToReplace[1].toString()]);
    }
    return errorMessage;
  }

  phoneNumberValidator(control: AbstractControl) {
      return !control.value.match(/[0-9]{10}/) ? { phoneNumberPattern: true } : null;
  }

  getStatusFormControl(formControl: AbstractControl) {
    return  formControl.touched && formControl.errors ? 'danger' : 'basic';
  }

  displayErrorMessage(formControl: AbstractControl) {
    return formControl.touched && formControl.errors;
  }

}
