import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { NewsDetailsComponent } from './pages/news-details/news-details.component';
import { DiscographyComponent } from './pages/discography/discography.component';
import { DiscographyDetailsComponent } from './pages/discography-details/discography-details.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MediaComponent } from './pages/media/media.component';
import { StoreComponent } from './pages/store/store.component';
import { TourComponent } from './pages/tour/tour.component';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'components',                           component: ComponentsComponent },
    { path: 'profile',                              component: ProfileComponent },
    { path: 'signup',                               component: SignupComponent },
    { path: 'nucleoicons',                          component: NucleoiconsComponent },
    { path: 'home',                                 component: HomeComponent },
    { path: 'news',                                 component: NewsComponent },
    { path: 'news/:newsId',                         component: NewsDetailsComponent },
    { path: 'discography',                          component: DiscographyComponent },
    { path: 'discography/:discographyId',         component: DiscographyDetailsComponent },
    { path: 'about',                                component: AboutComponent },
    { path: 'contact',          component: ContactComponent },
    { path: 'media',          component: MediaComponent },
    { path: 'store',          component: StoreComponent },
    { path: 'tour',          component: TourComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: false
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
