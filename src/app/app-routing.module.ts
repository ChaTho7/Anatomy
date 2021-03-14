import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TissueComponent } from './components/tissue/tissue.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
