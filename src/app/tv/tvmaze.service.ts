import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Show, ShowResponse} from './tv.models';

@Injectable()
export class TvmazeService {

  private readonly baseUrl = 'https://api.tvmaze.com';

  constructor(private http: HttpClient) { }

  searchShows(query: string): Observable<Show[]> {
    const url = `${this.baseUrl}/search/shows?q=${query}`;
    return this.http.get<ShowResponse[]>(url)
      .map((response) => response.map(({show}) => show));
  }
}
