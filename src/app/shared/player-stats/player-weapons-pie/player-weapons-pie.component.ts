import { Component, OnInit, Input } from '@angular/core';
import { HistoricKill } from 'src/app/core/demofile-reader/models/historic-kills';
import { Label, MultiDataSet, Color } from 'ng2-charts';
import { ChartType, ChartOptions } from 'chart.js';

@Component({
  selector: 'csgo-player-weapons-pie',
  templateUrl: './player-weapons-pie.component.html',
  styleUrls: ['./player-weapons-pie.component.scss']
})
export class PlayerWeaponsPieComponent implements OnInit {

  @Input() weaponsKills: HistoricKill[];

  pieChartLabels: Label[];
  pieChartData: MultiDataSet;
  pieChartType: ChartType = 'pie';
  pieChartColors = [{backgroundColor: [
    'rgb(86, 226, 207)', 'rgb(86, 174, 226)', 'rgb(86, 104, 226)', 'rgb(138, 86, 226)', 'rgb(207, 86, 226)',
    'rgb(226, 86, 174)', 'rgb(226, 86, 104)', 'rgb(226, 137, 86)', 'rgb(226, 207, 86)', 'rgb(174, 226, 86)',
    'rgb(104, 226, 86)', 'rgb(86, 226, 137)'
  ]}];
  pieChartOptions: ChartOptions = {
    legend: {
      display: true,
      position: 'left',
      labels: { fontColor: 'white' }
    }
  };

  constructor() { }

  ngOnInit(): void {
    let killsGroupByWeapons = this.groupByWeapons();
    this.pieChartLabels = Object.keys(killsGroupByWeapons);
    this.pieChartData = Object.values(killsGroupByWeapons);
  }

  private groupByWeapons(): any[] {
    let groupBy = [];
    this.weaponsKills.forEach((kill) => {
      if (groupBy[kill.weapon] !== undefined) {
        groupBy[kill.weapon] += 1;
      } else {
        groupBy[kill.weapon] = 1;
      }
    });
    return groupBy;
  }

}
