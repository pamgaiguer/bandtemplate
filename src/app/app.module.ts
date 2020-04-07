import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import localeEn from '@angular/common/locales/En';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { BasicelementsComponent } from './components/basicelements/basicelements.component';
import { NgbdModalComponent } from './components/modal/modal.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NotificationComponent} from './components/notification/notification.component';
import { NucleoiconsComponent} from './components/nucleoicons/nucleoicons.component';
import { TypographyComponent} from './components/typography/typography.component';


import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

// internationalization
registerLocaleData(localePt);
registerLocaleData(localeEn);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BasicelementsComponent,
    NgbdModalComponent,
    NavigationComponent,
    NotificationComponent,
    NucleoiconsComponent,
    TypographyComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
