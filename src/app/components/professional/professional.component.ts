import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent implements OnInit {
  signupForm: FormGroup;
  // firstnameSubject : string;
  // lastnameSubject : string;

  // firstnameSubscription : Subscription;
  // lastnameSubscription : Subscription;

  constructor(private router: Router, private userService:  UserService ) { }

  ngOnInit(): void {
    //   this.firstnameSubscription = this.userService.firstnameSub.subscribe(firstname => {
    //   this.firstnameSubject = firstname;
    // });

    // this.lastnameSubscription = this.userService.lastnameSub.subscribe(lastname => {
    //   this.lastnameSubject = lastname;
    // });
  }

  addUser(){
    console.log('details added successfully');
  }

  back(){
    this.router.navigate(['/details']);
  }

  ngOnDestroy() {
    // this.firstnameSubscription.unsubscribe();
    // this.lastnameSubscription.unsubscribe();
}
}
