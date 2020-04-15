import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabPlayerStatsComponent } from './tab-player-stats.component';
import { CardPlayerSummaryModule } from '../card-player-summary/card-player-summary.module';
import { CardPlayerWeaponsPieModule } from '../card-player-weapons-pie/card-player-weapons-pie.module';
import { CardPlayerKillsLogModule } from '../card-player-kills-log/card-player-kills-log.module';



@NgModule({
  declarations: [TabPlayerStatsComponent],
  imports: [
    CommonModule,
    CardPlayerSummaryModule,
    CardPlayerWeaponsPieModule,
    CardPlayerKillsLogModule
  ],
  exports: [TabPlayerStatsComponent]
})
export class TabPlayerStatsModule { }
