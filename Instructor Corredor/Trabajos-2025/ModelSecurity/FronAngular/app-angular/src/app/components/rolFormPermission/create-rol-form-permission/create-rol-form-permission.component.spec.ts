import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRolFormPermissionComponent } from './create-rol-form-permission.component';

describe('CreateRolFormPermissionComponent', () => {
  let component: CreateRolFormPermissionComponent;
  let fixture: ComponentFixture<CreateRolFormPermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateRolFormPermissionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRolFormPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
