import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPermissionComponent } from './form-permission.component';

describe('FormPermissionComponent', () => {
  let component: FormPermissionComponent;
  let fixture: ComponentFixture<FormPermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPermissionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
