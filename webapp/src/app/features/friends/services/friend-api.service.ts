import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { Observable } from 'rxjs';
import { Friend } from '../models/friend';

@Injectable({
  providedIn: 'root',
})
export class FriendApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getFriends(search: string = '', page = 1): Observable<Friend[]> {
    return this.http.get<Friend[]>(`${this.apiUrl}/friends`, {
      params: { search, page: page - 1 },
    });
  }
}
