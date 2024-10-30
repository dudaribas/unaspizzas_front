import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaDetailComponent } from './pizza-detail.component';

describe('PizzaDetailComponent', () => {
  let component: PizzaDetailComponent;
  let fixture: ComponentFixture<PizzaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PizzaDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
