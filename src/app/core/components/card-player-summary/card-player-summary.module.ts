import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPlayerSummaryComponent } from './card-player-summary.component';
import { CardModule } from 'src/app/shared/card/card.module';
import { PlayerSummaryModule } from 'src/app/shared/player-stats/player-summary/player-summary.module';



@NgModule({
  declarations: [CardPlayerSummaryComponent],
  imports: [
    CommonModule,
    CardModule,
    PlayerSummaryModule
  ],
  exports: [CardPlayerSummaryComponent]
})
export class CardPlayerSummaryModule { }
