import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResortActivitiesComponent } from './resort-activities.component';

describe('ResortActivitiesComponent', () => {
  let component: ResortActivitiesComponent;
  let fixture: ComponentFixture<ResortActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResortActivitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResortActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
