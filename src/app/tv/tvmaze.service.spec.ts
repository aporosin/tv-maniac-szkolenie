import { TestBed, inject } from '@angular/core/testing';

import { TvmazeService } from './tvmaze.service';
import { MockBackend } from '@angular/http/testing';
import { HttpClient } from '@angular/common/http';

describe('TvmazeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TvmazeService,
        {provide: HttpClient, deps: [MockBackend]}]
    });
  });

  it('should be created', inject([TvmazeService, HttpClient],
    (service: TvmazeService) => {
    expect(service).toBeTruthy();
  }));
});
