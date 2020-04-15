import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerStatsRowComponent } from './player-stats-row.component';

describe('PlayerStatsRowComponent', () => {
  let component: PlayerStatsRowComponent;
  let fixture: ComponentFixture<PlayerStatsRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerStatsRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerStatsRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
