import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

// import { any } from '../basic-dialog.component';

@Component({
  selector: 'app-basic-dialog-overview',
  templateUrl: './basic-dialog-overview.component.html',
  styleUrls: ['./basic-dialog-overview.component.scss']
})
export class BasicDialogOverviewComponent{

  constructor(
    public dialogRef: MatDialogRef<BasicDialogOverviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
