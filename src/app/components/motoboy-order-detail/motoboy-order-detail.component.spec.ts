import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoboyOrderDetailComponent } from './motoboy-order-detail.component';

describe('MotoboyOrderDetailComponent', () => {
  let component: MotoboyOrderDetailComponent;
  let fixture: ComponentFixture<MotoboyOrderDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotoboyOrderDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotoboyOrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
