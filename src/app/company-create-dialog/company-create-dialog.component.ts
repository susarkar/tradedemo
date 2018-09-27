import { Component, OnInit, Inject } from '@angular/core';
import { Company } from '../model/company';
import { CompanyService } from '../service/company.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '../../../node_modules/@angular/material';

@Component({
  selector: 'app-company-create-dialog',
  templateUrl: './company-create-dialog.component.html',
  styleUrls: ['./company-create-dialog.component.css']
})
export class CompanyCreateDialogComponent implements OnInit {
model : Company = new Company();
  constructor(private companyService : CompanyService,
    public dialogRef: MatDialogRef<CompanyCreateDialogComponent>,
   // @Inject(MAT_DIALOG_DATA) public data: {company : Company}

  ) { }

  ngOnInit() {
  }
  save() {
    this.companyService.addCompany(this.model).subscribe();
    this.dialogRef.close("save");
  }

  cancel() {
    this.dialogRef.close("Cancel");

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
