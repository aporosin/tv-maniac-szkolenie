import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Show, ShowResponse} from '../tv.models';
import 'rxjs/add/operator/map';
import {BookmarksService} from '../../bookmarks/bookmarks.service';
import {TvmazeService} from '../tvmaze.service';

@Component({
  selector: 'tv-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  shows: Show[] = [];
  query: string = 'Ola';

  constructor(private tv: TvmazeService, private service: BookmarksService) { }

  get bookmarks(): Show[] {
    return this.service.items as Show[];
  }

  ngOnInit() {
    this.search('gorilla');
  }

  search(query: string) {
    //const url = `https://api.tvmaze.com/search/shows?q=${query}`;

    this.tv.searchShows(query).subscribe(shows => this.shows = shows);
  }

  empty(): boolean {
    return this.shows.length == 0;
  }
}
