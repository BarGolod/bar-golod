import { Component, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  isOpen = false;
  dialogData: any = {
    title: '',
    subtitle: '',
    content: '',
  };

  // Inject the MAT_DIALOG_DATA token to receive data
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.dialogData = data;
  }

  openDialog() {
    this.isOpen = true;
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
