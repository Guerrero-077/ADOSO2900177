import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDeleteModuleComponent } from './list-delete-module.component';

describe('ListDeleteModuleComponent', () => {
  let component: ListDeleteModuleComponent;
  let fixture: ComponentFixture<ListDeleteModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListDeleteModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDeleteModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
