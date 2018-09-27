import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { POCreateDialogComponent } from './pocreate-dialog.component';

describe('POCreateDialogComponent', () => {
  let component: POCreateDialogComponent;
  let fixture: ComponentFixture<POCreateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ POCreateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(POCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
