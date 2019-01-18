// ng modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// my modules
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
// components
import { AppComponent } from './app.component';
import { SongsComponent } from './songs/songs.component';
import { EbooksComponent } from './ebooks/ebooks.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SongsComponent,
    EbooksComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // my modules:
    CoreModule,
    SharedModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
