import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sort } from 'src/app/models/sort';
import { ComminicateService } from 'src/app/services/comminicate/comminicate.service';
import { SortService } from 'src/app/services/sort.service';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css'],
})
export class SortComponent implements OnInit {
  dataLoaded = false;
  sorts: Sort[] = [];
  filterText = '';
  private comService = ComminicateService;

  constructor(private sortService: SortService) {}

  ngOnInit(): void {
    this.getSorts();
  }

  getSorts() {
    this.sortService.getSorts().subscribe((response) => {
      this.sorts = response.data;
      this.dataLoaded = true;
    });
  }

  setCurrentSort(sort: Sort) {
    this.comService.sortId = sort.id;
  }

  getCurrentSort(sort: Sort) {
    if (sort.id == this.comService.sortId) {
      return 'w-100 btn btn-dark white-theme';
    } else {
      return 'w-100 btn btn-dark dark-theme';
    }
  }

  checkCurrentSort() {
    if (this.comService.sortId == 0 || !this.comService.sortId) {
      return 'w-100 btn btn-dark white-theme';
    } else {
      return 'w-100 btn btn-dark dark-theme';
    }
  }

  clearCurrentSort() {
    this.comService.sortId = 0;
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

  /*   element() {
    let elm = <number>(
      (<unknown>(<HTMLInputElement>document.getElementById('sort')).value)
    );
    this.setCurrentSort(elm);
  } */
}
