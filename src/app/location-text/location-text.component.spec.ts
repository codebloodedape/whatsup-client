import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationTextComponent } from './location-text.component';

describe('LocationTextComponent', () => {
  let component: LocationTextComponent;
  let fixture: ComponentFixture<LocationTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
