import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }
  loggedIn() {
    return !!localStorage.getItem('token')
  }
  getToken() {
    return localStorage.getItem('token')
  }
}
