import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMuduleComponent } from './list-mudule.component';

describe('ListMuduleComponent', () => {
  let component: ListMuduleComponent;
  let fixture: ComponentFixture<ListMuduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListMuduleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMuduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
