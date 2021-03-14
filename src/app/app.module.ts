import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TissueComponent } from './components/tissue/tissue.component';
import { SortComponent } from './components/sort/sort.component';
import { NaviComponent } from './components/navi/navi.component';
import { HttpClientModule } from '@angular/common/http';
import { TissueImageComponent } from './components/tissueImage/tissueImage.component';

@NgModule({
  declarations: [
    AppComponent,
    TissueComponent,
    SortComponent,
    NaviComponent,
    TissueImageComponent
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
