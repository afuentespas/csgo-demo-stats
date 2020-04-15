import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerKillsLogComponent } from './player-kills-log.component';



@NgModule({
  declarations: [PlayerKillsLogComponent],
  imports: [
    CommonModule
  ],
  exports: [PlayerKillsLogComponent]
})
export class PlayerKillsLogModule { }
