import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[libHighlight]',
  standalone: true
})
export class HighlightDirective {

  private _highlight: boolean | string = true;
  @Input() set libHighlight(value: boolean | string) {
    this._highlight = value;
    if (!this.el?.nativeElement) return;
    if (this._highlight || typeof this._highlight === 'string') {
      this.el.nativeElement.style.backgroundColor = 'yellow';
    } else {
      this.el.nativeElement.style.backgroundColor = '';
    }
  }

  constructor(private el: ElementRef<HTMLElement>) {}

}
