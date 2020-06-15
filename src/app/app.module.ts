import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app.router.module';
import { MainComponent } from './pages/main/main.component';
import { GiftComponent } from './pages/gift/gift.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatToolbarModule} from '@angular/material/toolbar';
import { LetterComponent } from './pages/letter/letter.component';
import { CameraComponent } from './pages/camera/camera.component';
import { WebcamModule } from 'ngx-webcam';
import { MainImgComponent } from './pages/main-img/main-img.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    GiftComponent,
    LetterComponent,
    CameraComponent,
    MainImgComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    WebcamModule
  ],
  exports: [
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
