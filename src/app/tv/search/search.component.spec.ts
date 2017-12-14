import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import {RouterTestingModule} from '@angular/router/testing';
import {PosterComponent} from '../poster/poster.component';
import {HttpClientModule} from '@angular/common/http';
import {BookmarkAddComponent} from '../../bookmark-add/bookmark-add.component';
import {BookmarkRemoveComponent} from '../../bookmark-remove/bookmark-remove.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [ SearchComponent, PosterComponent, BookmarkAddComponent, BookmarkRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
