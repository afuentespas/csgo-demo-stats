import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamStatsTableComponent } from './team-stats-table.component';
import { PlayerStatsRowModule } from './player-stats-row/player-stats-row.module';


@NgModule({
  declarations: [TeamStatsTableComponent],
  imports: [
    CommonModule,
    PlayerStatsRowModule
  ],
  exports: [TeamStatsTableComponent]
})
export class TeamStatsTableModule { }
