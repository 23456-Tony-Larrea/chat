import { Injectable } from '@angular/core';
import { token } from '../auth/token';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FeedService {
  privateApiUrl='http://localhost:3000/api/feed'
  constructor(private http: HttpClient) { }
  getFeed(): Observable<any> {
    return this.http.get(this.privateApiUrl, {
      headers: {
        Authorization: `Bearer${token}`
      }
    });
  }
}
