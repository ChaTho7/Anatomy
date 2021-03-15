import { Component, OnInit } from '@angular/core';
import { Region } from 'src/app/models/region';
import { RegionService } from 'src/app/services/region.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css'],
})
export class RegionComponent implements OnInit {
  dataLoaded = false;
  regions: Region[] = [];
  currentRegion: Region;
  constructor(private regionService: RegionService) {}

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
    this.currentRegion = region;
  }

  getCurrentRegion(region: Region) {
    if (region == this.currentRegion) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }

  checkCurrentRegion() {
    if (!this.currentRegion || this.currentRegion.id == 0) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }

  clearCurrentRegion() {
    this.currentRegion = { id: 0, name: '' };
  }
}
