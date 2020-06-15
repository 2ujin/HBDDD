import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HbdComponent } from './hbd.component';

describe('HbdComponent', () => {
  let component: HbdComponent;
  let fixture: ComponentFixture<HbdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HbdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HbdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
