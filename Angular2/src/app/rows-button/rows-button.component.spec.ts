import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowsButtonComponent } from './rows-button.component';

describe('RowsButtonComponent', () => {
  let component: RowsButtonComponent;
  let fixture: ComponentFixture<RowsButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowsButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
