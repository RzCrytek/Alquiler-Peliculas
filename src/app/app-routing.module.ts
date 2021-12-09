import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebModule } from './views/web/web.module';

const routes: Routes = [
  // { path: '', redirectTo: 'oauth', pathMatch: 'full' },
  {
    path: 'oauth',
    loadChildren: () =>
      import('./views/oauth/oauth.module').then((m) => m.OauthModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./views/web/web.module').then((m) => m.WebModule),
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
