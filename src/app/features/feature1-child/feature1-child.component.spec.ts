import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature1ChildComponent } from './feature1-child.component';

describe('Feature1ChildComponent', () => {
  let component: Feature1ChildComponent;
  let fixture: ComponentFixture<Feature1ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Feature1ChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Feature1ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
