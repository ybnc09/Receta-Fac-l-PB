import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'plato-entrada', loadChildren: './plato-entrada/plato-entrada.module#PlatoEntradaPageModule' },
  { path: 'plato-principal', loadChildren: './plato-principal/plato-principal.module#PlatoPrincipalPageModule' },
  { path: 'postre', loadChildren: './postre/postre.module#PostrePageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
