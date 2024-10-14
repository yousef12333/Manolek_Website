import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanitaryComponent } from './sanitary.component';

describe('SanitaryComponent', () => {
  let component: SanitaryComponent;
  let fixture: ComponentFixture<SanitaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SanitaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SanitaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
