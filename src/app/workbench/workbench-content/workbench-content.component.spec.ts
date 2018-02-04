import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkbenchContentComponent } from './workbench-content.component';

describe('WorkbenchContentComponent', () => {
  let component: WorkbenchContentComponent;
  let fixture: ComponentFixture<WorkbenchContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkbenchContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkbenchContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
