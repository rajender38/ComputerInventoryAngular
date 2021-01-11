import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComputerTypeComponent } from './edit-computer-type.component';

describe('EditComputerTypeComponent', () => {
  let component: EditComputerTypeComponent;
  let fixture: ComponentFixture<EditComputerTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditComputerTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComputerTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
