/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PgClientesComponent } from './PgClientes.component';

describe('PgClientesComponent', () => {
  let component: PgClientesComponent;
  let fixture: ComponentFixture<PgClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
