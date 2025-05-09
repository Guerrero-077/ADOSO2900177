import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRolUserComponent } from './create-rol-user.component';

describe('CreateRolUserComponent', () => {
  let component: CreateRolUserComponent;
  let fixture: ComponentFixture<CreateRolUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateRolUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRolUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
