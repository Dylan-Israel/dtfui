import { Component, Input } from '@angular/core';

@Component({
  selector: 'dtf-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class DTFOverlayComponent {
  @Input() public isShown = false;
}

