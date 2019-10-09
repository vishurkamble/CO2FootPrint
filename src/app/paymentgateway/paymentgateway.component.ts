import { Component, OnInit } from '@angular/core';
import { Constant } from '../core/constant/constant';
import { Payment } from '../core/constant/payment';

@Component({
  selector: 'app-paymentgateway',
  templateUrl: './paymentgateway.component.html',
  styleUrls: ['./paymentgateway.component.css']
})
export class PaymentgatewayComponent implements OnInit {
  
  constant : Constant = new Constant();
  payment : Payment = new Payment();

  

  years = this.constant.listYear();
  months = this.constant.listMonth();
  constructor() { }

  ngOnInit() {
  }

}
