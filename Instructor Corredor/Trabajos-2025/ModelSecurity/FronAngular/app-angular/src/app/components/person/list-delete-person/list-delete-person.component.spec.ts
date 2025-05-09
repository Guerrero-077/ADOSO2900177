import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDeletePersonComponent } from './list-delete-person.component';

describe('ListDeletePersonComponent', () => {
  let component: ListDeletePersonComponent;
  let fixture: ComponentFixture<ListDeletePersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListDeletePersonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDeletePersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
