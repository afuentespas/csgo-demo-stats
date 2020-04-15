import { Component, OnInit, Input } from '@angular/core';
import { PlayerModel } from '../../demofile-reader/models/player-model';

@Component({
  selector: 'csgo-card-player-summary',
  templateUrl: './card-player-summary.component.html',
  styleUrls: ['./card-player-summary.component.scss']
})
export class CardPlayerSummaryComponent implements OnInit {

  @Input() player: PlayerModel;

  constructor() { }

  ngOnInit(): void { }

}
