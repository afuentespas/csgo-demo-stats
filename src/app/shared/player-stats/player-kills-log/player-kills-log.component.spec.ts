import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerKillsLogComponent } from './player-kills-log.component';

describe('PlayerKillsLogComponent', () => {
  let component: PlayerKillsLogComponent;
  let fixture: ComponentFixture<PlayerKillsLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerKillsLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerKillsLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
