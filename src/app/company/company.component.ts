import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../service/company.service';
import { Company } from '../model/company';
import { MatDialog } from '../../../node_modules/@angular/material';
import { CompanyCreateDialogComponent } from '../company-create-dialog/company-create-dialog.component';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  companyList : Company[];
  displayedColumns: string[] = ['name', 'phone', 'email', 'otherDetails'];

  constructor(private companyService: CompanyService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getCompanies();
  }
  getCompanies() {
    this.companyService.getAllCompanies().subscribe(data => {
      console.log(data);
      this.companyList = data;
    });
  }
  addDialog() {
    const dialogRef = this.dialog.open(CompanyCreateDialogComponent, {
      width: '450px'
    })
    dialogRef.afterClosed().subscribe(result => {
      if(result === "save"){
        console.log("recalling the getCompanies");
        this.getCompanies();
      }
    });

  }
  testfun(){
    console.log("Hello")
  }
}
