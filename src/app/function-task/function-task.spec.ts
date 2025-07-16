import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionTask } from './function-task';

describe('FunctionTask', () => {
  let component: FunctionTask;
  let fixture: ComponentFixture<FunctionTask>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunctionTask]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunctionTask);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
