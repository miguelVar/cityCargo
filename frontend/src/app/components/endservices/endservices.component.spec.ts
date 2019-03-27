import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndservicesComponent } from './endservices.component';

describe('EndservicesComponent', () => {
  let component: EndservicesComponent;
  let fixture: ComponentFixture<EndservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
