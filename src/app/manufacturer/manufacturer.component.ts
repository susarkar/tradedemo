import { Component, OnInit, ViewChild } from '@angular/core';
import { Manufacturer } from '../model/manufacturer';
import { ManufacturerService } from '../service/manufacturer.service';
import { Router } from '../../../node_modules/@angular/router';
import { MatDialog } from '../../../node_modules/@angular/material';
import { ManufacturerDialogComponent } from '../manufacturer-dialog/manufacturer-dialog.component';

@Component({
  selector: 'app-manufacturer',
  templateUrl: './manufacturer.component.html',
  styleUrls: ['./manufacturer.component.css']
})
export class ManufacturerComponent implements OnInit {
  selectedTab = 0;
  manufacturers: Manufacturer[] = [];
  model : Manufacturer = new Manufacturer();
  isAddVisible:boolean;

  
  constructor(
    private dialog: MatDialog,

    private router : Router,
    private manuService: ManufacturerService
  ) { }

  ngOnInit() {
    this.loadData();
    this.selectedTab=0;
  }

  loadData(searchString ?:string) {
    if(searchString ){
      this.manuService.searchManufacturers(searchString ).subscribe(data => this.manufacturers = data);

    }else{
      this.manuService.getTenManufacturers().subscribe(data => this.manufacturers = data);

    }

  }

  saveManufacturer(){
    console.log(this.model);
    this.manuService.addManufacturer(this.model).subscribe();
    this.loadData();
  }
  rowClicked(row ? : Manufacturer){
    console.log("row clicked for Editing " +  row.name);
    this.selectedTab=1;
   // this.router.navigate()
  }

  showAddForm(){
    this.isAddVisible = true;
  }
  searchManu(searchString : string){
    console.log("Search String " + searchString);
    this.loadData(searchString);
  }

  openDialog(row ? : Manufacturer) {
    const dialogRef = this.dialog.open(ManufacturerDialogComponent, {
      width: '300px',
      data: row ? row : new Manufacturer()
    })
    dialogRef.afterClosed().subscribe(result => {
      if(result === "saved"){
        console.log("recalling the getCompanies");
        this.loadData();
      }

    });
  }
/*   editItem(row: Manufacturer): void {
    this.manuList.forEach(item => item.editable=false);
    row.editable=true;
    console.log(row);
  }
  deleteItem(row:Manufacturer){
    console.log(row);
  }
  addSave() {
    this.manuService.addManufacturer(this.model).subscribe(data => this.manuList.splice(0, 0, data));
    console.log(this.manuList);
    this.addButtonShow = true;
  }
  editSave(row : Manufacturer){
    this.manuService.editManufacturer(row).subscribe();
  }
  cancel(row? : Manufacturer) {
    this.refreshData();
    this.addButtonShow = true;
  } */
}
