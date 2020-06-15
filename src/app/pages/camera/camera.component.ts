
import { Component, OnInit } from '@angular/core';
import {Subject, Observable} from "rxjs";
// import {} from "rxjs/Oervable";
import {WebcamImage} from 'ngx-webcam';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent  {
  public seconds:number ;
   private trigger: Subject<void> = new Subject<void>();

  // latest snapshot
  public webcamImage: WebcamImage = null;

  public triggerSnapshot(): void {
    this.seconds = 3;
    setTimeout(()=>{
      this.seconds = 2;
     setTimeout(()=>{
       this.seconds = 1
       setTimeout(()=>{
         this.trigger.next(); 
         this.seconds = null;
       },1000)
     },1000) 
    },1000)
       
  }

  public handleImage(webcamImage: WebcamImage): void {
    console.info("received webcam image", webcamImage);
    this.webcamImage = webcamImage;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }


}
