import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navheader',
  templateUrl: './navheader.component.html',
  styleUrls: ['./navheader.component.css']
})
export class NavheaderComponent implements OnInit {
  isLogged:String;
  
  constructor(private router:Router) {

   }

  ngOnInit() {

//    this.isLogged = localStorage.getItem("isLoggedIn");
    console.log(this.isLogged);

    
  }
  
  logout(){
    localStorage.setItem('isLoggedIn', "false");
    console.log(this.isLogged)
    this.router.navigateByUrl("/login");
  }

}
