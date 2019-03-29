import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculoEliminadoComponent } from './vehiculo-eliminado.component';

describe('VehiculoEliminadoComponent', () => {
  let component: VehiculoEliminadoComponent;
  let fixture: ComponentFixture<VehiculoEliminadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculoEliminadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoEliminadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
