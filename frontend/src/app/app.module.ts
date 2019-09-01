import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from './../environments/environment';

import { ThemeModule } from './@theme/theme.module';
import { CoreModule } from './@core/core.module';
import { AuthModule } from './@auth/auth.module';
import { PagesModule } from './pages/pages.module';

import { LoaderService } from './_services/loader.service';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';

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
        CoreModule,
        AuthModule,
        PagesModule
    ],
    providers: [
      LoaderService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
