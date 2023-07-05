import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudenDetailsComponent } from './studen-details.component';

describe('StudenDetailsComponent', () => {
  let component: StudenDetailsComponent;
  let fixture: ComponentFixture<StudenDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudenDetailsComponent]
    });
    fixture = TestBed.createComponent(StudenDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
