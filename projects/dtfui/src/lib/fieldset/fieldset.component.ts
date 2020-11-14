import { Component, Input } from '@angular/core';

@Component({
  selector: 'dtf-fieldset',
  templateUrl: './fieldset.component.html',
  styleUrls: ['./fieldset.component.scss']
})
export class DTFFieldsetComponent {
  @Input() legend = '';
  @Input() isOpen = true;

  public toggle(): void {
    this.isOpen = !this.isOpen;
  }
}
