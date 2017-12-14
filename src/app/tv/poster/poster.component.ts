import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Show} from '../tv.models';
import {get} from 'lodash';

@Component({
  selector: 'tv-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss']
})
export class PosterComponent implements OnChanges {

  @Input() show: Show;
  @Input() size = 'lg';
  posterUrl: string;

  constructor() { }

  ngOnChanges() {

    const sizesDist = {
      md: 'medium',
      lg: 'original'
    };

    this.posterUrl = get(this.show, ['image', sizesDist[this.size]], 'assets/images/default-placeholder.png');
  }

}
