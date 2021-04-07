import { UserModel } from './userModel';

export interface UserUpdateModel extends UserModel {
  currentPassword: string;
  newPassword: string;
}
