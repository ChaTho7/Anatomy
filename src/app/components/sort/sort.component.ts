import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css'],
})
export class SortComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    /* this.clickButton() */
  }

  fileContent: any = '';
  li: any;
  lis = [];

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

  clickButton() {
    this.http.get('https://localhost:44344/api/tissues/getall').subscribe((Response) => {
      /* if (Response) {
        this.hideLoader();
      } */
      console.log(Response);
      this.lis!=Response;
      /* this.li = Response; */
      /* this.lis = this.li.list; */
    });
  }

  hideLoader() {
    document.getElementById('loading')!.style.display = 'none';
  }
}
