import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'csgo-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  @Input() percentage: number = 0;

  constructor() { }

  ngOnInit(): void { }

}
