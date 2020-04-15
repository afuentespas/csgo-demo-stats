import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGeneralInfoComponent } from './card-general-info.component';

describe('CardGeneralInfoComponent', () => {
  let component: CardGeneralInfoComponent;
  let fixture: ComponentFixture<CardGeneralInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardGeneralInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardGeneralInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
