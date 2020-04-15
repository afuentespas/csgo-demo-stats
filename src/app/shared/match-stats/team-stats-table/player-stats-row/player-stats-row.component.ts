import { Component, OnInit, Input } from '@angular/core';
import { PlayerModel } from 'src/app/core/demofile-reader/models/player-model';
import { TeamNumber } from 'src/app/core/demofile-reader/adapters/team-adapter';

@Component({
  selector: '[csgo-player-stats-row]',
  templateUrl: './player-stats-row.component.html',
  styleUrls: ['./player-stats-row.component.scss']
})
export class PlayerStatsRowComponent implements OnInit {

  @Input() player: PlayerModel;

  @Input() teamNumber: TeamNumber = 2 | 3;

  constructor() { }

  ngOnInit(): void { }

}
