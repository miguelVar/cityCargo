import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ETransporteComponent } from './e-transporte.component';

describe('ETransporteComponent', () => {
  let component: ETransporteComponent;
  let fixture: ComponentFixture<ETransporteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ETransporteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ETransporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
