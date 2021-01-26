import { Directive, Input, HostListener, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Directive({
  selector: '[formSubmitValidation]'
})
export class FormSubmitValidationDirective {

  @Input() formSubmitValidation: FormGroup;
  @Output() formSubmitValid = new EventEmitter();

  @HostListener('click', ["$event"])
  handleClickEvent() {
    this.markAsTouched(this.formSubmitValidation);
    if (this.formSubmitValidation.valid) {
      this.formSubmitValid.emit();
    }
  }

  private markAsTouched(formGroup: FormGroup): void {
    formGroup.markAsTouched();
    formGroup.updateValueAndValidity();
    (<any>Object).values(formGroup.controls).forEach(
      control => {
        control.markAsTouched();
        control.updateValueAndValidity({ onlySelf: false, emitEvent: true });
        if (control.controls) {
          this.markAsTouched(control);
        }
      });
  }
}
