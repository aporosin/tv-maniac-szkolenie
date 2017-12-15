import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingInProgressComponent } from './routing-in-progress.component';

describe('RoutingInProgressComponent', () => {
  let component: RoutingInProgressComponent;
  let fixture: ComponentFixture<RoutingInProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingInProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingInProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
