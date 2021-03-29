import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/userModel';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  user: UserModel = { email: '', name: '', surname: '' };

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUser(localStorage.getItem('userEmail'));
  }

  getUser(email: string | null) {
    this.userService.getUser(email).subscribe((response) => {
      this.user = response.data;
    });
  }
}
