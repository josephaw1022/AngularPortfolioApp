import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodedialogComponent } from './nodedialog.component';

describe('NodedialogComponent', () => {
  let component: NodedialogComponent;
  let fixture: ComponentFixture<NodedialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NodedialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
