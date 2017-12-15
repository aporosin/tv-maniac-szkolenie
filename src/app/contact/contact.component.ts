import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tv-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactInfo = {
    email: '',
    message: ''
  };

  constructor() { }

  ngOnInit() {
  }

  send() {
    console.log(this.contactInfo);
  }
}
