import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchingProfilesComponent } from './searching-profiles.component';

describe('SearchingProfilesComponent', () => {
  let component: SearchingProfilesComponent;
  let fixture: ComponentFixture<SearchingProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchingProfilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchingProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
