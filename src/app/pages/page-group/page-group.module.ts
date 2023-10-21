import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageGroupComponent } from './page-group.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PageGroupComponent,
  },
];


@NgModule({
  declarations: [
    PageGroupComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PageGroupModule { }
