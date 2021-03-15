import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ComminicateService {
  static sortId: number;
  static regionId: number;

  constructor() {}

  static filterRouter(router: Router) {
    let currentSortId: number = ComminicateService.sortId
      ? ComminicateService.sortId
      : 0;
    let currentRegionId: number = ComminicateService.regionId
      ? ComminicateService.regionId
      : 0;
    if (currentRegionId != 0 && currentSortId != 0) {
      router.navigate(['tissues/sort_region', currentSortId, currentRegionId]);
    } else if (currentRegionId == 0 && currentSortId != 0) {
      router.navigate(['tissues/sort', currentSortId]);
    } else if (currentRegionId != 0 && currentSortId == 0) {
      router.navigate(['tissues/region', currentRegionId]);
    } else {
      router.navigate(['tissues']);
    }
  }
}
