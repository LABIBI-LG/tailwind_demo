import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageConfigComponent } from './page-config.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PageConfigComponent,
  },
]



@NgModule({
  declarations: [
    PageConfigComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PageConfigModule { }
