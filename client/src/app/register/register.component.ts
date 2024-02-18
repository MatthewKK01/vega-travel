import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registeredUserData: any = {}
  errorText: string = "";

  constructor(private _auth: AuthService, private router: Router) { }
  registerUser() {

    this._auth.registerUser(this.registeredUserData)
      .subscribe(
        {
          next: response => {
            console.log(response)
            localStorage.setItem('token', response.token)
            this.router.navigate(['/special'])
          },
          error: error => {
            console.log(error)
            this.errorText = error.error
          }
        }
      )
  }
}
