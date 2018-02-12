import { Component } from '@angular/core';
import { NgbDateStruct, NgbDateParserFormatter } from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public model: NgbDateStruct;

  updateModel(text: string) {
    this.model = this.convertStringtoModel(text);
  }

  convertStringtoModel(text: string): NgbDateStruct {
    return {
      year: Number(text.replace(/(\d{4})-(\d{2})-(\d{2}).*/, '$1')),
      month: Number(text.replace(/(\d{4})-(\d{2})-(\d{2}).*/, '$2')),
      day: Number(text.replace(/(\d{4})-(\d{2})-(\d{2}).*/, '$3')),
    };
  }
}
