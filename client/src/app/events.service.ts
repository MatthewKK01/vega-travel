import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  constructor(private http: HttpClient) { }

  getEvents() {
    return this.http.get<any>("http://localhost:8080/api/events")
  }
  getSpecialEvents() {
    return this.http.get<any>("http://localhost:8080/api/special")
  }
}
