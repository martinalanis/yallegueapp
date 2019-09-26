import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { InstitutoResolverService } from './resolver/instituto-resolver.service';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  // { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'welcome', loadChildren: './pages/welcome/welcome.module#WelcomePageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  {
    path: 'home/:instituto',
    resolve: {
      vendedores: InstitutoResolverService
    },
    loadChildren: './pages/home/home.module#HomePageModule'
  },
  { path: 'registro', loadChildren: './pages/registro/registro.module#RegistroPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
