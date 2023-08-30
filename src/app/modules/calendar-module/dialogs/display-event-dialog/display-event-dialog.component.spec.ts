import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayEventDialogComponent } from './display-event-dialog.component';

describe('DisplayEventDialogComponent', () => {
  let component: DisplayEventDialogComponent;
  let fixture: ComponentFixture<DisplayEventDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayEventDialogComponent]
    });
    fixture = TestBed.createComponent(DisplayEventDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
