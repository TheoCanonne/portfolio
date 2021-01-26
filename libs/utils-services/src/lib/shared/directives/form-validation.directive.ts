import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormErrorMessagesService } from '../../form-error-messages.service';

@Directive({
  selector: '[formValidation]'
})
export class FormValidationDirective implements OnInit {

  @Input() formValidation: FormControl;
  @Input() validationStyle: string;
  @Input() isNbFormField: boolean;

  private errorMessageDisplayed = false;

  constructor(
    private elRef: ElementRef,
    private formService: FormErrorMessagesService
  ) { }

  ngOnInit() {
    this.formValidation.statusChanges.subscribe((ee) => {
      if (this.isNbFormField) {
        this.updateStatusForFormField();
      } else {
        this.updateStatus();
      }
    })
  }

  updateStatus() {
    this.elRef.nativeElement.classList.remove('status-danger');
    this.hideErrorMessage();
    if (this.formValidation.touched && this.formValidation.errors && this.formValidation.enabled) {
      this.elRef.nativeElement.classList.add('status-danger');
      this.showErrorMessage();
    }
  }

  updateStatusForFormField() {
    for (const div of this.elRef.nativeElement.children) {
      for (const child of div.children) {
        child.classList.remove('status-danger');
      }
    }
    this.hideErrorMessage();
    if (this.formValidation.touched && this.formValidation.errors && this.formValidation.enabled) {
      for (const div of this.elRef.nativeElement.children) {
        for (const child of div.children) {
          child.classList.add('status-danger');
        }
      }
      this.showErrorMessage();
    }
  }

  showErrorMessage() {
    if (!this.errorMessageDisplayed) {
      const errorMessage = this.formService.getErrorMessage(this.formValidation);
      if (!this.isNbFormField) {
        const errorP = document.createElement('p');
        errorP.setAttribute('class', 'caption status-danger errorMessage');
        errorP.setAttribute('style', 'margin-bottom: 0px;' + this.validationStyle);
        errorP.innerHTML = errorMessage;
        this.elRef.nativeElement.parentNode.insertBefore(errorP, this.elRef.nativeElement.nextSibling);
      } else {
        const errorP = `<p class="caption status-danger errorMessage" style="margin-bottom: 0px; ${this.validationStyle}">
        ${ errorMessage}
        </p>`
        this.elRef.nativeElement.parentElement.insertAdjacentHTML('beforeend', errorP);
      }
      this.errorMessageDisplayed = true;
    }
  }

  hideErrorMessage() {
    if (this.errorMessageDisplayed) {
      this.elRef.nativeElement.parentElement.getElementsByClassName('errorMessage')[0].remove();
      this.errorMessageDisplayed = false;
    }
  }
}
