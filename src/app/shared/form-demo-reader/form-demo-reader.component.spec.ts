import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDemoReaderComponent } from './form-demo-reader.component';

describe('FormDemoReaderComponent', () => {
  let component: FormDemoReaderComponent;
  let fixture: ComponentFixture<FormDemoReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDemoReaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDemoReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
