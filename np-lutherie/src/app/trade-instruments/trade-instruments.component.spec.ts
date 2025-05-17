import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeInstrumentsComponent } from './trade-instruments.component';

describe('TradeInstrumentsComponent', () => {
  let component: TradeInstrumentsComponent;
  let fixture: ComponentFixture<TradeInstrumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradeInstrumentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TradeInstrumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
