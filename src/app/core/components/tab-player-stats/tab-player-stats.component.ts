import { Component, OnInit, Input } from '@angular/core';
import { PlayerModel } from '../../demofile-reader/models/player-model';

@Component({
  selector: 'csgo-tab-player-stats',
  templateUrl: './tab-player-stats.component.html',
  styleUrls: ['./tab-player-stats.component.scss']
})
export class TabPlayerStatsComponent implements OnInit {

  @Input() player: PlayerModel;

  constructor() { }

  ngOnInit(): void {
  }

}
