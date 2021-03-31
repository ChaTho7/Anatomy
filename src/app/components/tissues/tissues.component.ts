import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComminicateService } from 'src/app/services/comminicate/comminicate.service';

@Component({
  selector: 'app-tissues',
  templateUrl: './tissues.component.html',
  styleUrls: ['./tissues.component.css'],
})
export class TissuesComponent implements OnInit {
  private comService = ComminicateService;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  filter() {
    this.comService.filterRouter(this.router);
  }
}
