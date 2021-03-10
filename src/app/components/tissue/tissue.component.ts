import { Component, OnInit } from '@angular/core';
import { Tissue } from 'src/app/models/tissue';
import { TissueService } from 'src/app/services/tissue.service';

@Component({
  selector: 'app-tissue',
  templateUrl: './tissue.component.html',
  styleUrls: ['./tissue.component.css'],
})
export class TissueComponent implements OnInit {
  tissues: Tissue[] = [];
  dataLoaded = false;

  constructor(private tissueService: TissueService) {}

  ngOnInit(): void {
    this.getTissues();
  }

  getTissues() {
    this.tissueService.getTissues().subscribe((response) => {
      this.tissues = response.data;
      this.dataLoaded = true;
    });
  }
}
