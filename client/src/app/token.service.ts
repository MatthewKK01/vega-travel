import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from 'next/dist/server/router';
@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private router: Router) { }
  loggedIn() {
    return !!localStorage.getItem('token')
  }
  getToken() {
    return localStorage.getItem('token')
  }
  logOut() {
    localStorage.removeItem("token");
    this.router.navigate(['/events'])
  }
}
