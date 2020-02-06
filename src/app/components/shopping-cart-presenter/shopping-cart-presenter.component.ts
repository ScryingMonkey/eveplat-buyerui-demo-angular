import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-shopping-cart-presenter",
  template: `
    <div class="app-shopping-cart-presenter">
      Shopping Cart Presenter

      <button mat-raised-button color="accent">Click Me</button>
      <!-- <app-main-nav></app-main-nav> -->
      <!-- <app-data-table></app-data-table> -->
    </div>
  `,
  styleUrls: ["./shopping-cart-presenter.component.css"]
})
export class ShoppingCartPresenterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
