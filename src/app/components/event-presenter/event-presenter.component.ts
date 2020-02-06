import { Component, OnInit, Input } from "@angular/core";
import { EventsService } from "@services/events.service";
import { TicketEvent } from "@classes/ticket-event";

@Component({
  selector: "app-event-presenter",
  template: `
    <div class="event-presenter">
      <app-flipcard
        *ngFor="let e of events"
        [title]="e.name"
        [description]="e.buyerDescription"
        [linklabel]="'Buy Tickets'"
        [linkurl]="'/event/' + e.id"
      ></app-flipcard>
    </div>
  `,
  styleUrls: ["./event-presenter.component.css"]
})
export class EventPresenterComponent implements OnInit {
  events: TicketEvent[];
  es: EventsService;
  constructor(es: EventsService) {
    this.es = es;
  }
  ngOnInit() {
    // console.log("> event-presenter.ngOnInit()");
    this.es.$events.subscribe(events => {
      this.events = events;
      console.log("...updated events");
      console.log(this.events);
    });
  }
}
