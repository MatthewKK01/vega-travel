import { Component } from '@angular/core';
import { EventsService } from '../events.service';
import { FormControl } from '@angular/forms';






@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
  events: any = []
  constructor(private _eventService: EventsService) { }
  ngOnInit() {
    this._eventService.getEvents().subscribe(
      {
        next: res => console.log(res),
        error: err => console.log(err)
      }
    )

  }
  checkInDate = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };
  checkOutDate = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };


}
