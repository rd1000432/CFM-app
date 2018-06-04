import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingsFormComponent } from './ratings-form.component';

describe('RatingsFormComponent', () => {
  let component: RatingsFormComponent;
  let fixture: ComponentFixture<RatingsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
