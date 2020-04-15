import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerSummaryComponent } from './player-summary.component';



@NgModule({
  declarations: [PlayerSummaryComponent],
  imports: [
    CommonModule
  ],
  exports: [PlayerSummaryComponent]
})
export class PlayerSummaryModule { }
