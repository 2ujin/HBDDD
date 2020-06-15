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
import { HbdComponent } from './pages/hbd/hbd.component';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    GiftComponent,
    LetterComponent,
    CameraComponent,
    MainImgComponent,
    HbdComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    WebcamModule,
    NgxAudioPlayerModule,
    MatDialogModule
  ],
  exports: [
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
