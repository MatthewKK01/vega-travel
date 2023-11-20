import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginUserData: any = {}
  constructor(private _auth: AuthService, private router: Router) { }
  loginUser() {
    this._auth.loginUser(this.loginUserData).subscribe(
      {
        next: (res) => {
          console.log(res)
          localStorage.setItem('token', res.token)
          this.router.navigate(['/special'])

        },
        error: err => console.log(err)
      }
    )
  }
}
