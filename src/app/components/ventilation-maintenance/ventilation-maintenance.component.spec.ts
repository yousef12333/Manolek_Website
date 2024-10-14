import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentilationMaintenanceComponent } from './ventilation-maintenance.component';

describe('VentilationMaintenanceComponent', () => {
  let component: VentilationMaintenanceComponent;
  let fixture: ComponentFixture<VentilationMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentilationMaintenanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentilationMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
