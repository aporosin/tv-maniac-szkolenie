import {FormControl, NG_VALIDATORS} from '@angular/forms';
import {Directive} from '@angular/core';
import {selector} from 'rxjs/operator/publish';

export function emailDomainValidator(control: FormControl) {
  let domains = ['gmail.com', 'g.pl', 'onet.pl'];
  let userMail = control.value;// 'test@g.pl'; // get from form - how????
  let userDomain = '';

  if(userMail) {
    let split = userMail.split('@');

    if (split.length == 2) {
      userDomain = split[1];
    }
  }

  if(!domains.some(d => d == userDomain)) {
    // here we pass data to form when invalid
    return {
      emailDomain: {
        parsedDomain: userDomain,
        allowedDomain: domains,
        additionalMessage: 'Incorrect domain'
      }
    };
  }
}

// register validate function as directive  so it can be used in html
@Directive({
    selector: '[tvEmailDomain][ngModel]',
    providers: [
      {
        provide: NG_VALIDATORS,
        useValue: emailDomainValidator,
        multi: true
      }
    ]
  }
)
export class EmailDomainValidator {

}
