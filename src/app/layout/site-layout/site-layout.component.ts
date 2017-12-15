import { Component, OnInit } from '@angular/core';
import {MenuItem} from '../../site-layout/site-menu.models';
import {SiteMenuService} from '../../site-layout/site-menu.service';

@Component({
  selector: 'tv-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.scss']
})
export class SiteLayoutComponent implements OnInit {

  menu: MenuItem[] = [];
  //   [
  //   {path: '', label: 'Home', exact: true},
  //   {path: '/tv', label: 'TV Shows'},
  //   {path: '/contact', label: 'Contact'}
  // ];

  constructor() {
    this.menu = SiteMenuService.getItems();
  }

  ngOnInit() {
  }

}
