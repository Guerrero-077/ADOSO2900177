import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDeleteRolFormPermissionComponent } from './list-delete-rol-form-permission.component';

describe('ListDeleteRolFormPermissionComponent', () => {
  let component: ListDeleteRolFormPermissionComponent;
  let fixture: ComponentFixture<ListDeleteRolFormPermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListDeleteRolFormPermissionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDeleteRolFormPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
