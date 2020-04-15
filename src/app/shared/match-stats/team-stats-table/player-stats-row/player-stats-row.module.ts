import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerStatsRowComponent } from './player-stats-row.component';



@NgModule({
  declarations: [PlayerStatsRowComponent],
  imports: [
    CommonModule
  ],
  exports:[PlayerStatsRowComponent]
})
export class PlayerStatsRowModule { }
