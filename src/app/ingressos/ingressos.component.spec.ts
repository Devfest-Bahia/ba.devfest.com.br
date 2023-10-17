import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngressosComponent } from './ingressos.component';

describe('IngressosComponent', () => {
  let component: IngressosComponent;
  let fixture: ComponentFixture<IngressosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngressosComponent]
    });
    fixture = TestBed.createComponent(IngressosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
