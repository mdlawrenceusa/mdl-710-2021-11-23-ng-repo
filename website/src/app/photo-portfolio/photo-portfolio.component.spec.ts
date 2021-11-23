import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoPortfolioComponent } from './photo-portfolio.component';

describe('PhotoPortfolioComponent', () => {
  let component: PhotoPortfolioComponent;
  let fixture: ComponentFixture<PhotoPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
