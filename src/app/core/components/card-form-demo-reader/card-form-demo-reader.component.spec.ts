import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFormDemoReaderComponent } from './card-form-demo-reader.component';

describe('CardFormDemoReaderComponent', () => {
  let component: CardFormDemoReaderComponent;
  let fixture: ComponentFixture<CardFormDemoReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardFormDemoReaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFormDemoReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
