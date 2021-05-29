import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngulardialogComponent } from './angulardialog.component';

describe('AngulardialogComponent', () => {
  let component: AngulardialogComponent;
  let fixture: ComponentFixture<AngulardialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AngulardialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngulardialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
