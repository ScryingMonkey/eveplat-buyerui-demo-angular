import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartPresenterComponent } from './shopping-cart-presenter.component';

describe('ShoppingCartPresenterComponent', () => {
  let component: ShoppingCartPresenterComponent;
  let fixture: ComponentFixture<ShoppingCartPresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCartPresenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
