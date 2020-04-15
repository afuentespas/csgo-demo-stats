import { Component, OnInit, Input } from '@angular/core';
import { TeamModel } from '../../demofile-reader/models/team-model';
import { RoundModel } from '../../demofile-reader/models/round-model';

@Component({
  selector: 'csgo-match-stats',
  templateUrl: './match-stats.component.html',
  styleUrls: ['./match-stats.component.scss']
})
export class MatchStatsComponent implements OnInit {

  @Input() teams: TeamModel[];

  @Input() rounds: RoundModel[];

  constructor() { }

  ngOnInit(): void {}

}
