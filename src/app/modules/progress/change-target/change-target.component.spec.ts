import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeTargetComponent } from './change-target.component';

describe('ChangeTargetComponent', () => {
  let component: ChangeTargetComponent;
  let fixture: ComponentFixture<ChangeTargetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeTargetComponent]
    });
    fixture = TestBed.createComponent(ChangeTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
