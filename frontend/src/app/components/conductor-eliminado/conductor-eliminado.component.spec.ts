import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConductorEliminadoComponent } from './conductor-eliminado.component';

describe('ConductorEliminadoComponent', () => {
  let component: ConductorEliminadoComponent;
  let fixture: ComponentFixture<ConductorEliminadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConductorEliminadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConductorEliminadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
