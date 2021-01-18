import { NgModule } from '@angular/core';
import { NbLayoutModule } from '@nebular/theme';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './layouts/layout/layout.component';
import {LayoutModule} from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, LayoutComponent, FooterComponent],
  imports: [
    SharedModule,
    NbLayoutModule,
    LayoutModule,
    RouterModule
  ],
  exports: [LayoutComponent]
})
export class PortfolioLayoutModule { }
