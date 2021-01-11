import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerTypeComponent } from './computer-type.component';

describe('ComputerTypeComponent', () => {
  let component: ComputerTypeComponent;
  let fixture: ComponentFixture<ComputerTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComputerTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
