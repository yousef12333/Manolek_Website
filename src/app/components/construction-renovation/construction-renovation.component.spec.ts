import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionRenovationComponent } from './construction-renovation.component';

describe('ConstructionRenovationComponent', () => {
  let component: ConstructionRenovationComponent;
  let fixture: ComponentFixture<ConstructionRenovationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConstructionRenovationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstructionRenovationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
