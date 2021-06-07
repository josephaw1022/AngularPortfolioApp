import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UofscComponent } from './uofsc.component';

describe('UofscComponent', () => {
  let component: UofscComponent;
  let fixture: ComponentFixture<UofscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UofscComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UofscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
