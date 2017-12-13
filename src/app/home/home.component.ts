import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {OuterSubscriber} from 'rxjs/OuterSubscriber';

@Component({
  selector: 'tv-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() title = 'Home Component Name';
  @Output() timePass = new EventEmitter<number>();

  constructor() {
    setInterval(() => this.timePass.emit(+new Date()), 1000);
  }

  ngOnInit() {
  }

}
