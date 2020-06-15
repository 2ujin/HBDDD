import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gift',
  templateUrl: './gift.component.html',
  styleUrls: ['./gift.component.css']
})
export class GiftComponent implements OnInit {

  constructor() { }

  modal: boolean = false

  ngOnInit(): void {
  }

  img_click(num){
    this.modal = true;
    console.log(num)
  }
}
