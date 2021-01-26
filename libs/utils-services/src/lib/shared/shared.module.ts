import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormValidationDirective } from './directives/form-validation.directive';
import { FormSubmitValidationDirective } from './directives/form-submit-validation.directive';



@NgModule({
  declarations: [FormValidationDirective, FormSubmitValidationDirective],
  imports: [
    CommonModule
  ],
  exports: [FormValidationDirective, FormSubmitValidationDirective]
})
export class PortfolioSharedModule { }
