import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingTask } from './data-binding-task';

describe('DataBindingTask', () => {
  let component: DataBindingTask;
  let fixture: ComponentFixture<DataBindingTask>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataBindingTask]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBindingTask);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
