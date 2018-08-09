import { Component } from '@angular/core';
import { NgbDateStruct, NgbDateParserFormatter } from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public model: string = new Date().toJSON();
}
