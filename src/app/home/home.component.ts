import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/PhotoService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  photos: string[] = [];

  constructor(private photoService:PhotoService ) {}

  // ngOnInit(): void {
  //   this.photoService.getPhotos().subscribe((data: string[]) => {
  //     this.photos = data;
  //   })
  // }
  ngOnInit(): void {
    this.startOAuthFlow();
  }

  startOAuthFlow(): void {
    this.photoService.startOAuthFlow();
  }

  loadPhotos(): void {
    this.photoService.getPhotos().subscribe(
      {
        next: (photoURL) => {
          this.photos = photoURL.map(photoURL => photoURL.replace('dl=0', 'dl=1'));
          console.log('Photos loaded:', this.photos);
        },
        error: (error) => {
          console.error('Error fetching photos', error);
        }
      }
    );
  }

 }
