import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDeletePermissionComponent } from './list-delete-permission.component';

describe('ListDeletePermissionComponent', () => {
  let component: ListDeletePermissionComponent;
  let fixture: ComponentFixture<ListDeletePermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListDeletePermissionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDeletePermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
