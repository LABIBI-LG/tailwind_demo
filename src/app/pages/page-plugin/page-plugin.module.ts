import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagePluginComponent } from './page-plugin.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PagePluginComponent,
  },
];

@NgModule({
  declarations: [
    PagePluginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PagePluginModule { }
