import { Component, Input } from '@angular/core';

@Component({
  selector: 'dtf-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class DTFProgressBarComponent {
  @Input() public value = 0;
  @Input() public max = 100;
}
