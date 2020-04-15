import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: '[csgo-rounds-icons]',
  templateUrl: './rounds-icons.component.html',
  styleUrls: ['./rounds-icons.component.scss']
})
export class RoundsIconsComponent implements OnInit {

  @Input() reasonCode : number;

  @Input() teamIndex : number;

  @Input() teamWinnerIndex : number;

  constructor() { }

  ngOnInit(): void { }

}
