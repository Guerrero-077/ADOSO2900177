import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRolFormPermissionComponent } from './form-rol-form-permission.component';

describe('FormRolFormPermissionComponent', () => {
  let component: FormRolFormPermissionComponent;
  let fixture: ComponentFixture<FormRolFormPermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormRolFormPermissionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRolFormPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
