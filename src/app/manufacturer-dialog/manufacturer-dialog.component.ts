import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '../../../node_modules/@angular/material';
import { Manufacturer } from '../model/manufacturer';
import { ManufacturerService } from '../service/manufacturer.service';

@Component({
  selector: 'app-manufacturer-dialog',
  templateUrl: './manufacturer-dialog.component.html',
  styleUrls: ['./manufacturer-dialog.component.css']
})
export class ManufacturerDialogComponent implements OnInit {

  model : Manufacturer = new Manufacturer();
  constructor(
    private manuService : ManufacturerService,
    public dialogRef: MatDialogRef<ManufacturerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
 
  ) { }

  ngOnInit() {
    
    this.model = this.data;
  }

  save() {
    this.manuService.addManufacturer(this.model).subscribe();
    this.dialogRef.close("saved");
  }

  cancel() {
    this.dialogRef.close("Cancel");

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
