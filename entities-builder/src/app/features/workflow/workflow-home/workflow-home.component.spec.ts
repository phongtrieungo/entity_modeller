import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowHomeComponent } from './workflow-home.component';

describe('WorkflowHomeComponent', () => {
  let component: WorkflowHomeComponent;
  let fixture: ComponentFixture<WorkflowHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkflowHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
