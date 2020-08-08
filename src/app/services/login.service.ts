import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IUser} from '../interfaces/user.interface';
import {Observable} from 'rxjs';
import {IToken} from '../interfaces/token.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  URL = 'http://localhost:5000/auth';

  constructor(private httpClient: HttpClient) {
  }

  auth(user: Partial<IUser>): Observable<IToken> {
    return this.httpClient.post<IToken>(`${this.URL}`, {username: user.email, password: user.password});
  }
}
