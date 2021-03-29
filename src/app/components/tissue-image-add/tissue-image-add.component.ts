import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TissueDetail } from 'src/app/models/tissueDetail';
import { TissueService } from 'src/app/services/tissue.service';
import { TissueImageService } from 'src/app/services/tissueImage.service';

@Component({
  selector: 'app-tissue-image-add',
  templateUrl: './tissue-image-add.component.html',
  styleUrls: ['./tissue-image-add.component.css'],
})
export class TissueImageAddComponent implements OnInit {
  tissueImageAddForm: FormGroup;
  file: any;
  tissues: TissueDetail[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private tissueImageService: TissueImageService,
    private toastrService: ToastrService,
    private tissueService: TissueService
  ) {}

  ngOnInit(): void {
    this.createTissueImageAddForm();
    this.getTissues();
  }

  getTissues() {
    this.tissueService.getTissuesDetail().subscribe((data) => {
      this.tissues = data.data;
    });
  }

  createTissueImageAddForm() {
    this.tissueImageAddForm = this.formBuilder.group({
      tissueId: ['', Validators.required],
      image: ['', Validators.required],
    });
  }

  setFile(event: any) {
    this.file = null;
    if (event.target.files && event.target.files.length > 0) {
      this.file = event.target.files[0];
    } else {
      this.toastrService.error('You have to select an image !');
    }
  }

  add() {
    if (this.tissueImageAddForm.valid) {
      let tissueImageModel = Object.assign({}, this.tissueImageAddForm.value);
      const formData: FormData = new FormData();
      formData.append('formFile', this.file);
      formData.append('tissueId', tissueImageModel.tissueId.toString());
      this.tissueImageService.postTissueImages(formData).subscribe(
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
