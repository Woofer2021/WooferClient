import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { LoggedUserService } from './logged-user.service';
import { User } from './user';

interface IUser {
  username: string;
  password: string;
}

/**
 * Provider for logging in a User
 */
@Injectable({
  providedIn: 'root',
})
export class LoginService {

  private urlLogin: string;
/**
   *
   * @param loggedUser The Service that will save the logged in user's info
   */
  constructor(private http: HttpClient, private loggedUser: LoggedUserService) {
    this.urlLogin = 'http://localhost:9000/user/login';
  }

  /**
   * Attempts to verify the user's credentials and, if successful, log them in
   * @param username The username that was entered to be checked by the backend
   * @param password The password that was entered to be checked by the backend
   * @returns The logged in users info
   */
   public login(user: IUser): Observable<User> {
    return this.http.post<User>(this.urlLogin, user);
  }
}

