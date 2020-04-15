import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Demofile } from '../../core/demofile-reader/demofile';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'csgo-form-demo-reader',
  templateUrl: './form-demo-reader.component.html',
  styleUrls: ['./form-demo-reader.component.scss']
})
export class FormDemoReaderComponent implements OnInit {

  @Output() onProgressUpdate: EventEmitter<any> = new EventEmitter();

  @Output() onStart: EventEmitter<void> = new EventEmitter();

  @Output() onEnd: EventEmitter<any> = new EventEmitter();

  @Output() onError: EventEmitter<any> = new EventEmitter();

  constructor(private demo: Demofile) { }

  ngOnInit(): void { }

  uploadFile(event): void {
    let file = event.target.files[0];
    this.parseDemoFile(file);
  }

  private parseDemoFile(file): void {
    this.demo.parseDemoFile(file);
    this.demo.demoEvent.subscribe((e) => {
      switch (e.event){
        case 'start': this.onStart.emit(); break;
        case 'progress': this.onProgressUpdate.emit({percentage: e.percentage}); break;
        case 'end': this.onEnd.emit({matchStats: e.matchStats});break;
        case 'error': this.onError.emit({msg: e.msg}); break;
      }
    });
  }

}
