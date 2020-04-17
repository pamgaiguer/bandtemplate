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


const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'components',             component: ComponentsComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent },
    { path: 'home',          component: HomeComponent },
    { path: 'news',          component: NewsComponent },
    { path: 'news/:newsId',          component: NewsDetailsComponent },
    { path: 'discography',          component: DiscographyComponent },

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
