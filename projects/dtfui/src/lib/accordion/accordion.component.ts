import { Component, Input } from '@angular/core';
import { DTFAccordionItem } from './accordion-item.interface';

@Component({
  selector: 'dtf-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class DTFAccordionComponent {
  @Input() public items: DTFAccordionItem[] = [];

  public toggle(item: DTFAccordionItem): void {
    item.isExpanded = !item.isExpanded;
  }
}
