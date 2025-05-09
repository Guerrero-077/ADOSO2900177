import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDeleteUserComponent } from './list-delete-user.component';

describe('ListDeleteUserComponent', () => {
  let component: ListDeleteUserComponent;
  let fixture: ComponentFixture<ListDeleteUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListDeleteUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDeleteUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
