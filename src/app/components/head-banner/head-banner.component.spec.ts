import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadBannerComponent } from './head-banner.component';

describe('SliderComponent', () => {
  let component: HeadBannerComponent;
  let fixture: ComponentFixture<HeadBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadBannerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeadBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
