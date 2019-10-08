import { Component, OnInit } from '@angular/core';
import { ContactUs }  from '../core/constant/ContactUs';
import { Router } from "@angular/router";
import { ContactUsData } from '../core/constant/constant'; 
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  phoneNumber : string = ContactUsData.contactUs.contactNumber;
  firstAddress : string = ContactUsData.contactUs.firstOfficeLocation;
  secondAddress : string = ContactUsData.contactUs.secondOfficeLocation;
  email : string = ContactUsData.contactUs.email;
  contactUs: ContactUs = new ContactUs();
  constructor(private router : Router) {
   }
   

  ngOnInit() {
  }

  sendMessageToDataBase(data : ContactUs){
    console.log(data);
  }

}
