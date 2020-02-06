import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-flipcard",
  template: `
    <div class="cb-FlipCard">
      <div class="cb-FlipCard-inner">
        <div class="cb-FlipCard-front cb-FlipCard-summary">{{ title }}</div>

        <div class="cb-FlipCard-back cb-FlipCard-detail">
          <div class="cb-FlipCard-header">{{ title }}</div>
          <div class="cb-FlipCard-content">{{ description }}</div>
          <div class="cb-FlipCard-link-container">
            <a [routerLink]="linkurl" class="cb-FlipCard-link">
              {{ linklabel }}</a
            >
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["./flipcard.component.css"]
})
export class FlipcardComponent implements OnInit {
  @Input() title = "DT";
  @Input() description = "DD";
  @Input() linklabel: string = null;
  @Input() linkurl: string = null;

  constructor() {}

  ngOnInit() {}
}
