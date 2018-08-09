import { Component, OnChanges, Input, Output, EventEmitter, } from '@angular/core';
import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'ngb-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.css']
})
export class InputDateComponent implements OnChanges {
  constructor() { }

  @Input() date: string;
  @Output() dateChange = new EventEmitter<string>();

  dateDesktop: NgbDateStruct;
  dateMobile: string;
  imgSrc = require('./calendar-icon.svg');

  ngOnChanges() {
    this.dateDesktop = this.convertStringToModel(this.date);
    this.dateMobile = this.cutHoursFromDate(this.date);
  }

  addHoursFromDate(date: string): string {
    if (date.search(/T\d{2}:\d{2}:\d{2}/) >= 0) {
      return date;
    }
    return date + 'T00:00:00';
  }

  convertStringToModel(text: string): NgbDateStruct {
    if (text === null) {
      const today = new Date();
      return {
        year: today.getFullYear(),
        month: today.getMonth() + 1,
        day: today.getDate()
      };
    } else {
      return {
        year: Number(text.replace(/(\d{4})-(\d{2})-(\d{2}).*/, '$1')),
        month: Number(text.replace(/(\d{4})-(\d{2})-(\d{2}).*/, '$2')),
        day: Number(text.replace(/(\d{4})-(\d{2})-(\d{2}).*/, '$3')),
      };
    }
  }

  convertModelToString(model: NgbDateStruct): string {
    return `${model.year}-${model.month < 10 ? '0' + model.month : model.month}-${model.day < 10 ? '0' + model.day : model.day}T00:00:00`;
  }

  cutHoursFromDate(date: string): string {
    return date ? date.replace(/T.*/, '') : date;
  }

  updateDate(date: any) {
    if (typeof date === 'string') {
      this.date = this.addHoursFromDate(date);
      this.dateDesktop = this.convertStringToModel(date);
    } else {
      this.date = this.convertModelToString(this.dateDesktop);
      this.dateMobile = this.cutHoursFromDate(this.convertModelToString(this.dateDesktop));
    }
    this.dateChange.emit(this.date);
  }

}
