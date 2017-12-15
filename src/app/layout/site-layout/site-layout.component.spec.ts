import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteLayoutComponent } from './site-layout.component';
import {RouterModule} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {RoutingInProgressComponent} from '../../routing-in-progress/routing-in-progress.component';

describe('SiteLayoutComponent', () => {
  let component: SiteLayoutComponent;
  let fixture: ComponentFixture<SiteLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ SiteLayoutComponent, RoutingInProgressComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
