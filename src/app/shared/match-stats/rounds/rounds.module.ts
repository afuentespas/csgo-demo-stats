import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoundsComponent } from './rounds.component';
import { RoundsIconsComponent } from './rounds-icons/rounds-icons.component';



@NgModule({
  declarations: [RoundsComponent, RoundsIconsComponent],
  imports: [
    CommonModule
  ],
  exports: [RoundsComponent, RoundsIconsComponent]
})
export class RoundsModule { }
