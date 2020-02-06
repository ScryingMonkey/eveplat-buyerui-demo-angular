import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatButtonModule } from "@angular/material";
import { DataTableComponent } from "./components/data-table/data-table.component";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MainNavComponent } from "./components/main-nav/main-nav.component";
import { LayoutModule } from "@angular/cdk/layout";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { FlipcardComponent } from "./components/flipcard/flipcard.component";
import { EventPresenterComponent } from "./components/event-presenter/event-presenter.component";
import { EventScreenComponent } from "./components/event-presenter/event-screen.component";
import { EventDetailComponent } from "./components/event-presenter/event-detail.component";
import { ShoppingCartPresenterComponent } from "./components/shopping-cart-presenter/shopping-cart-presenter.component";

const routes = [
  { path: "events", component: EventPresenterComponent, pathMatch: "full" },
  {
    path: "event",
    children: [
      { path: "", redirectTo: "/events", pathMatch: "full" },
      { path: ":eventId", component: EventScreenComponent }
    ]
  },
  { path: "cart", component: ShoppingCartPresenterComponent },
  { path: "**", redirectTo: "/events" }
];

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    MainNavComponent,
    FlipcardComponent,
    EventPresenterComponent,
    EventScreenComponent,
    EventDetailComponent,
    ShoppingCartPresenterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
