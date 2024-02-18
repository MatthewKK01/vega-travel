import { Component, OnInit } from '@angular/core';
import { TokenService } from './token.service';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Vega Travel';
  constructor(public tokenService: TokenService) { }
  ngOnInit(): void {
    initFlowbite();
  }
}
