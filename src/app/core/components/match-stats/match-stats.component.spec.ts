import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchStatsComponent } from './match-stats.component';

describe('MatchStatsComponent', () => {
  let component: MatchStatsComponent;
  let fixture: ComponentFixture<MatchStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
