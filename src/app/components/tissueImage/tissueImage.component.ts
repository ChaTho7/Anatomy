import { Component, OnInit } from '@angular/core';
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
  constructor(private tissueImageService: TissueImageService) {}

  ngOnInit(): void {
    this.getTissueImages();
  }

  getTissueImages() {
    this.tissueImageService.getTissueImages().subscribe((response) => {
      this.tissueImages = response.data;
      this.dataLoaded = true;
    });
  }
}
