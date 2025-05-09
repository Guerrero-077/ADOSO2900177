import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDeleteFormModuleComponent } from './list-delete-form-module.component';

describe('ListDeleteFormModuleComponent', () => {
  let component: ListDeleteFormModuleComponent;
  let fixture: ComponentFixture<ListDeleteFormModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListDeleteFormModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDeleteFormModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
