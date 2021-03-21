import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  filterText = '';

  constructor(
    private tissueService: TissueService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (
        params['sortId'] &&
        params['regionId'] &&
        params['sortId'] != 0 &&
        params['regionId'] != 0
      ) {
        this.getTissuesBySort_Region(params['sortId'], params['regionId']);
      } else if (params['sortId'] && params['sortId'] != 0) {
        this.getTissuesBySort(params['sortId']);
      } else if (params['regionId'] && params['regionId'] != 0) {
        this.getTissuesByRegion(params['regionId']);
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

  getTissuesByRegion(regionId: number) {
    this.tissueService.getTissuesByRegion(regionId).subscribe((response) => {
      this.tissuesDetail = response.data;
      this.dataLoaded = true;
    });
  }

  getTissuesBySort_Region(sortId: number, regionId: number) {
    this.tissueService
      .getTissuesBySort_Region(sortId, regionId)
      .subscribe((response) => {
        this.tissuesDetail = response.data;
        this.dataLoaded = true;
      });
  }

  alert(tissueDetail: TissueDetail) {
    this.toastrService.success('Details shown...', tissueDetail.name);
  }
}
