import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPlayerSummaryComponent } from './card-player-summary.component';

describe('CardPlayerSummaryComponent', () => {
  let component: CardPlayerSummaryComponent;
  let fixture: ComponentFixture<CardPlayerSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPlayerSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPlayerSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
