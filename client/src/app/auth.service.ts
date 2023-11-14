import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _registerURL = "http://localhost:8080/api/register"
  constructor(private http: HttpClient) { }

  registerUser(user: any) {
    return this.http.post<any>(this._registerURL, user);
  }
}
