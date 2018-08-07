import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeployHomeComponent } from './deploy-home.component';

describe('DeployHomeComponent', () => {
  let component: DeployHomeComponent;
  let fixture: ComponentFixture<DeployHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeployHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeployHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
