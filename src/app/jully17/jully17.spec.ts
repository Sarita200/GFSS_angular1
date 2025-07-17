import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jully17 } from './jully17';

describe('Jully17', () => {
  let component: Jully17;
  let fixture: ComponentFixture<Jully17>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Jully17]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jully17);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
