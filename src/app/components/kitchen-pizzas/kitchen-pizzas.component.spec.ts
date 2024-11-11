import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenPizzasComponent } from './kitchen-pizzas.component';

describe('KitchenPizzasComponent', () => {
  let component: KitchenPizzasComponent;
  let fixture: ComponentFixture<KitchenPizzasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KitchenPizzasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KitchenPizzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
