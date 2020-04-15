import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPlayerWeaponsPieComponent } from './card-player-weapons-pie.component';

describe('CardPlayerWeaponsPieComponent', () => {
  let component: CardPlayerWeaponsPieComponent;
  let fixture: ComponentFixture<CardPlayerWeaponsPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPlayerWeaponsPieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPlayerWeaponsPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
