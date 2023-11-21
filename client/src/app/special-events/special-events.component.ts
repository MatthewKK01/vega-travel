import { Component } from '@angular/core';
import { EventsService } from '../events.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.scss']
})
export class SpecialEventsComponent {

  events: any = []
  constructor(private _eventService: EventsService, private router: Router) { }
  ngOnInit() {
    this._eventService.getSpecialEvents().subscribe(
      {
        next: res => console.log(res),
        error: err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status == 401) {
              this.router.navigate(['/login'])
            }
          }
        }
      }
    )
  }
}
