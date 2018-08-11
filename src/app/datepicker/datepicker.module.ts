import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';
import { NgbModule, NgbDatepickerI18n, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

import { I18n, CustomDatepickerI18n } from './datepicker-i18n';
import { NgbDatePTBRParserFormatter } from './ngb-date-pt-br-parser-formatter';
import { DateModelAccessor } from './date-model-accessor';
import { InputDateComponent } from './input-date/input-date.component';


@NgModule({
  exports: [
    InputDateComponent,
  ],
  declarations: [
    DateModelAccessor,
    InputDateComponent
  ],
  imports: [
    FormsModule,
    NgbModule.forRoot(),
  ],
  providers: [
    I18n,
    {provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n},
    {provide: NgbDateParserFormatter, useClass: NgbDatePTBRParserFormatter},
  ]
})
export class DatepickerModule { }
