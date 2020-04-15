import { Component, OnInit, Input } from '@angular/core';
import { PlayerModel } from 'src/app/core/demofile-reader/models/player-model';
import { HistoricKill } from 'src/app/core/demofile-reader/models/historic-kills';

@Component({
  selector: 'csgo-player-summary',
  templateUrl: './player-summary.component.html',
  styleUrls: ['./player-summary.component.scss']
})
export class PlayerSummaryComponent implements OnInit {

  @Input() player: PlayerModel;

  private killsPerRound: any;

  constructor() { }

  ngOnInit(): void {
    this.killsPerRound = [];
    this.calculateKillsPerRound();
  }

  get headShotsPercentage() {
    return (this.player.headShotKills / this.player.kills) * 100;
  }

  private calculateKillsPerRound() {
    this.player.killsHistoric.forEach((kill: HistoricKill) => {
      if (this.killsPerRound[kill.round] !== undefined) {
        this.killsPerRound[kill.round] += 1;
      }
      else {
        this.killsPerRound[kill.round] = 1;
      }
    });
  }

  getNumberKillsPerRound(value: number) {
    return this.killsPerRound.filter(time => time == value).length;
  }

}
