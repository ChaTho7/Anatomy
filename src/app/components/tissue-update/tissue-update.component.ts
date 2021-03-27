import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TissueDetail } from 'src/app/models/tissueDetail';
import { ComminicateService } from 'src/app/services/comminicate/comminicate.service';
import { TissueService } from 'src/app/services/tissue.service';

@Component({
  selector: 'app-tissue-update',
  templateUrl: './tissue-update.component.html',
  styleUrls: ['./tissue-update.component.css'],
})
export class TissueUpdateComponent implements OnInit {
  tissueUpdateForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private tissueService: TissueService,
    private toastrService: ToastrService,
    private commService: ComminicateService
  ) {}

  ngOnInit(): void {
    this.createTissueUpdateForm();
  }

  createTissueUpdateForm() {
    this.tissueUpdateForm = this.formBuilder.group({
      id: ['', Validators.required],
      sortId: [0, Validators.required],
      regionId: [0, Validators.required],
      name: ['', Validators.required],
      gender: ['', Validators.required],
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
