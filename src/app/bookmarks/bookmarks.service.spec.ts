import { TestBed, inject } from '@angular/core/testing';
import {Bookmark, BookmarkId} from './bookmarks.models';

import { BookmarksService } from './bookmarks.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {environment} from '../../environments/environment';

let service: BookmarksService;
const httpMockUrl: string = environment.dbUrl + environment.dbName;
let httpMock;

describe('BookmarksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookmarksService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.get(BookmarksService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();

    const req = httpMock.expectOne(httpMockUrl);
    expect(req.request.method).toBe('GET');
    req.flush([]);
  })

  it('should be created', inject([BookmarksService], (service: BookmarksService) => {
    expect(service).toBeTruthy();
  }));

  it('puts given object at the end of array', () => {
    service.add({id: 1});
    service.add({id: 2});

    const req = httpMock.match(httpMockUrl); // tutaj zwroci tablice
    expect(req[1].request.method).toBe('POST');
    expect(req[2].request.method).toBe('POST');
    req[1].flush({id:1});
    req[2].flush({id:2});

  });


  it('remove should work', () => {

    service.add(createBookmarkMock(1)).add(createBookmarkMock(2));
    postTwo()

    service.remove(1);
    const req = httpMock.expectOne(httpMockUrl + '/1'); // tutaj zwroci tablice
    expect(req.request.method).toBe('DELETE');
    req.flush({});

    expect(service.items).toEqual([createBookmarkMock(2)]);
  });
});

describe('has()', () => {
  it('returns true if object of given id exists in items', () => {
    service.add(createBookmarkMock(1)).add(createBookmarkMock(2));
    postTwo();
    expect(service.has(2)).toBe(true);
  });

  it('returns false if object of given id exists in items', () => {
    service.add(createBookmarkMock(1)).add(createBookmarkMock(2));
    postTwo();
    expect(service.has(5)).toBe(false);
  });
});

 function postTwo(): void {
  service.add({id: 1});
  service.add({id: 2});

  const req = httpMock.match(httpMockUrl); // tutaj zwroci tablice
  expect(req[1].request.method).toBe('POST');
  expect(req[2].request.method).toBe('POST');
  req[1].flush({id:1});
  req[2].flush({id:2});
}

function createBookmarkMock(id: BookmarkId): Bookmark {
  return {id: id };
}
