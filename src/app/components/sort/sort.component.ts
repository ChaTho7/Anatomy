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
  data: any;
  sorts: Sort[] = [];
  currentSort: Sort;
  private comService = ComminicateService;

  constructor(private sortService: SortService, private router: Router) {}

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
    this.currentSort = sort;
    this.comService.sortId = sort.id;
    this.comService.filterRouter(this.router);
  }

  getCurrentSort(sort: Sort) {
    if (sort == this.currentSort) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }

  checkCurrentSort() {
    if (!this.currentSort || this.currentSort.id == 0) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }

  clearCurrentSort() {
    this.currentSort = { id: 0, name: '', origin: '' };
    this.comService.sortId = 0;
    this.comService.filterRouter(this.router);
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
}
