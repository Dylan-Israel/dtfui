import { Component, Input } from '@angular/core';

@Component({
  selector: 'dtf-skeleton-loader',
  templateUrl: './skeleton-loader.component.html',
  styleUrls: ['./skeleton-loader.component.scss'],
})
export class DTFSkeletonLoaderComponent {
  @Input() public width = '100%';
  @Input() public height = '100%';

  public get dimensions(): { width: string, height: string } {
    return { width: this.width, height: this.height };
  }
}
