import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionPerfilComponent } from './informacion-perfil.component';

describe('InformacionPerfilComponent', () => {
  let component: InformacionPerfilComponent;
  let fixture: ComponentFixture<InformacionPerfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformacionPerfilComponent]
    });
    fixture = TestBed.createComponent(InformacionPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
