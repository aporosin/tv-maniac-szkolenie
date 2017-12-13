import { Component, OnInit } from '@angular/core';

interface MenuItem {
  path: string;
  label: string;
  exact?: boolean;
}

@Component({
  selector: 'tv-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.scss']
})
export class SiteLayoutComponent implements OnInit {

  menu: MenuItem[] = [
    {path: '', label: 'Home', exact: true},
    {path: '/tv', label: 'TV Shows'},
    {path: '/contact', label: 'Contact'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
