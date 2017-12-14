import { Injectable } from '@angular/core';
import {Bookmark, BookmarkId} from './bookmarks.models';
import {Show, ShowResponse} from '../tv/tv.models';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {remove} from 'lodash';


@Injectable() // może byc wstrzykiwana jako zaleznosc do innych komponentow
export class BookmarksService {

  private _items: Bookmark[] = [];
  private readonly baseUrl = environment.dbUrl + environment.dbName;

  constructor(private http: HttpClient) {
    this.http.get<Bookmark[]>(this.baseUrl)
      .subscribe(bookmarks => {
        this.items = bookmarks;
      });
  }

  get items(): Bookmark[] {
    return this._items;
  }

  set items(items: Bookmark[]) {
    this._items = items;
  }

  add (item: Bookmark): BookmarksService {
    // this.items = [...this.items, item];

    (<Show>item).isLoading = true;
    this.http.post(this.baseUrl, item)
      .subscribe(
        () => {
          this.items = [...this.items, item];
          (<Show>item).isLoading = false;
        },
            this.handleError
      );

    return this;
  }

  remove(id: BookmarkId) {
    // remove(this.items, {id});
    this.http.delete(`${this.baseUrl}/${id}`)
      .subscribe(
        () => remove(this.items, {id}),
        this.handleError
      );

  }

  has(id: BookmarkId): boolean {
    return this._items.some(item => item.id === id);
  }

  private handleError(err: any) {
    console.error(err);
  }
}
//   items: Bookmark[] = [];
//   private readonly baseUrl = environment.dbUrl + environment.dbName;
//
//   constructor(private  http: HttpClient) { }
//
//   add(item: Bookmark): void {
//     //this.items = [...this.items, item]; // tworzy nowa tablice bo tak jest lepiej (nie wiadomo czemu?)
//
//     const url = this.baseUrl + '/bookmark';
//     let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
//     let body = JSON.stringify(item);
//     this.http.post<ShowResponse[]>(url, body, {headers: headers} )
//       .map((response) => response.map(({show}) => show))
//       .subscribe();
//   }
//
//   remove(id: BookmarkId) {
//     if (this.has(id)) {
//       const index = this.items.findIndex(b => b.id === id);
//       if (index > -1) {
//         this.items.splice(index, 1);
//       }
//     }
//   }
//
//   removeBookmark(s: Bookmark) {
//
//       const index = this.items.findIndex(b => b.id === s.id);
//       if (index > -1) {
//         this.items.splice(index, 1);
//       }
//
//   }
//
//   has(id: BookmarkId): boolean {
//     return this.items.some(item => item.id === id);
//   }
// }
