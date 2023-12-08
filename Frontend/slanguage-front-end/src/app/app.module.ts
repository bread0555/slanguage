import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageService } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LessonPageComponent } from './lesson-page/lesson-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HomePageComponent,
    LessonPageComponent,
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    RouterModule.forRoot([
      { path: "login", component: LandingPageComponent },
      { path: "home", component: HomePageComponent },
      { path: "lesson", component: LessonPageComponent }
    ]),
    ButtonModule,
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule,
    MessagesModule,
    ToastModule,
    MessagesModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
