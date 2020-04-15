import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPlayerKillsLogComponent } from './card-player-kills-log.component';

describe('CardPlayerKillsLogComponent', () => {
  let component: CardPlayerKillsLogComponent;
  let fixture: ComponentFixture<CardPlayerKillsLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPlayerKillsLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPlayerKillsLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
