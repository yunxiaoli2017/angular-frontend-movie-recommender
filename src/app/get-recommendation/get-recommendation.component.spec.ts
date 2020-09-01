import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRecommendationComponent } from './get-recommendation.component';

describe('GetRecommendationComponent', () => {
  let component: GetRecommendationComponent;
  let fixture: ComponentFixture<GetRecommendationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetRecommendationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
