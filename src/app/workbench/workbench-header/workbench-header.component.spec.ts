import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkbenchHeaderComponent } from './workbench-header.component';

describe('WorkbenchHeaderComponent', () => {
  let component: WorkbenchHeaderComponent;
  let fixture: ComponentFixture<WorkbenchHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkbenchHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkbenchHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
