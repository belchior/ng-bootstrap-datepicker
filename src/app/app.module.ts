import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbDatepickerI18n, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { I18n, CustomDatepickerI18n, NgbDatePTBRParserFormatter, DateModelAccessor } from './datepicker';


@NgModule({
  declarations: [
    AppComponent,
    DateModelAccessor
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
  ],
  providers: [
    I18n,
    {provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n},
    {provide: NgbDateParserFormatter, useClass: NgbDatePTBRParserFormatter}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
