import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoboyOrderCardComponent } from './motoboy-order-card.component';

describe('MotoboyOrderCardComponent', () => {
  let component: MotoboyOrderCardComponent;
  let fixture: ComponentFixture<MotoboyOrderCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotoboyOrderCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotoboyOrderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
