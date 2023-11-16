import { Component } from '@angular/core';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.scss']
})
export class SpecialEventsComponent {
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
