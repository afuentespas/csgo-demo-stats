import { Component, OnInit, Input } from '@angular/core';
import { HeaderModel } from '../../demofile-reader/models/header-model';

@Component({
  selector: 'csgo-card-general-info',
  templateUrl: './card-general-info.component.html',
  styleUrls: ['./card-general-info.component.scss']
})
export class CardGeneralInfoComponent implements OnInit {

  @Input() matchHeader: HeaderModel;

  constructor() { }

  ngOnInit(): void {}

}
