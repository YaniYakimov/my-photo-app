import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getPhotos(): Observable<string[]> {
    const url = `${this.apiUrl}/home`;
    return this.http.get<string[]>(url);
  }

  startOAuthFlow(): void {
    const oauthUrl = `${this.apiUrl}/home`;
    const width = 600;
    const height = 600;
    const left = (window.screen.width / 2) - (width / 2);
    const top = (window.screen.height / 2) - (height / 2);
    
    window.open(oauthUrl, 'Dropbox OAuth', `width=${width},height=${height},top=${top},left=${left}`);
  }
}