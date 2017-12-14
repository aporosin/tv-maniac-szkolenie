import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {namespace, Show} from '../tv.models';
import ShowDetails = namespace.ShowDetails;
import {Observable} from 'rxjs/Observable';
import construct = Reflect.construct;
import {TvmazeService} from '../tvmaze.service';

@Injectable()
export class ShowDetailsResolver implements Resolve<ShowDetails> {

  constructor(private tv: TvmazeService) {

  }

  resolve(route: ActivatedRouteSnapshot): Observable<namespace.ShowDetails> {

    const id = route.params.id;
    return this.tv.getShow(id);
  }

}
