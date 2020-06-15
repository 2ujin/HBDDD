import { Component, OnInit } from '@angular/core';
// import { Track } from './../../../assets/song.mp3';

@Component({
  selector: 'app-hbd',
  templateUrl: './hbd.component.html',
  styleUrls: ['./hbd.component.css']
})
export class HbdComponent implements OnInit {

  playlist = [
    {
      title: '이소민 생축',
      link: 'https://drive.google.com/u/0/uc?id=1xpxXlFhSLq9-bYoCcvQJH8WXW_kc9Md1&export=download'
    },
    {
      title: '하 힘들어',
      link: 'https://funksyou.com/fileDownload/Songs/128/13091.mp3'
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
