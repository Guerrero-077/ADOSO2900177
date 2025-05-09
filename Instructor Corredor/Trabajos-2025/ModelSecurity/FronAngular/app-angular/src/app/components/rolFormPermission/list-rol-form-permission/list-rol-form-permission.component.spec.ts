import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRolFormPermissionComponent } from './list-rol-form-permission.component';

describe('ListRolFormPermissionComponent', () => {
  let component: ListRolFormPermissionComponent;
  let fixture: ComponentFixture<ListRolFormPermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListRolFormPermissionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRolFormPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
