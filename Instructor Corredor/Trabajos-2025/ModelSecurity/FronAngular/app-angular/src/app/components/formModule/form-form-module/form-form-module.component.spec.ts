import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFormModuleComponent } from './form-form-module.component';

describe('FormFormModuleComponent', () => {
  let component: FormFormModuleComponent;
  let fixture: ComponentFixture<FormFormModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFormModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormFormModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
