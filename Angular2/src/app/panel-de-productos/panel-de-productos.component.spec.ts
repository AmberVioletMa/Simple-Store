import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelDeProductosComponent } from './panel-de-productos.component';

describe('PanelDeProductosComponent', () => {
  let component: PanelDeProductosComponent;
  let fixture: ComponentFixture<PanelDeProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelDeProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelDeProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
