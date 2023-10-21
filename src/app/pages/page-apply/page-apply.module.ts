import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageApplyComponent } from './page-apply.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PageApplyComponent,
  },
]

@NgModule({
  declarations: [
    PageApplyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PageApplyModule { }
