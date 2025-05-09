import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoandingComponent } from './loanding.component';

describe('LoandingComponent', () => {
  let component: LoandingComponent;
  let fixture: ComponentFixture<LoandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoandingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
