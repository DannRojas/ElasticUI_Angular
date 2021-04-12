// ANGULAR
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// COMPONENTS
import {LayoutComponent} from './core/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '', redirectTo: 'prueba', pathMatch: 'full'
      },
      {
        path: 'prueba',
        loadChildren: () => import('./pages/prueba/prueba.module').then(m => m.PruebaModule)
      },
      // {
      //   path: 'character-details/:id',
      //   loadChildren: () => import('./pages/character-details/character-details.module').then(m => m.CharacterDetailsModule)
      // },
      // {
      //   path: 'episode-details/:id',
      //   loadChildren: () => import('./pages/episode-details/episode-details.module').then(m => m.EpisodeDetailsModule)
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
