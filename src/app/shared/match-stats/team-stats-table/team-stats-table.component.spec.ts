import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamStatsTableComponent } from './team-stats-table.component';

describe('TeamStatsTableComponent', () => {
  let component: TeamStatsTableComponent;
  let fixture: ComponentFixture<TeamStatsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamStatsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamStatsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
