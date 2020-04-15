import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerWeaponsPieComponent } from './player-weapons-pie.component';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [PlayerWeaponsPieComponent],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [PlayerWeaponsPieComponent]
})
export class PlayerWeaponsPieModule { }
