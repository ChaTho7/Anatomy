import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './components/base/base.component';
import { TissuesComponent } from './components/tissues/tissues.component';
import { TissueImageComponent } from './components/tissueImage/tissueImage.component';
import { TissueAddComponent } from './components/tissue-add/tissue-add.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: BaseComponent,
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
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
