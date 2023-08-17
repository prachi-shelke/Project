import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDetailComponent } from './profile-details.component';

describe('ProfileDetailsComponent', () => {
  let component: ProfileDetailComponent;
  let fixture: ComponentFixture<ProfileDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileDetailComponent]
    });
    fixture = TestBed.createComponent(ProfileDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
