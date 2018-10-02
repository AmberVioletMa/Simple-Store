import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomNavSimpleComponent } from './bottom-nav-simple.component';

describe('BottomNavSimpleComponent', () => {
  let component: BottomNavSimpleComponent;
  let fixture: ComponentFixture<BottomNavSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomNavSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomNavSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
