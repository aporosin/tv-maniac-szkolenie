import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkRemoveComponent } from './bookmark-remove.component';
import {BookmarksService} from '../bookmarks/bookmarks.service';
import {HttpClientModule} from '@angular/common/http';

describe('BookmarkRemoveComponent', () => {
  let component: BookmarkRemoveComponent;
  let fixture: ComponentFixture<BookmarkRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarkRemoveComponent ],
      providers: [BookmarksService],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
