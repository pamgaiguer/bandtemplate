import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { NewsComponent } from './news/news.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { DiscographyComponent } from './discography/discography.component';
import { AboutComponent } from './about/about.component';
import { TourComponent } from './tour/tour.component';
import { StoreComponent } from './store/store.component';
import { MediaComponent } from './media/media.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        RouterModule,
    ],
    declarations: [
        HomeComponent,
        SignupComponent,
        ProfileComponent,
        NewsComponent,
        NewsDetailsComponent,
        DiscographyComponent,
        AboutComponent,
        TourComponent,
        StoreComponent,
        MediaComponent,
        ContactComponent
    ]
})
export class PagesModule { }
