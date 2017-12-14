import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {namespace, Show, ShowResponse} from './tv.models';
import Episode = namespace.Episode;
import RootObject = namespace.RootObject;

@Injectable()
export class TvmazeService {

  private readonly baseUrl = 'https://api.tvmaze.com';

  constructor(private http: HttpClient) { }

  searchShows(query: string): Observable<Show[]> {
    const url = `${this.baseUrl}/search/shows?q=${query}`;
    return this.http.get<ShowResponse[]>(url)
      .map((response) => response.map(({show}) => show));
  }

  getShow(id: any): Observable<RootObject> {
    const episodesUrl = `${this.baseUrl}/shows/${id}?embed=episodes`;
    return this.http.get<RootObject>(episodesUrl);
      //.map((response) => response.show);
  }
}
