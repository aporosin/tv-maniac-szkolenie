import { Injectable } from '@angular/core';
import {MenuItem, SiteMenuServiceCOnfig} from './site-menu.models';

@Injectable()
export class SiteMenuService { // przechowuje informacje o menu (z site-layout.component

  constructor() { }

  static items: SiteMenuServiceCOnfig = [];

  static addItem(item: MenuItem) {
    SiteMenuService.items = [ // creates new array and adds new eleemnt
      ...SiteMenuService.items,
      item
    ]
  }

  static registerItems(items: SiteMenuServiceCOnfig) {
    SiteMenuService.items = [
      ...SiteMenuService.items,
      ...items
    ];
  }

  static getItems() : SiteMenuServiceCOnfig {
    return SiteMenuService.items;
  }
}
