import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './components/base/base.component';
import { TissuesComponent } from './components/tissues/tissues.component';
import { TissueImageComponent } from './components/tissueImage/tissueImage.component';
import { TissueAddComponent } from './components/tissue-add/tissue-add.component';
import { TissueImageAddComponent } from './components/tissue-image-add/tissue-image-add.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginGuard } from './guards/login.guard';
import { TissueUpdateComponent } from './components/tissue-update/tissue-update.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { PaymentComponent } from './components/payment/payment.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: BaseComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'profile',
    component: UserProfileComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'payment',
    component: PaymentComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'tissues',
    component: TissuesComponent,
  },
  {
    path: 'tissues/sort/:sortId',
    component: TissuesComponent,
  },
  {
    path: 'tissues/region/:regionId',
    component: TissuesComponent,
  },
  {
    path: 'tissues/sort_region/:sortId/:regionId',
    component: TissuesComponent,
  },
  {
    path: 'tissues/:tissueId',
    component: TissueImageComponent,
  },
  {
    path: 'tissueAdd',
    component: TissueAddComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'tissueUpdate',
    component: TissueUpdateComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'tissueImageAdd',
    component: TissueImageAddComponent,
    canActivate: [LoginGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
