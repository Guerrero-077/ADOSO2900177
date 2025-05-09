import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFomsComponent } from './form-foms.component';

describe('FormFomsComponent', () => {
  let component: FormFomsComponent;
  let fixture: ComponentFixture<FormFomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFomsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormFomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
