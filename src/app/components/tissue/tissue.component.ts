import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tissue } from 'src/app/models/tissue';
import { TissueDetail } from 'src/app/models/tissueDetail';
import { TissueService } from 'src/app/services/tissue.service';

@Component({
  selector: 'app-tissue',
  templateUrl: './tissue.component.html',
  styleUrls: ['./tissue.component.css'],
})
export class TissueComponent implements OnInit {
  tissues: Tissue[];
  tissuesDetail: TissueDetail[];
  dataLoaded = false;

  constructor(
    private tissueService: TissueService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['sortId']) {
        this.getTissuesBySort(params['sortId']);
      } else {
        this.getTissues();
      }
    });
  }

  getTissues() {
    this.tissueService.getTissuesDetail().subscribe((response) => {
      this.tissuesDetail = response.data;
      this.dataLoaded = true;
    });
  }

  getTissuesBySort(sortId: number) {
    this.tissueService.getTissuesBySort(sortId).subscribe((response) => {
      this.tissuesDetail = response.data;
      this.dataLoaded = true;
    });
  }
}
