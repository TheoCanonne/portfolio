import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInfosComponent } from './my-infos.component';

describe('MyInfosComponent', () => {
  let component: MyInfosComponent;
  let fixture: ComponentFixture<MyInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
