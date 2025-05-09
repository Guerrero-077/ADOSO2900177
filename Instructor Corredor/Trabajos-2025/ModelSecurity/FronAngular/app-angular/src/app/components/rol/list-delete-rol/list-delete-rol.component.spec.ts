import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDeleteRolComponent } from './list-delete-rol.component';

describe('ListDeleteRolComponent', () => {
  let component: ListDeleteRolComponent;
  let fixture: ComponentFixture<ListDeleteRolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListDeleteRolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDeleteRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
