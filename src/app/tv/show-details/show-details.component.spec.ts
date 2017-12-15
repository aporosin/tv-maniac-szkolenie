import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetailsComponent } from './show-details.component';
import {namespace} from '../tv.models';
import ShowDetails = namespace.ShowDetails;
import {ActivatedRoute, RouterModule} from '@angular/router';
import {PosterComponent} from '../poster/poster.component';
import {EpisodisePipe} from '../episodise.pipe';
import {RouterTestingModule} from '@angular/router/testing';

class ActivatedRouteSnapshot {
  data = {
    show: { id: 1} as ShowDetails
  };
}

class ActivatedRouteStub {
  snapshot: ActivatedRouteSnapshot = new ActivatedRouteSnapshot();
}

describe('ShowDetailsComponent', () => {
  let component: ShowDetailsComponent;
  let fixture: ComponentFixture<ShowDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule],
      declarations: [ ShowDetailsComponent, PosterComponent, EpisodisePipe ],
      providers: [
        { provide: ActivatedRoute, useClass: ActivatedRouteStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
