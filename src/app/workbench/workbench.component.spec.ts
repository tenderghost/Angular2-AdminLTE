import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';

import { WorkbenchComponent } from './workbench.component';
import { WorkbenchHeaderComponent } from './workbench-header/workbench-header.component';
import { StarterLeftSideComponent } from './starter-left-side/starter-left-side.component';
import { StarterContentComponent } from './starter-content/starter-content.component';
import { WorkbenchFooterComponent } from './workbench-footer/workbench-footer.component';
import { StarterControlSidebarComponent } from './starter-control-sidebar/starter-control-sidebar.component';

describe('WorkbenchComponent', () => {
  let component: WorkbenchComponent;
  let fixture: ComponentFixture<WorkbenchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        RouterTestingModule 
      ],
      declarations: [ 
        WorkbenchComponent,
        WorkbenchHeaderComponent,
        StarterLeftSideComponent,
        StarterContentComponent,
        WorkbenchFooterComponent,
        StarterControlSidebarComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkbenchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(WorkbenchComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Page Header');
  }));
});
