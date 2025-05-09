import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommetsComponent } from './commets.component';

describe('CommetsComponent', () => {
  let component: CommetsComponent;
  let fixture: ComponentFixture<CommetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
