import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsCreateComponent } from './albums-create.component';

describe('AlbumsCreateComponent', () => {
  let component: AlbumsCreateComponent;
  let fixture: ComponentFixture<AlbumsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumsCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
