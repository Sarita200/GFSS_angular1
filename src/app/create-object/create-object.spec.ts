import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateObject } from './create-object';

describe('CreateObject', () => {
  let component: CreateObject;
  let fixture: ComponentFixture<CreateObject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateObject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateObject);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
