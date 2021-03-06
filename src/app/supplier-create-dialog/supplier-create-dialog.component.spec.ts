import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierCreateDialogComponent } from './supplier-create-dialog.component';

describe('SupplierCreateDialogComponent', () => {
  let component: SupplierCreateDialogComponent;
  let fixture: ComponentFixture<SupplierCreateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierCreateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
