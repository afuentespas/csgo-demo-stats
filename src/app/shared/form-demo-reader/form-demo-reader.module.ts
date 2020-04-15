import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDemoReaderComponent } from './form-demo-reader.component';
import { DemofileReaderModule } from 'src/app/core/demofile-reader/demofile-reader.module';


@NgModule({
  declarations: [FormDemoReaderComponent],
  imports: [
    CommonModule,
    DemofileReaderModule
  ],
  exports: [FormDemoReaderComponent]
})
export class FormDemoReaderModule { }
