import { NgModule } from '@angular/core';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbButtonModule, NbCardModule, NbIconModule } from '@nebular/theme';

const MODULES = [
  NbButtonModule,
  NbIconModule,
  NbEvaIconsModule,
  NbCardModule
]

@NgModule({
  declarations: [],
  imports: [
    ...MODULES
  ],
  exports: [
    ...MODULES
  ]
})
export class NbCommonModule { }
