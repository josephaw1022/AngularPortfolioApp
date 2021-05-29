import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VuedialogComponent } from './vuedialog.component';

describe('VuedialogComponent', () => {
  let component: VuedialogComponent;
  let fixture: ComponentFixture<VuedialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VuedialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VuedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
