import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayTask } from './array-task';

describe('ArrayTask', () => {
  let component: ArrayTask;
  let fixture: ComponentFixture<ArrayTask>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrayTask]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayTask);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
