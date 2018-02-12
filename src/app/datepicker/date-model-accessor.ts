import { Directive, ElementRef, HostListener, Renderer, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";

export const DATE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DateModelAccessor),
  multi: true
};

/**
 * The accessor for writing a value and listening to changes on a date input element
 *
 *  ### Example
 *  `<input type="date" name="myBirthday" ngModel useValueAsDate>`
 */
@Directive({
  selector: '[dateModelAccessor]',
  providers: [DATE_VALUE_ACCESSOR]
})
export class DateModelAccessor implements ControlValueAccessor {

  @HostListener('input', ['$event.target.valueAsDate']) onChange = (_: any) => { };
  @HostListener('blur', []) onTouched = () => { };

  constructor(private _renderer: Renderer, private _elementRef: ElementRef) { }

  writeValue(model: NgbDateStruct): void {
    if (!model) {
      return;
    }
    this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', this.convertModelToString(model));
  }

  registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }

  setDisabledState(isDisabled: boolean): void {
    this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
  }

  convertModelToString(model: NgbDateStruct): string {
    return `${model.year}-${model.month > 9 ? model.month : '0' + String(model.month)}-${model.day > 9 ? model.day : '0' + String(model.day)}`;
  }
}
