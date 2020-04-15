import { Component, OnInit } from '@angular/core';
import { MatchModel } from 'src/app/core/demofile-reader/models/match-model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  matchStats: MatchModel;

  isReadingFinished: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  demoReaded(match): void {
    this.matchStats = match;
    this.isReadingFinished = true;
  }

}