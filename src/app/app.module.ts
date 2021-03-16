import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TissueComponent } from './components/tissue/tissue.component';
import { SortComponent } from './components/sort/sort.component';
import { NaviComponent } from './components/navi/navi.component';
import { HttpClientModule } from '@angular/common/http';
import { TissueImageComponent } from './components/tissueImage/tissueImage.component';
import { RegionComponent } from './components/region/region.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TissueComponent,
    SortComponent,
    NaviComponent,
    TissueImageComponent,
    RegionComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
