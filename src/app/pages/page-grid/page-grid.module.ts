import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageGridComponent } from './page-grid.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PageGridComponent,
  },
];

@NgModule({
  declarations: [
    PageGridComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PageGridModule { }
