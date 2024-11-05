import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaMotoboyComponent } from './tela-motoboy.component';

describe('TelaMotoboyComponent', () => {
  let component: TelaMotoboyComponent;
  let fixture: ComponentFixture<TelaMotoboyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaMotoboyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaMotoboyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
