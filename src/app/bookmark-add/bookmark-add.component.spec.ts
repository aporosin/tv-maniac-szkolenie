import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkAddComponent } from './bookmark-add.component';
import {BookmarksService} from '../bookmarks/bookmarks.service';
import {HttpClientModule} from '@angular/common/http';
import {show} from '../../mocks';

describe('BookmarkAddComponent', () => {
  let component: BookmarkAddComponent;
  let fixture: ComponentFixture<BookmarkAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarkAddComponent ],
      providers: [BookmarksService],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkAddComponent);
    component = fixture.componentInstance;
    component.show = show
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
