import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLightProfilComponent } from './my-light-profil.component';

describe('MyLightProfilComponent', () => {
  let component: MyLightProfilComponent;
  let fixture: ComponentFixture<MyLightProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLightProfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLightProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
