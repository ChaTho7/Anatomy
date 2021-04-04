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
import { TissueDetail } from 'src/app/models/tissueDetail';
import { RegionService } from 'src/app/services/region.service';
import { SortService } from 'src/app/services/sort.service';
import { TissueService } from 'src/app/services/tissue.service';

@Component({
  selector: 'app-tissue-update',
  templateUrl: './tissue-update.component.html',
  styleUrls: ['./tissue-update.component.css'],
})
export class TissueUpdateComponent implements OnInit {
  tissueUpdateForm: FormGroup;
  sorts: Sort[] = [];
  regions: Region[] = [];
  tissues: TissueDetail[] = [];
  emptyString: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private tissueService: TissueService,
    private toastrService: ToastrService,
    private sortService: SortService,
    private regionService: RegionService
  ) {}

  ngOnInit(): void {
    this.createTissueUpdateForm();
    this.getSorts();
    this.getRegions();
    this.getTissues();
  }

  getTissues() {
    this.tissueService.getTissuesDetail().subscribe((data) => {
      this.tissues = data.data;
    });
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

  createTissueUpdateForm() {
    this.tissueUpdateForm = this.formBuilder.group({
      id: ['', Validators.required],
      sortId: ['', Validators.required],
      regionId: ['', Validators.required],
      name: ['', Validators.required],
      gender: [''],
    });
  }

  update() {
    if (this.tissueUpdateForm.valid) {
      let tissueModel = Object.assign({}, this.tissueUpdateForm.value);
      this.tissueService.updateTissue(tissueModel).subscribe(
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
