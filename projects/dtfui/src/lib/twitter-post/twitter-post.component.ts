import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'dtf-twitter-post',
  templateUrl: './twitter-post.component.html',
  styleUrls: ['./twitter-post.component.scss']
})
export class DTFTwitterPostComponent {
  @Input() public baseHref = 'https://www.DylanIsrael.com';
  @Input() public hashTags: string[] = ['DylanIsrael', 'JavaScript', 'TypeScript', 'Angular', '100 Angular Challenge'];

  constructor(public titleService: Title) { }

  public get twitterUrl(): string {
    const base = this.getBaseWithHashTagsAndRoute();
    const message = encodeURIComponent(`Check out ${this.titleService.getTitle()} and become a CODING GOD!!!`);

    return `${base}${message}`;
  }

  private getBaseWithHashTagsAndRoute(): string {
    const route = encodeURI(this.baseHref);
    const hashTags = this.hashTags.join(',');

    return `https://twitter.com/intent/tweet?hashtags=${encodeURIComponent(hashTags)}&related=pizzapokerguy&url=${route}&text=`;
  }
}
