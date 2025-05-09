import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommetsCreateComponent } from './commets-create.component';

describe('CommetsCreateComponent', () => {
  let component: CommetsCreateComponent;
  let fixture: ComponentFixture<CommetsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommetsCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommetsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
