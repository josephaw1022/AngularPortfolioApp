import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DjangodialogComponent } from './djangodialog.component';

describe('DjangodialogComponent', () => {
  let component: DjangodialogComponent;
  let fixture: ComponentFixture<DjangodialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DjangodialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DjangodialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
