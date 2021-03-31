import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  date: Date = new Date();
  today: String;
  constructor() {}

  ngOnInit(): void {
    this.today = this.date.toISOString().substr(0, 10);
  }
}
