import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  firstname :string;
  lastname : string;
  firstnameSubject : string;
  lastnameSubject : string;

  firstnameSubscription : Subscription;
  lastnameSubscription : Subscription;

  constructor(private userService: UserService){ }

  ngOnInit(): void {
    this.firstname = this.userService.firstname;
    this.lastname = this.userService.lastname;

    this.firstnameSubscription = this.userService.firstnameSub.subscribe(firstname => {
      this.firstnameSubject = firstname;
    });

    this.lastnameSubscription = this.userService.lastnameSub.subscribe(lastname => {
      this.lastnameSubject = lastname;
    });
  }

  ngOnDestroy() {
    this.firstnameSubscription.unsubscribe();
    this.lastnameSubscription.unsubscribe();
}
}
