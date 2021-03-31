import { Component, Input, OnInit } from '@angular/core';
import { TissueImage } from 'src/app/models/tissueImage';
import { TissueImageService } from 'src/app/services/tissueImage.service';

@Component({
  selector: 'app-tissue-thumbnail',
  templateUrl: './tissue-thumbnail.component.html',
  styleUrls: ['./tissue-thumbnail.component.css'],
})
export class TissueThumbnailComponent implements OnInit {
  @Input()
  tissueId: number;

  tissueImage: TissueImage;

  constructor(private tissueImageService: TissueImageService) {}

  ngOnInit(): void {
    this.getTissueImages(this.tissueId);
  }
  getTissueImages(tissueId: number) {
    this.tissueImageService.getTissueImages(tissueId).subscribe((response) => {
      this.tissueImage = response.data[0];
    });
  }
}
