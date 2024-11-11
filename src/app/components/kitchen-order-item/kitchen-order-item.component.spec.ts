import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenOrderItemComponent } from './kitchen-order-item.component';

describe('KitchenOrderItemComponent', () => {
  let component: KitchenOrderItemComponent;
  let fixture: ComponentFixture<KitchenOrderItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KitchenOrderItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KitchenOrderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
