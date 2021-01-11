import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComputerListComponent } from './edit-computer-list.component';

describe('EditComputerListComponent', () => {
  let component: EditComputerListComponent;
  let fixture: ComponentFixture<EditComputerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditComputerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComputerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
