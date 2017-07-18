import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OverView } from './overview/overview.component';
import { GeneralSettingsComponent } from './settings/general-settings/general-settings.component';
import { SettingsComponent } from './settings/settings.component';
import { NotificationComponent } from './notification/notification.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MemberComponent } from './search/member/member.component';
import { WallpaperComponent } from './search/wallpaper/wallpaper.component';
import { MainWallpaperComponent } from './wallpaper/wallpaper.component';
import { CommunityComponent } from './community/community.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OverView,
    GeneralSettingsComponent,
    SettingsComponent,
    NotificationComponent,
    GalleryComponent,
    MemberComponent,
    WallpaperComponent,
    MainWallpaperComponent,
    CommunityComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
