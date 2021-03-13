import { Component, OnInit } from '@angular/core';
import { ComminicateService } from 'src/app/services/comminicate/comminicate.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css'],
})
export class NaviComponent implements OnInit {
  data: any;
  constructor(private commService: ComminicateService) {}

  ngOnInit(): void {}

  onInput(event: any) {
    this.data = event.target.value;
    this.submitInput();
  }

  submitInput() {
    this.commService.innerMethod(this.data);
  }
}
