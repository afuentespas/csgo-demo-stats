import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPlayerKillsLogComponent } from './card-player-kills-log.component';
import { CardModule } from 'src/app/shared/card/card.module';
import { PlayerKillsLogModule } from 'src/app/shared/player-stats/player-kills-log/player-kills-log.module';



@NgModule({
  declarations: [CardPlayerKillsLogComponent],
  imports: [
    CommonModule,
    CardModule,
    PlayerKillsLogModule
  ],
  exports:[CardPlayerKillsLogComponent]
})
export class CardPlayerKillsLogModule { }
