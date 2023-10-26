import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizacaoComponent } from './organizacao.component';

describe('OrganizacaoComponent', () => {
  let component: OrganizacaoComponent;
  let fixture: ComponentFixture<OrganizacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizacaoComponent]
    });
    fixture = TestBed.createComponent(OrganizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
