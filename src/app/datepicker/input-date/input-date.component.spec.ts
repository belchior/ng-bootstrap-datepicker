import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NgbModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import { InputDateComponent } from './input-date.component';

describe('InputDateComponent', () => {
  let component: InputDateComponent;
  let fixture: ComponentFixture<InputDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, NgbModule.forRoot() ],
      declarations: [ InputDateComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnChanges should not to throw', () => {
    expect(() => {
      component.ngOnChanges();
    }).not.toThrow();

    expect(() => {
      component.date = '2018-01-31T00:00:00';
      component.ngOnChanges();
    }).not.toThrow();
  });

  it('updateDate should not to throw', () => {

    expect(() => {
      component.date = '2018-01-31T00:00:00';
      component.updateDate('2018-02-01T00:00:00');
    }).not.toThrow();

    expect(() => {
      component.date = '2018-01-01';
      component.updateDate('2018-02-02');
    }).not.toThrow();

    expect(() => {
      component.date = '2018-10-10';
      component.updateDate('2018-11-11');
    }).not.toThrow();

    expect(() => {
      const date: NgbDateStruct = {year: 2018, month: 1, day: 1};
      component.updateDate(date);
    }).not.toThrow();
  });
});
