import { Component, Input } from '@angular/core';
import { RibbonLocation } from './ribbon-location.enum';
import { RibbonType } from './ribbon-type';

@Component({
  selector: 'dtf-ribbon',
  templateUrl: './ribbon.component.html',
  styleUrls: ['./ribbon.component.scss']
})
export class DTFRibbonComponent {
  @Input() public content = '';
  @Input() public location: RibbonLocation = RibbonLocation.BottomLeft;
  @Input() public type: RibbonType = RibbonType.Success;
}
