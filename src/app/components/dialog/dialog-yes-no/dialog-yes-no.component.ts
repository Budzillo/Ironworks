import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-yes-no',
  templateUrl: './dialog-yes-no.component.html',
  styleUrl: './dialog-yes-no.component.scss'
})
export class DialogYesNoComponent {
  @Input() title : string = "Potwierdź";
  @Input() text : string = "Czy na pewno chcesz to zrobić?";
  @Input() yesText : string = "Tak";
  @Input() noText : string = "Nie";
  constructor(private dialogRef: MatDialogRef<DialogYesNoComponent>){

  }
  yes():void{
    this.dialogRef.close(true);
  }
  no() : void{
    this.dialogRef.close(false);
  }
}
