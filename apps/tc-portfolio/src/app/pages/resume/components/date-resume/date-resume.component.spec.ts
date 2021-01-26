import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateResumeComponent } from './date-resume.component';

describe('DateResumeComponent', () => {
  let component: DateResumeComponent;
  let fixture: ComponentFixture<DateResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateResumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
