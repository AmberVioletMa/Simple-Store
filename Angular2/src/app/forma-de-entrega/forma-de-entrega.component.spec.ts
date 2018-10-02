import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaDeEntregaComponent } from './forma-de-entrega.component';

describe('FormaDeEntregaComponent', () => {
  let component: FormaDeEntregaComponent;
  let fixture: ComponentFixture<FormaDeEntregaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormaDeEntregaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormaDeEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
