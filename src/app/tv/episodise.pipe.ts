import { Pipe, PipeTransform } from '@angular/core';
import {Episode} from './tv.models';

@Pipe({
  name: 'episodise'
})
export class EpisodisePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let episode = <Episode> value;
    return 'S' + this.padDigits( episode.season, 2) + 'E' + this.padDigits( episode.number, 3)  ;
  }

  padDigits(number, digits) {
    return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
  }
}
