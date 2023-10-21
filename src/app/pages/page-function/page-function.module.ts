import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageFunctionComponent } from './page-function.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PageFunctionComponent,
  },
];

@NgModule({
  declarations: [
    PageFunctionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PageFunctionModule { }
