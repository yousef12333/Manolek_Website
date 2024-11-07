import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CergaComponent } from './cerga.component';

describe('CergaComponent', () => {
  let component: CergaComponent;
  let fixture: ComponentFixture<CergaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CergaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CergaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
