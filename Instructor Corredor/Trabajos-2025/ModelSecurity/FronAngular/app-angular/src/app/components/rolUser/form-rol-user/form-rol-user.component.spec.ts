import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRolUserComponent } from './form-rol-user.component';

describe('FormRolUserComponent', () => {
  let component: FormRolUserComponent;
  let fixture: ComponentFixture<FormRolUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormRolUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRolUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
