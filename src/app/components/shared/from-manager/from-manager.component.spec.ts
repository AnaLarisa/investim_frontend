import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromManagerComponent } from './from-manager.component';

describe('FromManagerComponent', () => {
  let component: FromManagerComponent;
  let fixture: ComponentFixture<FromManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FromManagerComponent]
    });
    fixture = TestBed.createComponent(FromManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
