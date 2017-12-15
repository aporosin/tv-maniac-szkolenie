import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'tv-rating-input',
  templateUrl: './rating-input.component.html',
  styleUrls: ['./rating-input.component.scss'],
  styles: [`
    .rating-stars {
      display: inline-block;
      width: 25px;
      line-height: 25px;
      text-align: center;
      cursor: pointer;
      user-select: none;
    }
  `],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RatingInputComponent),
      multi: true
    }
  ]
})
export class RatingInputComponent implements ControlValueAccessor {


  registerOnChange(fn: (rating: number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  @Input() disabled = false;
  stars: boolean[] = Array(10).fill(false);

  onChange = (number) => {};
  onTouched = () => {};

  get value(): number {
    return this.stars.reduce((t,s) => {
      return t + (s? 1: 0);
    }, 0);
  }

  rate(rating: number) {
    if(!this.disabled){
      this.writeValue(rating);
    }
  }

  writeValue(rating: number): void {
    this.stars = this.stars.map((_, i) => rating > i);
    this.onChange(this.value);
  }
}
