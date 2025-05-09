import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMuduleComponent } from './create-mudule.component';

describe('CreateMuduleComponent', () => {
  let component: CreateMuduleComponent;
  let fixture: ComponentFixture<CreateMuduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateMuduleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMuduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
