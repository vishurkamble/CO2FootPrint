import { Component, OnInit } from '@angular/core';
import { User } from '../core/constant/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  UserLogin : User = new User();

  constructor(private router : Router) { }

  ngOnInit() {
  }

  checkLogin(userId: string, password: string)
  {
    if(userId === "navin" && password === "navin")
    {
      localStorage.setItem('isLoggedIn', "true");
      console.log(localStorage.getItem('isLoggedIn'));
      this.router.navigateByUrl("/home");
    }
    else
    {
      alert("Please register first");
      this.router.navigateByUrl("/register");
    }
  }

}
