import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactdialogComponent } from './reactdialog.component';

describe('ReactdialogComponent', () => {
  let component: ReactdialogComponent;
  let fixture: ComponentFixture<ReactdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReactdialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
