import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'input[appLetters]'
})
export class LettersDirective {

  constructor(
    private elRef: ElementRef
  ) { }

  @HostListener('input',['$event'])
  onChangeInput(event: Event): void{
    const patterLetras= /[^a-zA-ZáéíóúÁÉÍÓÚñÑ ]*/g;
    const valorInitial = this.elRef.nativeElement.value;

    this.elRef.nativeElement.value = valorInitial.replace(patterLetras,'');
    if (valorInitial !== this.elRef.nativeElement.value) {
      event.stopPropagation();
    }
  }
}
