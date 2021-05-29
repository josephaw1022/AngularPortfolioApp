import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressdialogComponent } from './expressdialog.component';

describe('ExpressdialogComponent', () => {
  let component: ExpressdialogComponent;
  let fixture: ComponentFixture<ExpressdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpressdialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpressdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
