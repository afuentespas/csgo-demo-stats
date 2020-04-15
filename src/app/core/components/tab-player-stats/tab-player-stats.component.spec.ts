import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabPlayerStatsComponent } from './tab-player-stats.component';

describe('TabPlayerStatsComponent', () => {
  let component: TabPlayerStatsComponent;
  let fixture: ComponentFixture<TabPlayerStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabPlayerStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabPlayerStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
