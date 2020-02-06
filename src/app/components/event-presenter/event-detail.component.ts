import { Component, Input } from "@angular/core";
import { TicketEvent } from "@classes/ticket-event";
import { ActivatedRoute } from "@angular/router";
import { EventsService } from "@services/events.service";

@Component({
  selector: "app-event-detail",
  template: `
    <div class="app-event-detail">
      <p>{{ event.buyerDescription }}</p>
    </div>
  `,
  styleUrls: ["./event-presenter.component.css"]
})
export class EventDetailComponent {
  @Input() event: TicketEvent;
  constructor() {}
}
