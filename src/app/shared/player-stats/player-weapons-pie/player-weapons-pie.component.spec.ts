import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerWeaponsPieComponent } from './player-weapons-pie.component';

describe('PlayerWeaponsPieComponent', () => {
  let component: PlayerWeaponsPieComponent;
  let fixture: ComponentFixture<PlayerWeaponsPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerWeaponsPieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerWeaponsPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
