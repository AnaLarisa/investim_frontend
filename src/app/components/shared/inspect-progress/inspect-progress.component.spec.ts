import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectProgressComponent } from './inspect-progress.component';

describe('InspectProgressComponent', () => {
  let component: InspectProgressComponent;
  let fixture: ComponentFixture<InspectProgressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InspectProgressComponent]
    });
    fixture = TestBed.createComponent(InspectProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
