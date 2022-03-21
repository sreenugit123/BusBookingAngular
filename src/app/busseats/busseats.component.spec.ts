import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusseatsComponent } from './busseats.component';

describe('BusseatsComponent', () => {
  let component: BusseatsComponent;
  let fixture: ComponentFixture<BusseatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusseatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusseatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
