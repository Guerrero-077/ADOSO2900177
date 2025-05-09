import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDeletesComponent } from './list-deletes.component';

describe('ListDeletesComponent', () => {
  let component: ListDeletesComponent;
  let fixture: ComponentFixture<ListDeletesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListDeletesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDeletesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
