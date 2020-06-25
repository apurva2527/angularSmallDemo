import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  signupForm: FormGroup;
  firstname : string;
  lastname : string;
  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      firstname: new FormControl(null, [Validators.required]),
      lastname: new FormControl(null,[Validators.required])
    });

    //localStorage.getItem('username')
  }

  addUser(){
    this.firstname = this.signupForm.value.firstname;
    this.lastname = this.signupForm.value.lastname;
    console.log(this.firstname);
    console.log(this.lastname);
    this.userService.addDetails(this.firstname,this.lastname);

  }

}
