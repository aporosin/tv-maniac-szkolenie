import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Show, ShowResponse} from '../tv.models';
import 'rxjs/add/operator/map';
import {BookmarksService} from '../../bookmarks/bookmarks.service';
import {TvmazeService} from '../tvmaze.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {debounceTime, distinctUntilChanged, filter, switchMap} from 'rxjs/operators';

@Component({
  selector: 'tv-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  shows: Show[] = [];
  //query: string = 'Ola';

  form: FormGroup;

  constructor(
    private tv: TvmazeService,
    private service: BookmarksService,
    private formBuilderService: FormBuilder
    ) {
    this.form = this.formBuilderService.group({ // Validator needed so that we don't send requests for empty string ot just one letter
      query: ['futura', [Validators.required, Validators.minLength(3)]]
    });

    // listen to changes on search field
    this.form.controls.query.valueChanges.pipe(
      filter(() => this.form.controls.query.valid),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(query => this.tv.searchShows(query)) // zawsze czekaj na ostatnio wyslany request)
    ).subscribe(shows =>
      this.shows = shows
    );

    this.search(this.form.controls.query.value);
  }

  get bookmarks(): Show[] {
    return this.service.items as Show[];
  }

  ngOnInit() {
    //this.search('gorilla');
  }

  search(query) {
    //const url = `https://api.tvmaze.com/search/shows?q=${query}`;

    this.tv.searchShows(query).subscribe(shows => this.shows = shows);
  }

  empty(): boolean {
    return this.shows.length == 0;
  }
}
