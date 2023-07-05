import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudenEditComponent } from './studen-edit.component';

describe('StudenEditComponent', () => {
  let component: StudenEditComponent;
  let fixture: ComponentFixture<StudenEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudenEditComponent]
    });
    fixture = TestBed.createComponent(StudenEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
