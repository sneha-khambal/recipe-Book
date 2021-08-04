import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecStartComponent } from './rec-start.component';

describe('RecStartComponent', () => {
  let component: RecStartComponent;
  let fixture: ComponentFixture<RecStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
