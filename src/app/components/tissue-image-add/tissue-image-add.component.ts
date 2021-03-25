import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TissueImageService } from 'src/app/services/tissueImage.service';

@Component({
  selector: 'app-tissue-image-add',
  templateUrl: './tissue-image-add.component.html',
  styleUrls: ['./tissue-image-add.component.css'],
})
export class TissueImageAddComponent implements OnInit {
  tissueImageAddForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private tissueImageService: TissueImageService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createTissueImageAddForm();
  }

  createTissueImageAddForm() {
    this.tissueImageAddForm = this.formBuilder.group({
      tissueId: ['', Validators.required],
      image: ['', Validators.required],
    });
  }

  add() {
    if (this.tissueImageAddForm.valid) {
      let tissueImageModel = Object.assign({}, this.tissueImageAddForm.value);
      this.tissueImageService.postTissueImages(tissueImageModel).subscribe(
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
