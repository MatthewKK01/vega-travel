import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _registerURL = "http://localhost:8080/api/register"
  private _loginURL = "http://localhost:8080/api/login"
  constructor(private http: HttpClient) { }

  registerUser(user: any) {
    return this.http.post<any>(this._registerURL, user);
  }
  loginUser(user: any) {
    return this.http.post<any>(this._loginURL, user)
  }
}
