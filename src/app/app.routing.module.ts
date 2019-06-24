import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MessagesComponent } from './modules/back/messages/messages.component';
import { HomeComponent } from './modules/home/home.page';

const appRoutes: Routes = [
  {
    path: 'team-presentation',
    loadChildren: () =>
      import('./modules/team-presentation/team-presentation.module').then(
        m => m.TeamPresentationModule
      )
  },
  { path: 'back-office', component: MessagesComponent },
  {
    path: 'courses',
    loadChildren: () => import('./modules/courses/courses.module').then(m => m.CoursesModule)
  },
  {
    path: 'interpretings',
    loadChildren: () =>
      import('./modules/interpreting/interpreting.module').then(m => m.InterpretingModule)
  },
  {
    path: 'prices',
    loadChildren: () => import('./modules/prices/prices.module').then(m => m.PricesModule)
  },
  {
    path: 'legal-notice',
    loadChildren: () =>
      import('./modules/legal-notice/legal-notice.module').then(m => m.LegalNoticeModule)
  },
  { path: '', component: HomeComponent, pathMatch: 'full' }
  /* 	{ path: 'contact', component: ContactComponent } */
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules, useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
