import { Component } from '@angular/core';

@Component({
  selector: 'dtf-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss']
})
export class DTFBottomSheetComponent {
  public isShown = false;

  public show(): void {
    this.isShown = true;
  }

  public hide(): void {
    this.isShown = false;
  }
}
