import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DTFAccordionComponent } from './accordion/accordion.component';
import { DTFAutoFocusDirective } from './auto-focus/auto-focus.directive';
import { DTFBottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { DTFButtonToggleComponent } from './button-toggle/button-toggle.component';
import { DTFCardComponent } from './card/card.component';
import { DTFCounterComponent } from './counter/counter.component';
import { DTFDebounceClickDirective } from './debounce-click/debounce-click.directive';
import { DTFDebounceSearchComponent } from './debounce-search/debounce-search.component';
import { DTFFieldsetComponent } from './fieldset/fieldset.component';
import { DTFLinkedinPostComponent } from './linkedin-post/linkedin-post.component';
import { DTFLoaderComponent } from './loader/loader.component';
import { DTFModalComponent } from './modal/modal.component';
import { DTFOverlayComponent } from './overlay/overlay.component';
import { DTFPagingComponent } from './paging/paging.component';
import { DTFPillFiltersComponent } from './pill-filters/pill-filters.component';
import { DTFPillComponent } from './pill/pill.component';
import { DTFProgressBarComponent } from './progress-bar/progress-bar.component';
import { DTFQuoteComponent } from './quote/quote.component';
import { DTFRibbonComponent } from './ribbon/ribbon.component';
import { DTFSearchListComponent } from './search-list/search-list.component';
import { DTFSimpleTableComponent } from './simple-table/simple-table.component';
import { DTFSkeletonLoaderComponent } from './skeleton-loader/skeleton-loader.component';
import { DTFSocialMediaBarComponent } from './social-media-bar/social-media-bar.component';
import { DTFSortTableComponent } from './sort-table/sort-table.component';
import { DTFStarRatingsComponent } from './star-ratings/star-ratings.component';
import { DTFTabsComponent } from './tabs/tabs.component';
import { DTFToggleComponent } from './toggle/toggle.component';
import { DTFTopOfPageComponent } from './top-of-page/top-of-page.component';
import { DTFTruncatePipe } from './truncate/truncate.pipe';
import { DTFTwitterPostComponent } from './twitter-post/twitter-post.component';

const DECLARATIONS_AND_EXPORTS = [
  DTFAccordionComponent,
  DTFAutoFocusDirective,
  DTFBottomSheetComponent,
  DTFButtonToggleComponent,
  DTFCardComponent,
  DTFCounterComponent,
  DTFDebounceClickDirective,
  DTFDebounceSearchComponent,
  DTFFieldsetComponent,
  DTFLinkedinPostComponent,
  DTFLoaderComponent,
  DTFModalComponent,
  DTFOverlayComponent,
  DTFPagingComponent,
  DTFPillComponent,
  DTFPillFiltersComponent,
  DTFProgressBarComponent,
  DTFQuoteComponent,
  DTFRibbonComponent,
  DTFSearchListComponent,
  DTFSimpleTableComponent,
  DTFSkeletonLoaderComponent,
  DTFSocialMediaBarComponent,
  DTFSortTableComponent,
  DTFStarRatingsComponent,
  DTFTabsComponent,
  DTFToggleComponent,
  DTFTopOfPageComponent,
  DTFTruncatePipe,
  DTFTwitterPostComponent
];

@NgModule({
  declarations: DECLARATIONS_AND_EXPORTS,
  imports: [
    CommonModule
  ],
  exports: DECLARATIONS_AND_EXPORTS,
})
export class DTFModule { }
