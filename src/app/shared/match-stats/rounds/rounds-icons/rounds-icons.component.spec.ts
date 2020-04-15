import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundsIconsComponent } from './rounds-icons.component';

describe('RoundsIconsComponent', () => {
  let component: RoundsIconsComponent;
  let fixture: ComponentFixture<RoundsIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundsIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundsIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
