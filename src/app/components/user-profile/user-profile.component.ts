import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { UserUpdateModel } from 'src/app/models/userUpdateModel';
import { UserModel } from 'src/app/models/userModel';
import { AuthService } from 'src/app/services/auth.service';
import { LoginModel } from 'src/app/models/loginModel';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  userUpdateForm: FormGroup;
  user: UserModel = { id: 0, email: '', name: '', surname: '' };
  userUpdate: UserUpdateModel = {
    id: 0,
    email: '',
    name: '',
    surname: '',
    currentPassword: '',
    newPassword: '',
  };

  constructor(
    private userService: UserService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.createUserUpdateForm();
    this.getUser(localStorage.getItem('userEmail'));
  }

  getUser(email: string | null) {
    this.userService.getUser(email).subscribe((response) => {
      this.user = response.data;
    });
  }

  createUserUpdateForm() {
    this.userUpdateForm = this.formBuilder.group({
      id: [this.user.id, Validators.required],
      name: [this.user.name, Validators.required],
      surname: [this.user.surname, Validators.required],
      email: [this.user.email, Validators.required],
      currentPassword: ['', Validators.required],
      newPassword: [''],
    });
  }

  verifyUser() {
    if (this.userUpdateForm.valid) {
      let verifyModel: LoginModel = {
        password: this.userUpdateForm.value.currentPassword,
        email: this.userUpdateForm.value.email,
      };
      this.authService.login(verifyModel).subscribe(
        (data) => {
          let token_expiration = new Date(data.data.expiration);
          localStorage.setItem('token', data.data.token);
          localStorage.setItem(
            'token_expiration',
            token_expiration.toLocaleString()
          );
          localStorage.setItem('userEmail', verifyModel.email);
          this.updateUser();
        },
        (errorResponse) => {
          this.toastrService.error(errorResponse.error);
        }
      );
    } else {
      this.toastrService.error('Infos invalid', 'ERROR');
    }
  }

  updateUser() {
    if (this.userUpdateForm.valid) {
      let userModel = Object.assign({}, this.userUpdateForm.value);
      this.userService.updateUser(userModel).subscribe(
        (data) => {
          this.toastrService.success(data.message, 'SUCCESS');
          this.refreshPage();
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

  refreshPage() {
    window.location.reload();
  }
}
