import { Injectable, OnInit } from "@angular/core";
import { Subject, BehaviorSubject } from "rxjs";
import { TicketEvent } from "@classes/ticket-event";
@Injectable({
  providedIn: "root"
})
export class EventsService {
  public $events: BehaviorSubject<TicketEvent[]>;

  constructor() {
    // console.log("> event-service.constructor()");
    const blah =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    const mock = [
      {
        name: "Test Event 1",
        id: "001",
        buyerDescription: `Dummy description for Test Event 2.  ${blah}`
      },
      {
        name: "Test Event 2",
        id: "002",
        buyerDescription: `Dummy description for Test Event 2.  ${blah}`
      },
      {
        name: "Test Event 3",
        id: "003",
        buyerDescription: `Dummy description for Test Event 2.  ${blah}`
      }
    ];
    const events = mock.map(m => {
      const te = new TicketEvent();
      te.setConfig(m);
      return te;
    });
    console.log("...created mock data in events service.");
    console.log(events);
    this.$events = new BehaviorSubject<TicketEvent[]>(events);
  }
  public getEvent(id: string): TicketEvent {
    console.log(`...es returning te with id === ${id}`);
    const res = this.$events.value.filter(e => e.id === id)[0];
    console.log(res);
    return res;
  }
}
