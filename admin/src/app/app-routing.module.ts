import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./@auth/auth.module').then(mod => mod.AuthModule) },
  { path: '', loadChildren: () => import('./pages/pages.module').then(mod => mod.PagesModule) }
];

const config: ExtraOptions = {
    useHash: false,
};

@NgModule({
    imports: [ RouterModule.forRoot(routes, config) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule { }
