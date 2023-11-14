import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registeredUserData: any = {}

  constructor() { }
  registerUser() {
    console.log(this.registeredUserData);
  }
}
