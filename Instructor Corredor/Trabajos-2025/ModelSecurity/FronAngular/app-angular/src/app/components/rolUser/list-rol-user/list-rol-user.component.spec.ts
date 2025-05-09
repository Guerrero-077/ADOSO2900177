import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRolUserComponent } from './list-rol-user.component';

describe('ListRolUserComponent', () => {
  let component: ListRolUserComponent;
  let fixture: ComponentFixture<ListRolUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListRolUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRolUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
