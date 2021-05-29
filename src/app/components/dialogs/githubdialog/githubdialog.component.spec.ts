import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubdialogComponent } from './githubdialog.component';

describe('GithubdialogComponent', () => {
  let component: GithubdialogComponent;
  let fixture: ComponentFixture<GithubdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GithubdialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
