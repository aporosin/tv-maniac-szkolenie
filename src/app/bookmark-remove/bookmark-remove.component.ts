import {Component, Input, OnInit} from '@angular/core';
import {Show} from '../tv/tv.models';
import {BookmarksService} from '../bookmarks/bookmarks.service';
import {Bookmark, BookmarkId} from '../bookmarks/bookmarks.models';

@Component({
  selector: 'tv-bookmark-remove',
  templateUrl: './bookmark-remove.component.html',
  styleUrls: ['./bookmark-remove.component.scss']
})
export class BookmarkRemoveComponent implements OnInit {

  //@Input() bookmarkService: BookmarksService;
  @Input() show: Show;

  constructor(private service: BookmarksService) {
    //this.bookmarkService = service;
  }

  ngOnInit() {
  }

  removeFromBookmarks() {
    this.service.removeBookmark(this.show);
  }
}
