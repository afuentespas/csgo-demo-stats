import { Component, OnInit, Input } from '@angular/core';
import { HistoricKill } from '../../demofile-reader/models/historic-kills';

@Component({
  selector: 'csgo-card-player-weapons-pie',
  templateUrl: './card-player-weapons-pie.component.html',
  styleUrls: ['./card-player-weapons-pie.component.scss']
})
export class CardPlayerWeaponsPieComponent implements OnInit {

  @Input() weaponsKills: HistoricKill[];

  constructor() { }

  ngOnInit(): void { }

}
