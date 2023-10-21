import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /**首頁 */
  {
    path: '',
    loadChildren: () => import('./pages/page-home/page-home.module').then(m => m.PageHomeModule)
  },
  /**什麼是 Tailwind CSS ?  */
  {
    path: 'about',
    loadChildren: () => import('./pages/page-about/page-about.module').then(m => m.PageAboutModule)
  },
  /**Tailwind CSS 簡單示範  */
  {
    path: 'easy',
    loadChildren: () => import('./pages/page-easy/page-easy.module').then(m => m.PageEasyModule)
  },
  /**Tailwind CSS 實做 RWD */
  {
    path: 'rwd',
    loadChildren: () => import('./pages/page-rwd/page-rwd.module').then(m => m.PageRwdModule)
  },
  /**Tailwind CSS 格線系統 */
  {
    path: 'grid',
    loadChildren: () => import('./pages/page-grid/page-grid.module').then(m => m.PageGridModule)
  },
  /**使用 tailwind.config 高度客製化網頁 */
  {
    path: 'config',
    loadChildren: () => import('./pages/page-config/page-config.module').then(m => m.PageConfigModule)
  },
  /**用 apply 濃縮 css name */
  {
    path: 'apply',
    loadChildren: () => import('./pages/page-apply/page-apply.module').then(m => m.PageApplyModule)
  },
  /**內建常用 functions CSS */
  {
    path: 'function',
    loadChildren: () => import('./pages/page-function/page-function.module').then(m => m.PageFunctionModule)
  },
  /**group-{modifier} 創建互動性元素 */
  {
    path: 'group',
    loadChildren: () => import('./pages/page-group/page-group.module').then(m => m.PageGroupModule)
  },
  /**Tailwind Plugin 安裝套件 */
  {
    path: 'plugin',
    loadChildren: () => import('./pages/page-plugin/page-plugin.module').then(m => m.PagePluginModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
