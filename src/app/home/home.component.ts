import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images: any[] = [
    'download (1).jpg',
    'download (2).jpg',
    'download (3).jpg',
    ]

    prevImageClick(){
      

    }

    nextImageClick(){

    }

  constructor() { }

  ngOnInit(): void {
  }

}
