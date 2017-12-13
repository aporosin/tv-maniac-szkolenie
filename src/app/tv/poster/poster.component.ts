import {Component, Input, OnInit} from '@angular/core';
import {Show} from '../tv.models';
import {get} from 'lodash';

@Component({
  selector: 'tv-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss']
})
export class PosterComponent implements OnInit {

  @Input() show: Show;
  @Input() size = 'lg';
  posterUrl: string;

  constructor() { }

  ngOnInit() {

    const sizesDist = {
      md: 'medium',
      lg: 'original'
    };

    this.posterUrl = get(this.show, ['image', sizesDist[this.size]], 'assets/images/default-placeholder.png');
  }

}
