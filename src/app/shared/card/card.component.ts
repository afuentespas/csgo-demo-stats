import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'csgo-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() cardTitle: string;

  @Input() image: string;

  constructor() { }

  ngOnInit(): void { }

}
