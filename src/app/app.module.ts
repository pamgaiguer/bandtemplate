import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

// import { registerLocaleData } from '@angular/common';
// import localePt from '@angular/common/locales/pt';
// import localeEn from '@angular/common/locales/En';

import { DotdotdotPipe } from './pipes/dotdotdot.pipe';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

// internationalization
// registerLocaleData(localePt);
// registerLocaleData(localeEn);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DotdotdotPipe,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    ComponentsModule,
    PagesModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  exports: [DotdotdotPipe],
  providers: [DotdotdotPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
