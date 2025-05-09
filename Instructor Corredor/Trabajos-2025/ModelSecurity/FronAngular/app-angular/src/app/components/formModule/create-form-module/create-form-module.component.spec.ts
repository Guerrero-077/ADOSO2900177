import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFormModuleComponent } from './create-form-module.component';

describe('CreateFormModuleComponent', () => {
  let component: CreateFormModuleComponent;
  let fixture: ComponentFixture<CreateFormModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateFormModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateFormModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
