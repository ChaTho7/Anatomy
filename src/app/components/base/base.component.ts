import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css'],
})
export class BaseComponent implements OnInit {
  b: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  constructor() {}

  ngOnInit(): void {}
}
