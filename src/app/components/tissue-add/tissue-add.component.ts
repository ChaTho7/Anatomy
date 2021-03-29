import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Region } from 'src/app/models/region';
import { Sort } from 'src/app/models/sort';
import { RegionService } from 'src/app/services/region.service';
import { SortService } from 'src/app/services/sort.service';
import { TissueService } from 'src/app/services/tissue.service';

@Component({
  selector: 'app-tissue-add',
  templateUrl: './tissue-add.component.html',
  styleUrls: ['./tissue-add.component.css'],
})
export class TissueAddComponent implements OnInit {
  tissueAddForm: FormGroup;
  sorts: Sort[] = [];
  regions: Region[] = [];
  emptyString: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private tissueService: TissueService,
    private toastrService: ToastrService,
    private sortService: SortService,
    private regionService: RegionService
  ) {}

  ngOnInit(): void {
    this.createTissueAddForm();
    this.getSorts();
    this.getRegions();
  }

  getSorts() {
    this.sortService.getSorts().subscribe((data) => {
      this.sorts = data.data;
    });
  }

  getRegions() {
    this.regionService.getRegions().subscribe((data) => {
      this.regions = data.data;
    });
  }

  createTissueAddForm() {
    this.tissueAddForm = this.formBuilder.group({
      sortId: ['', Validators.required],
      regionId: ['', Validators.required],
      name: ['', Validators.required],
      gender: [''],
    });
  }

  add() {
    if (this.tissueAddForm.valid) {
      let tissueModel = Object.assign({}, this.tissueAddForm.value);
      this.tissueService.postTissue(tissueModel).subscribe(
        (data) => {
          this.toastrService.success(data.message, 'SUCCESS');
        },
        (dataError) => {
          if (dataError.error.Errors.length > 0) {
            for (let i = 0; i < dataError.error.Errors.length; i++) {
              this.toastrService.error(
                dataError.error.Errors[i].ErrorMessage,
                'Validation Failed'
              );
            }
          }
        }
      );
    } else {
      this.toastrService.error('Infos invalid', 'ERROR');
    }
  }
}
