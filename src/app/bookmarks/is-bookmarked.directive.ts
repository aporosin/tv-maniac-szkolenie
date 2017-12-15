import {Directive, HostBinding, HostListener, Input} from '@angular/core';
import {Bookmark} from './bookmarks.models';
import {BookmarksService} from './bookmarks.service';

@Directive({
  selector: '[tvIsBookmarked]'
})
export class IsBookmarkedDirective {

  @Input('tvIsBookmarked') item: Bookmark;

  @HostBinding('class.opaque')
  private isOpaque = false;

  @HostListener('mouseenter')
  onMouseOver() {
    this.isOpaque = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.isOpaque = false;
  }

  constructor(private bs: BookmarksService) {
    //element.nativeElement.style.backgroundColor = 'red';
  }

  @HostBinding('class.bookmarked') // alternate to <div [class.bookmarked]='costam'>
  get isBookmarked(): boolean {
    return this.bs.has(this.item.id);
  }
}
