import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallaxContactComponent } from './parallax-contact.component';

describe('ParallaxContactComponent', () => {
  let component: ParallaxContactComponent;
  let fixture: ComponentFixture<ParallaxContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParallaxContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParallaxContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
