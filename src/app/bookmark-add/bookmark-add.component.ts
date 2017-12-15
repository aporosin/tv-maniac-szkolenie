import {Component, Input, OnInit} from '@angular/core';
import {Show} from '../tv/tv.models';
import {BookmarksService} from '../bookmarks/bookmarks.service';
import {Bookmark} from '../bookmarks/bookmarks.models';

@Component({
  selector: 'tv-bookmark-add',
  templateUrl: './bookmark-add.component.html',
  styleUrls: ['./bookmark-add.component.scss']
})
export class BookmarkAddComponent implements OnInit {

  param = {value: 'world'};

  //@Input() bookmarkService: BookmarksService;
  @Input() show: Show;

  constructor(private service: BookmarksService) {
    // this.bookmarkService = service;
  }

  ngOnInit() {
  }

  addToBookmarks() {
    this.service.add(this.show);
  }

  has() {
    return this.service.has(this.show.id);
  }
}
