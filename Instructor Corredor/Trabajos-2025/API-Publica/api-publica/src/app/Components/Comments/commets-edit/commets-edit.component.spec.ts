import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommetsEditComponent } from './commets-edit.component';

describe('CommetsEditComponent', () => {
  let component: CommetsEditComponent;
  let fixture: ComponentFixture<CommetsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommetsEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommetsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
