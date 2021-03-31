import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TissueComponent } from './components/tissue/tissue.component';
import { SortComponent } from './components/sort/sort.component';
import { NaviComponent } from './components/navi/navi.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TissueImageComponent } from './components/tissueImage/tissueImage.component';
import { RegionComponent } from './components/region/region.component';
import { LoginComponent } from './components/login/login.component';
import { FilterPipePipe } from './pipes/tissue-filter-pipe.pipe';

import { ToastrModule } from 'ngx-toastr';
import { SortFilterPipePipe } from './pipes/sort-filter-pipe.pipe';
import { RegionFilterPipePipe } from './pipes/region-filter-pipe.pipe';
import { BaseComponent } from './components/base/base.component';
import { TissuesComponent } from './components/tissues/tissues.component';
import { TissueAddComponent } from './components/tissue-add/tissue-add.component';
import { TissueImageAddComponent } from './components/tissue-image-add/tissue-image-add.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { TissueUpdateComponent } from './components/tissue-update/tissue-update.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { PaymentComponent } from './components/payment/payment.component';
import { TissueThumbnailComponent } from './components/tissue-thumbnail/tissue-thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    TissueComponent,
    SortComponent,
    NaviComponent,
    TissueImageComponent,
    RegionComponent,
    LoginComponent,
    FilterPipePipe,
    SortFilterPipePipe,
    RegionFilterPipePipe,
    BaseComponent,
    TissuesComponent,
    TissueAddComponent,
    TissueImageAddComponent,
    RegisterComponent,
    TissueUpdateComponent,
    UserProfileComponent,
    PaymentComponent,
    TissueThumbnailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
