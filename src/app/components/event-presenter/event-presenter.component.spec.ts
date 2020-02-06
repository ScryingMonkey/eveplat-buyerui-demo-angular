import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPresenterComponent } from './event-presenter.component';

describe('EventPresenterComponent', () => {
  let component: EventPresenterComponent;
  let fixture: ComponentFixture<EventPresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventPresenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
