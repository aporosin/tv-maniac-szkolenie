import { Injectable } from '@angular/core';
import {Bookmark, BookmarkId} from './bookmarks.models';
import {Show} from '../tv/tv.models';



@Injectable() // może byc wstrzykiwana jako zaleznosc do innych komponentow
export class BookmarksService {

  items: Bookmark[] = [];
  constructor() { }

  add(item: Bookmark): void {
    this.items = [...this.items, item]; // tworzy nowa tablice bo tak jest lepiej (nie wiadomo czemu?)
  }

  remove(id: BookmarkId) {
    if (this.has(id)) {
      const index = this.items.findIndex(b => b.id === id);
      if (index > -1) {
        this.items.splice(index, 1);
      }
    }
  }

  removeBookmark(s: Bookmark) {

      const index = this.items.findIndex(b => b.id === s.id);
      if (index > -1) {
        this.items.splice(index, 1);
      }

  }

  has(id: BookmarkId): boolean {
    return this.items.some(item => item.id === id);
  }
}
