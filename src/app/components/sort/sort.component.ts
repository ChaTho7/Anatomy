import { Component, OnInit } from '@angular/core';
import { TissueService } from 'src/app/services/tissue.service';
import { TissueImage } from 'src/app/models/tissueImage';
import { ComminicateService } from 'src/app/services/comminicate/comminicate.service';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css'],
})
export class SortComponent implements OnInit {
  tissueImages: TissueImage[] = [];
  dataLoaded = false;
  data: any;
  private comService = ComminicateService;
  constructor(private tissueService: TissueService) {}

  ngOnInit(): void {
    this.getTissueImages();
  }

  getTissueImages() {
    this.tissueService.getTissueImages().subscribe((response) => {
      console.log(response);
      this.tissueImages = response.data;
      this.dataLoaded = true;
    });
  }

  fileContent: any = '';

  openFile(event: any) {
    let input = event.target;
    for (var index = 0; index < input.files.length; index++) {
      let reader = new FileReader();
      reader.onload = () => {
        // this 'text' is the content of the file
        this.fileContent = reader.result;
      };
      reader.readAsText(input.files[index]);
    }
  }

  getInput() {
    this.data = this.comService.getterMethod();
  }
}
