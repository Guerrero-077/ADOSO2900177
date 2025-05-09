import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsEditComponent } from './albums-edit.component';

describe('AlbumsEditComponent', () => {
  let component: AlbumsEditComponent;
  let fixture: ComponentFixture<AlbumsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumsEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
