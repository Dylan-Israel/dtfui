import { Component, Input } from '@angular/core';

@Component({
  selector: 'dtf-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class DTFToggleComponent {
  @Input() public isOn = false;

  public toggle(): void {
    this.isOn = !this.isOn;
  }
}
