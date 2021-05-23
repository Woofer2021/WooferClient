import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignupComponent } from './signup/signup.component';
import { FeedComponent } from './feed/feed.component';
import { PostComponent } from './post/post.component';
import { MainPageComponent } from './main-page/main-page.component';
<<<<<<< HEAD
import { HttpClient, HttpClientModule } from '@angular/common/http';
=======
import { PosterComponent } from './poster/poster.component';
import { FirstPageComponent } from './first-page/first-page.component';
>>>>>>> upstream/main

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    FeedComponent,
    PostComponent,
    MainPageComponent,
<<<<<<< HEAD
=======
    PosterComponent,
    FirstPageComponent,
>>>>>>> upstream/main
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    CommonModule,
<<<<<<< HEAD
    HttpClientModule,
=======
>>>>>>> upstream/main
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
