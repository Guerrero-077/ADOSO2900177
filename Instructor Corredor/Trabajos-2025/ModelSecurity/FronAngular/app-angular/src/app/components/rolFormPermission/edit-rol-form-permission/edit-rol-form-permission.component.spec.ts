import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRolFormPermissionComponent } from './edit-rol-form-permission.component';

describe('EditRolFormPermissionComponent', () => {
  let component: EditRolFormPermissionComponent;
  let fixture: ComponentFixture<EditRolFormPermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditRolFormPermissionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditRolFormPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
