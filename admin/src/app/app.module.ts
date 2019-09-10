import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ThemeModule } from './@theme/theme.module';
import { AuthModule } from './@auth/auth.module';
import { PagesModule } from './pages/pages.module';

import { PendingChangesGuard } from './_guards/pending-changes.guard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        HttpClientModule,
        AppRoutingModule,
        ThemeModule,
        AuthModule,
        PagesModule
    ],
    providers: [PendingChangesGuard],
    bootstrap: [AppComponent]
})
export class AppModule { }
