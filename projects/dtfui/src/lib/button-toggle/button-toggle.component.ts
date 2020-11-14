import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DTFButtonMeta } from './button-meta.model';

@Component({
  selector: 'dtf-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.scss']
})
export class DTFButtonToggleComponent {
  @Input() options: DTFButtonMeta[] = [];
  @Output() selection = new EventEmitter<DTFButtonMeta>();

  public selected(selectedOption: DTFButtonMeta): void {
    this.options.forEach((option) => {
      option.isActive = (selectedOption === option);
    });

    this.selection.emit(selectedOption);
  }
}
