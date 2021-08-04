import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecEditingComponent } from './rec-editing.component';

describe('RecEditingComponent', () => {
  let component: RecEditingComponent;
  let fixture: ComponentFixture<RecEditingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecEditingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
