import { Component, Input } from '@angular/core';

@Component({
  selector: 'dtf-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class DTFQuoteComponent {
  @Input() public quote = '';
  @Input() public author = '';
  @Input() public occupation = '';
}
