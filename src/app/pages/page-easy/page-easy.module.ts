import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageEasyComponent } from './page-easy.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PageEasyComponent,
  },
];

@NgModule({
  declarations: [
    PageEasyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PageEasyModule { }
