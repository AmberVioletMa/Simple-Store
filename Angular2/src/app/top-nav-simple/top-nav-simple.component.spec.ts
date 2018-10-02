import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavSimpleComponent } from './top-nav-simple.component';

describe('TopNavSimpleComponent', () => {
  let component: TopNavSimpleComponent;
  let fixture: ComponentFixture<TopNavSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopNavSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNavSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
