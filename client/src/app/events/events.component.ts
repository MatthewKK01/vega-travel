import { Component } from '@angular/core';
import { EventsService } from '../events.service';

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
}
