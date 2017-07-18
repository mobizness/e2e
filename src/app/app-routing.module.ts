import { NgModule }              from '@angular/core';
import { RouterModule, Routes, Params }  from '@angular/router';

import { HomeComponent }   from './home/home.component';
import { OverView } from './overview/overview.component';
import { NotificationComponent } from './notification/notification.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MemberComponent } from './search/member/member.component';
import { WallpaperComponent } from './search/wallpaper/wallpaper.component';
import { MainWallpaperComponent } from './wallpaper/wallpaper.component';
import { CommunityComponent } from './community/community.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'overview', component: OverView },
  { path: 'notification', component: NotificationComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'search-member', component: MemberComponent },
  { path: 'search-wallpaper', component: WallpaperComponent },
  { path: 'gallery/wallpaper', component: MainWallpaperComponent },
  { path: 'cms', component: CommunityComponent },
  { path: 'contact', component: ContactComponent },
  
  { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
