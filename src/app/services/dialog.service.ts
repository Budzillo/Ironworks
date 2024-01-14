import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Observable } from "rxjs";
import { DialogYesNoComponent } from "../components/dialog/dialog-yes-no/dialog-yes-no.component";
import { DialogInformationComponent } from "../components/dialog/dialog-information/dialog-information.component";

@Injectable({
    providedIn : 'root'
})
export class DialogService{
    constructor(private dialog:MatDialog){

    }
    openYesNoDialog(title:string = "Potwierdź",text:string = "Czy na pewno chcesz to zrobić?",yesText:string = "Tak",noText:string = "Nie",width:string = '350px',height = '200px') : Observable<boolean>{
        const dialogRef = this.dialog.open(DialogYesNoComponent,{
            width: width,
            height: height
          })
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.text = text;
        dialogRef.componentInstance.yesText = yesText;
        dialogRef.componentInstance.noText = noText;
        return dialogRef.afterClosed();
    }
    openInformationDialog(title:string,text:string,okText:string,width:string = '250px',height = '150px') : Observable<boolean>{
        const dialogRef = this.dialog.open(DialogInformationComponent,{
            width:width,
            height:height,
        });
        dialogRef.componentInstance.okText = okText;
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.text = text;
        return dialogRef.afterClosed();
    }
}