import { Component, OnInit, Input } from '@angular/core';
import { TeamModel } from 'src/app/core/demofile-reader/models/team-model';

@Component({
  selector: 'csgo-team-stats-table',
  templateUrl: './team-stats-table.component.html',
  styleUrls: ['./team-stats-table.component.scss']
})
export class TeamStatsTableComponent implements OnInit {

  @Input() team: TeamModel;

  constructor() { }

  ngOnInit(): void { }

}
