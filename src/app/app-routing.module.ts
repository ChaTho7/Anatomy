import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TissueComponent } from './components/tissue/tissue.component';
import { TissueImageComponent } from './components/tissueImage/tissueImage.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: TissueComponent,
  },
  {
    path: 'tissues',
    component: TissueComponent,
  },
  {
    path: 'tissues/sort/:sortId',
    component: TissueComponent,
  },
  {
    path: 'tissues/region/:regionId',
    component: TissueComponent,
  },
  {
    path: 'tissues/:tissueId',
    component: TissueImageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
