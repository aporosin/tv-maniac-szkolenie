import { TestBed, inject } from '@angular/core/testing';

import { SiteMenuService } from './site-menu.service';

describe('SiteMenuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SiteMenuService]
    });
  });

  it('should be created', inject([SiteMenuService], (service: SiteMenuService) => {
    expect(service).toBeTruthy();
  }));
});
