import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchStatsComponent } from './match-stats.component';
import { TeamStatsTableModule } from 'src/app/shared/match-stats/team-stats-table/team-stats-table.module';
import { RoundsModule } from 'src/app/shared/match-stats/rounds/rounds.module';



@NgModule({
  declarations: [MatchStatsComponent],
  imports: [
    CommonModule,
    TeamStatsTableModule,
    RoundsModule
  ],
  exports: [MatchStatsComponent]
})
export class MatchStatsModule { }
