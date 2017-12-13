import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterComponent } from './poster.component';
import {RouterTestingModule} from '@angular/router/testing';
import {Externals, Image, Links, Network, Rating, Schedule, Show, WebChannel} from '../tv.models';

class Show1 implements Show {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  premiered: string;
  officialSite: string;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network: Network;
  webChannel: WebChannel;
  externals: Externals;
  image: Image;
  summary: string;
  updated: number;
  _links: Links;
}

describe('PosterComponent', () => {
  let component: PosterComponent;
  let fixture: ComponentFixture<PosterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ PosterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosterComponent);
    component = fixture.componentInstance;
    component.show = new Show1(); // alternatively: <Show>{} lub {} as Show
    /* or create inline object if we need values
      const show : Show = { 'id': 13, etc. }
     */
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
