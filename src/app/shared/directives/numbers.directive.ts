import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'input[numbersOnly]'
})
export class NumbersDirective {

  constructor(
    private elRef: ElementRef
  ) { }

  @HostListener('input',['$event'])
  onChangeInput(event: Event): void{
    
    const patternNumber = /[^0-9]*/g;
    const valueInitial = this.elRef.nativeElement.value;

    this.elRef.nativeElement.value = valueInitial.replace(patternNumber, '')
    if (valueInitial !== this.elRef.nativeElement.value) {
      event.stopPropagation();
    }
  }
}
