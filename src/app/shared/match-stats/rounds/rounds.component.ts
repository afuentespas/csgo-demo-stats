import { Component, OnInit, Input } from '@angular/core';
import { RoundModel } from 'src/app/core/demofile-reader/models/round-model';


@Component({
  selector: 'csgo-rounds',
  templateUrl: './rounds.component.html',
  styleUrls: ['./rounds.component.scss']
})
export class RoundsComponent implements OnInit {

  @Input() teamScore1: number;

  @Input() teamIndex1: number;

  @Input() teamScore2: number;

  @Input() teamIndex2: number;

  @Input() rounds: RoundModel[];

  constructor() { }

  ngOnInit(): void { }

}
