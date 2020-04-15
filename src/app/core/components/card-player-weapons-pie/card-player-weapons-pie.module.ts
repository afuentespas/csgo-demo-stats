import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPlayerWeaponsPieComponent } from './card-player-weapons-pie.component';
import { CardModule } from 'src/app/shared/card/card.module';
import { PlayerWeaponsPieModule } from 'src/app/shared/player-stats/player-weapons-pie/player-weapons-pie.module';



@NgModule({
  declarations: [CardPlayerWeaponsPieComponent],
  imports: [
    CommonModule,
    CardModule,
    PlayerWeaponsPieModule
  ],
  exports:[CardPlayerWeaponsPieComponent]
})
export class CardPlayerWeaponsPieModule { }
