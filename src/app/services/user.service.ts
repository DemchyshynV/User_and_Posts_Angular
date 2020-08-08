import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUser} from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  URL = 'http://localhost:5000';

  constructor(private httpClient: HttpClient) {
  }

  getUsers(): Observable<{ user: Partial<IUser>[] }> {
    return this.httpClient.get<{ user: Partial<IUser>[] }>(`${this.URL}/users`);
  }
}
