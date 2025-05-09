import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFormModuleComponent } from './list-form-module.component';

describe('ListFormModuleComponent', () => {
  let component: ListFormModuleComponent;
  let fixture: ComponentFixture<ListFormModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListFormModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFormModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
