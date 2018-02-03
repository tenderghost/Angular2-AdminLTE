import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkbenchLeftSideComponent } from './workbench-left-side.component';

describe('StarterLeftSideComponent', () => {
  let component: WorkbenchLeftSideComponent;
  let fixture: ComponentFixture<WorkbenchLeftSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkbenchLeftSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkbenchLeftSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
