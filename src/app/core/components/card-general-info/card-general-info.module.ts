import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardGeneralInfoComponent } from './card-general-info.component';
import { CardModule } from 'src/app/shared/card/card.module';



@NgModule({
  declarations: [CardGeneralInfoComponent],
  imports: [
    CommonModule,
    CardModule
  ],
  exports: [CardGeneralInfoComponent]
})
export class CardGeneralInfoModule { }
