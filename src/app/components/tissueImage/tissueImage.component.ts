import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TissueImage } from 'src/app/models/tissueImage';
import { TissueImageService } from 'src/app/services/tissueImage.service';

@Component({
  selector: 'app-tissueImage',
  templateUrl: './tissueImage.component.html',
  styleUrls: ['./tissueImage.component.css'],
})
export class TissueImageComponent implements OnInit {
  tissueImages: TissueImage[] = [];
  dataLoaded = false;
  constructor(
    private tissueImageService: TissueImageService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getTissueImages(params['tissueId']);
    });
  }

  getTissueImages(tissueId: number) {
    this.tissueImageService.getTissueImages(tissueId).subscribe((response) => {
      this.tissueImages = response.data;
      this.dataLoaded = true;
    });
  }
}
