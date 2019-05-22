import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatoEntradaPage } from './plato-entrada.page';

describe('PlatoEntradaPage', () => {
  let component: PlatoEntradaPage;
  let fixture: ComponentFixture<PlatoEntradaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatoEntradaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatoEntradaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
