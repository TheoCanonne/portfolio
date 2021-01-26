import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbInputModule, NbToastrModule } from '@nebular/theme';
import { SharedModule } from '../../shared/shared.module';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './pages/contact/contact.component';
import { PortfolioSharedModule } from '@portfolio/utils-services';


@NgModule({
  declarations: [ContactComponent],
  imports: [
    SharedModule,
    ContactRoutingModule,
    NbInputModule,
    FormsModule,
    ReactiveFormsModule,
    PortfolioSharedModule,
    NbToastrModule
  ]
})
export class ContactModule { }
