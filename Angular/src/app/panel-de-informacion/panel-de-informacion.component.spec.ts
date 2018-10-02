import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelDeInformacionComponent } from './panel-de-informacion.component';

describe('PanelDeInformacionComponent', () => {
  let component: PanelDeInformacionComponent;
  let fixture: ComponentFixture<PanelDeInformacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelDeInformacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelDeInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
