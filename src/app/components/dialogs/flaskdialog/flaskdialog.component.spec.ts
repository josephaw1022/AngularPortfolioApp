import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlaskdialogComponent } from './flaskdialog.component';

describe('FlaskdialogComponent', () => {
  let component: FlaskdialogComponent;
  let fixture: ComponentFixture<FlaskdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlaskdialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlaskdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
