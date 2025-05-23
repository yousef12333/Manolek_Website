import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBannerComponent } from './page-banner.component';

describe('PageBannerComponent', () => {
  let component: PageBannerComponent;
  let fixture: ComponentFixture<PageBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
