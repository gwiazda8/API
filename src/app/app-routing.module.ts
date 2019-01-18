import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SongsComponent } from './songs/songs.component';
import { EbooksComponent } from './ebooks/ebooks.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'songs', component: SongsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'ebooks', component: EbooksComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
