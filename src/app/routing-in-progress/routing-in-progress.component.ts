import { Component, OnInit } from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'tv-routing-in-progress',
  templateUrl: './routing-in-progress.component.html',
  styleUrls: ['./routing-in-progress.component.scss']
})
export class RoutingInProgressComponent {

  routingInProgress = false;
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationStart) {
        this.routingInProgress = true;
      } else if (event instanceof NavigationEnd) {
        this.routingInProgress = false;
      }
    });
  }
}
