import { TestBed, inject } from '@angular/core/testing';
import {Bookmark} from './bookmarks.models';

import { BookmarksService } from './bookmarks.service';

describe('BookmarksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookmarksService]
    });
  });

  it('should be created', inject([BookmarksService], (service: BookmarksService) => {
    expect(service).toBeTruthy();
  }));

  it('add should work', inject([BookmarksService], (service: BookmarksService) => {

    expect(service.items.length).toEqual(0);
    const bookmark = <Bookmark> { id: 123 };
    service.add(bookmark);
    expect(service.items.length).toEqual(1);
    expect(service.items).toContain(bookmark);
    expect(service.items[0].id).not.toEqual(333);
    expect(service.items[0].id).toEqual(123);
  }));

  it('has should work', inject([BookmarksService], (service: BookmarksService) => {

    expect(service.items.length).toEqual(0);
    const bookmark1 = <Bookmark> { id: 1 };
    const bookmark2 = <Bookmark> { id: 2 };
    const bookmark3 = <Bookmark> { id: 3 };
    const bookmark4 = <Bookmark> { id: 4 };
    service.add(bookmark1);
    service.add(bookmark2);
    service.add(bookmark3);
    service.add(bookmark4);

    expect(service.has(1)).toEqual(true);
    expect(service.has(2)).toEqual(true);
    expect(service.has(3)).toEqual(true);
    expect(service.has(4)).toEqual(true);
    expect(service.has(5)).not.toEqual(true);

  }));

  it('remove should work', inject([BookmarksService], (service: BookmarksService) => {

    expect(service.items.length).toEqual(0);
    const bookmark1 = <Bookmark> { id: 1 };
    const bookmark2 = <Bookmark> { id: 2 };
    const bookmark3 = <Bookmark> { id: 3 };
    const bookmark4 = <Bookmark> { id: 4 };
    service.add(bookmark1);
    service.add(bookmark2);
    service.add(bookmark3);
    service.add(bookmark4);

    expect(service.items.length).toEqual(4);
    expect(service.has(1)).toEqual(true);
    expect(service.has(2)).toEqual(true);
    expect(service.has(3)).toEqual(true);
    expect(service.has(4)).toEqual(true);

    service.remove(2);
    expect(service.items.length).toEqual(3);
    expect(service.has(1)).toEqual(true);
    expect(service.has(2)).toEqual(false);
    expect(service.has(3)).toEqual(true);
    expect(service.has(4)).toEqual(true);

    service.remove(4);
    expect(service.items.length).toEqual(2);
    expect(service.has(1)).toEqual(true);
    expect(service.has(2)).toEqual(false);
    expect(service.has(3)).toEqual(true);
    expect(service.has(4)).toEqual(false);

    service.remove(44);
    expect(service.items.length).toEqual(2);
    expect(service.has(1)).toEqual(true);
    expect(service.has(2)).toEqual(false);
    expect(service.has(3)).toEqual(true);
    expect(service.has(4)).toEqual(false);

  }));
});
