import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TissueDetail } from 'src/app/models/tissueDetail';
import { TissueImage } from 'src/app/models/tissueImage';
import { TissueService } from 'src/app/services/tissue.service';
import { TissueImageService } from 'src/app/services/tissueImage.service';

@Component({
  selector: 'app-tissueImage',
  templateUrl: './tissueImage.component.html',
  styleUrls: ['./tissueImage.component.css'],
})
export class TissueImageComponent implements OnInit {
  tissueImages: TissueImage[] = [];
  currentTissue: TissueDetail[];
  dataLoaded = false;

  constructor(
    private tissueImageService: TissueImageService,
    private tissueService: TissueService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getTissueImages(params['tissueId']);
      this.getTissue(params['tissueId']);
    });
  }

  getTissue(tissueId: number) {
    this.tissueService.getTissuesById(tissueId).subscribe((response) => {
      this.currentTissue = response.data;
    });
  }

  getTissueImages(tissueId: number) {
    this.tissueImageService.getTissueImages(tissueId).subscribe((response) => {
      this.tissueImages = response.data;
      this.dataLoaded = true;
    });
  }
}
