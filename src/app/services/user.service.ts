import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  firstname : string;
  lastname : string;
  firstnameSub = new Subject<string>();
  lastnameSub = new Subject<string>();
  constructor() { }

  addDetails( firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.firstnameSub.next(firstname);
    this.lastnameSub.next(lastname);
  }
}
