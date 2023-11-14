import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registeredUserData: any = {}

  constructor(private _auth: AuthService) { }
  registerUser() {

    this._auth.registerUser(this.registeredUserData)
      .subscribe(
        {
          next: response => console.log(response),
          error: error => console.log(error)
        }
      )
  }
}
