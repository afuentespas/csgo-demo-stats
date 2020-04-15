import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardFormDemoReaderComponent } from './card-form-demo-reader.component';
import { ProgressBarModule } from 'src/app/shared/progress-bar/progress-bar.module';
import { CardModule } from 'src/app/shared/card/card.module';
import { FormDemoReaderModule } from 'src/app/shared/form-demo-reader/form-demo-reader.module';



@NgModule({
  declarations: [CardFormDemoReaderComponent],
  imports: [
    CommonModule, 
    ProgressBarModule, 
    CardModule, 
    FormDemoReaderModule
  ],
  exports: [CardFormDemoReaderComponent]
})
export class CardFormDemoReaderModule { }
