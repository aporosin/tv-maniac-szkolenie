import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TvmazeService} from '../tvmaze.service';
import {namespace, Show} from '../tv.models';
import Episode = namespace.Episode;
import RootObject = namespace.RootObject;

@Component({
  selector: 'tv-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})
export class ShowDetailsComponent implements OnInit {

  id: number;
  showDetails: RootObject;
  summary: string

  constructor(private route: ActivatedRoute) {
    // pobranie id-ka z urla:
    console.log('id', this.route.snapshot.params.id);
    //this.id = this.route.snapshot.params.id;
    this.showDetails = this.route.snapshot.data.show;
  }

  ngOnInit() {
    // this.tv.getShow(this.id).subscribe( show => {
    //   this.showDetails = show;
    //   this.summary = this.showDetails.summary;
    //   console.log(this.showDetails);
    // });

  }

}
