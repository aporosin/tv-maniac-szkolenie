import {Component, OnDestroy, OnInit, Renderer2, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'tv-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.scss'],
  //encapsulation: ViewEncapsulation.None // style aplikuj globalnie - niestety bedzie
  // dzialac dla wszystkich stron a nie tylko tej jednej
})
export class Page404Component implements OnInit, OnDestroy {

  constructor(private renderer: Renderer2) {
  }

  // this is to set background for page 404 different than for the rest of pages
  // we cannot do this via page404.component.scss as body selector that is out htere will reference component htlm only
  //
  ngOnInit() {
    this.renderer.addClass(document.body, 'page404');
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'page404');
  }
}
