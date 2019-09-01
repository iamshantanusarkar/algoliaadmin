import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

import { NotFoundComponent } from './pages/miscellaneous/not-found/not-found.component';

import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '', loadChildren: () => import('./@auth/auth.module').then(m => m.AuthModule) },
    { path: '', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), canActivate: [AuthGuard] },
    // { path: '', redirectTo: 'pages', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent }
];

const config: ExtraOptions = {
    useHash: false,
};

@NgModule({
    imports: [ RouterModule.forRoot(routes, config) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule { }
