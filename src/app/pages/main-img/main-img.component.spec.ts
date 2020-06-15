import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainImgComponent } from './main-img.component';

describe('MainImgComponent', () => {
  let component: MainImgComponent;
  let fixture: ComponentFixture<MainImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
