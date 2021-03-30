import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Region } from 'src/app/models/region';
import { ComminicateService } from 'src/app/services/comminicate/comminicate.service';
import { RegionService } from 'src/app/services/region.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css'],
})
export class RegionComponent implements OnInit {
  dataLoaded = false;
  regions: Region[] = [];
  filterText = '';
  private comService = ComminicateService;

  constructor(private regionService: RegionService, private router: Router) {}

  ngOnInit(): void {
    this.getRegions();
  }

  getRegions() {
    this.regionService.getRegions().subscribe((response) => {
      this.regions = response.data;
      this.dataLoaded = true;
    });
  }

  setCurrentRegion(region: Region) {
    this.comService.regionId = region.id;
    this.comService.filterRouter(this.router);
  }

  getCurrentRegion(region: Region) {
    if (region.id == this.comService.regionId) {
      return 'w-100 btn btn-dark white-theme';
    } else {
      return 'w-100 btn btn-dark dark-theme';
    }
  }

  checkCurrentRegion() {
    if (!this.comService.regionId || this.comService.regionId == 0) {
      return 'w-100 btn btn-dark white-theme';
    } else {
      return 'w-100 btn btn-dark dark-theme';
    }
  }

  clearCurrentRegion() {
    this.comService.regionId = 0;
    this.comService.filterRouter(this.router);
  }
}
