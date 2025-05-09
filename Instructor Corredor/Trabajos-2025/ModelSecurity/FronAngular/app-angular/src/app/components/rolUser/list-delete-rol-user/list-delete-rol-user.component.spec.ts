import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDeleteRolUserComponent } from './list-delete-rol-user.component';

describe('ListDeleteRolUserComponent', () => {
  let component: ListDeleteRolUserComponent;
  let fixture: ComponentFixture<ListDeleteRolUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListDeleteRolUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDeleteRolUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
