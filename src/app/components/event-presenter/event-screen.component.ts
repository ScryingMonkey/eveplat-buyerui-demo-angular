import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { TicketEvent } from "@classes/ticket-event";
import { EventsService } from "@services/events.service";

@Component({
  selector: "app-event-screen",
  template: `
    <div class="app-event-screen">
      <header>
        {{ event.name }}
      </header>

      <app-event-detail [event]="event"></app-event-detail>

      <div class="cta-section">
        <button mat-raised-button color="primary" (click)="buyNow(event)">
          Buy Now
        </button>
      </div>

      <footer></footer>
    </div>
  `,
  styleUrls: ["./event-presenter.component.css"]
})
export class EventScreenComponent implements OnInit {
  event: TicketEvent;
  activatedRoute: ActivatedRoute;
  es: EventsService;
  router: Router;

  constructor(
    activatedRoute: ActivatedRoute,
    es: EventsService,
    router: Router
  ) {
    this.activatedRoute = activatedRoute;
    this.es = es;
    this.router = router;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.event = this.es.getEvent(params.eventId);
    });
  }
  buyNow(event: TicketEvent) {
    console.log(event);
    alert("TODO: Add selected event to cart.");
    this.router.navigateByUrl("/cart");
  }
}
