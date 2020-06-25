import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signupForm: FormGroup;
  error : null;
  constructor( private router: Router) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null,[Validators.required])
    });

  }

  loginUser()
{
  console.log('In login user function');
  console.log(this.signupForm);
    console.log(this.signupForm.value );
    localStorage.setItem('username', this.signupForm.value.username );
    localStorage.setItem('password', this.signupForm.value.password );
  
    this.router.navigate(['/details']);

}

}
