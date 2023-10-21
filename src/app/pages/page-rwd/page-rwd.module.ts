import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageRwdComponent } from './page-rwd.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PageRwdComponent,
  },
];

@NgModule({
  declarations: [
    PageRwdComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PageRwdModule { }
