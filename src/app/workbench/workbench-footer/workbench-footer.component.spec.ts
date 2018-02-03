import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkbenchFooterComponent } from './workbench-footer.component';

describe('WorkbenchFooterComponent', () => {
  let component: WorkbenchFooterComponent;
  let fixture: ComponentFixture<WorkbenchFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkbenchFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkbenchFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
