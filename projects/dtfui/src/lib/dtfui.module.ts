import { NgModule } from '@angular/core';
import { DtfuiComponent } from './dtfui.component';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [DtfuiComponent, ModalComponent],
  imports: [
  ],
  exports: [DtfuiComponent, ModalComponent]
})
export class DtfuiModule { }
