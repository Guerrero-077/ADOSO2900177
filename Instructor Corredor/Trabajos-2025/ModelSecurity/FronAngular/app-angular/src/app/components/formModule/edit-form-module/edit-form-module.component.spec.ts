import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFormModuleComponent } from './edit-form-module.component';

describe('EditFormModuleComponent', () => {
  let component: EditFormModuleComponent;
  let fixture: ComponentFixture<EditFormModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditFormModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditFormModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
