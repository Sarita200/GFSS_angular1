import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFor15Jully } from './ng-for15-jully';

describe('NgFor15Jully', () => {
  let component: NgFor15Jully;
  let fixture: ComponentFixture<NgFor15Jully>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgFor15Jully]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgFor15Jully);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
