import { Component, Input } from '@angular/core';

@Component({
  selector: 'dtf-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class DTFSearchListComponent {
  public searchTerm = '';
  @Input() public items: string[] = [];
  public hasBeenSelected = false;

  public updateSearchTerm(value: string): void {
    this.searchTerm = value;
    this.hasBeenSelected = false;
  }

  public selectSearchTerm(value: string): void {
    this.searchTerm = value;
    this.hasBeenSelected = true;
  }
}
