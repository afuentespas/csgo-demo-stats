import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatchModel } from '../../demofile-reader/models/match-model';

@Component({
  selector: 'csgo-card-form-demo-reader',
  templateUrl: './card-form-demo-reader.component.html',
  styleUrls: ['./card-form-demo-reader.component.scss']
})
export class CardFormDemoReaderComponent implements OnInit {

  isReadingDemo: boolean = false;

  isReadingDemoError: boolean = false;

  isReadingFinished: boolean = false;

  errorMsg: string;

  percentageLoading: number = 0;

  @Output() onDemoReaded: EventEmitter<MatchModel> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  start(): void {
    this.isReadingDemoError = false;
    this.isReadingDemo = true;
  }

  updateProgressBar(event): void {
    this.percentageLoading = event.percentage;
  }

  end(event): void {
    this.isReadingFinished = true;
    this.onDemoReaded.emit(event.matchStats);
  }

  error(event): void {
    this.isReadingDemoError = true;
    this.isReadingDemo = false;
    this.percentageLoading = 0;
    this.errorMsg = event.msg;
  }

}
