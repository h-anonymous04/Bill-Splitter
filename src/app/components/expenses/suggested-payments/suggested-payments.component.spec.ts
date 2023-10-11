import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedPaymentsComponent } from './suggested-payments.component';

describe('SuggestedPaymentsComponent', () => {
  let component: SuggestedPaymentsComponent;
  let fixture: ComponentFixture<SuggestedPaymentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuggestedPaymentsComponent]
    });
    fixture = TestBed.createComponent(SuggestedPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
