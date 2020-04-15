import { Component, OnInit, Input } from '@angular/core';
import { HistoricKill } from 'src/app/core/demofile-reader/models/historic-kills';

@Component({
  selector: 'csgo-player-kills-log',
  templateUrl: './player-kills-log.component.html',
  styleUrls: ['./player-kills-log.component.scss']
})
export class PlayerKillsLogComponent implements OnInit {

  @Input() playerName: string;

  @Input() playerClanTag: string;

  @Input() killsHistoric: HistoricKill[];

  constructor() { }

  ngOnInit(): void { }

}
