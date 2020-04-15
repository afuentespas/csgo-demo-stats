import { Component, OnInit, Input } from '@angular/core';
import { HistoricKill } from '../../demofile-reader/models/historic-kills';

@Component({
  selector: 'csgo-card-player-kills-log',
  templateUrl: './card-player-kills-log.component.html',
  styleUrls: ['./card-player-kills-log.component.scss']
})
export class CardPlayerKillsLogComponent implements OnInit {

  @Input() playerName: string;

  @Input() playerClanTag: string;

  @Input() killsHistoric: HistoricKill[];

  constructor() { }

  ngOnInit(): void {}

}
