import { Component, Input } from '@angular/core';

@Component({
  selector: 'dtf-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class DTFCardComponent {
  @Input() public title = '';
  @Input() public subTitle = '';
  @Input() public iconClasses = '';
}
