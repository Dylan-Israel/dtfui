import { Component, Input } from '@angular/core';

@Component({
  selector: 'dtf-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class DTFModalComponent {
  @Input() public title = '';
  public isHidden = true;

  public close(): void {
    this.isHidden = true;
  }

  public open(): void {
    this.isHidden = false;
  }
}
