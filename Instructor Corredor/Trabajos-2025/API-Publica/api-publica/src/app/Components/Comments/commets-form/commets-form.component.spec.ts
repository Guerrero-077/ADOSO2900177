import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommetsFormComponent } from './commets-form.component';

describe('CommetsFormComponent', () => {
  let component: CommetsFormComponent;
  let fixture: ComponentFixture<CommetsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommetsFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommetsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
