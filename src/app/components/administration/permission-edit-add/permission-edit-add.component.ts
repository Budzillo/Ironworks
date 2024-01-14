import { Component, Input, OnInit } from '@angular/core';
import { Permission } from '../../../models/permission.model';
import { AdministrationService } from '../../../services/administration.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-permission-edit-add',
  templateUrl: './permission-edit-add.component.html',
  styleUrl: './permission-edit-add.component.scss'
})
export class PermissionEditAddComponent{
  @Input() permission:Permission = new Permission();
  constructor(private administrationService:AdministrationService,private dialogRef: MatDialogRef<PermissionEditAddComponent>){

  }
  public savePermission(){
    this.administrationService.savePermission(this.permission).subscribe(result => {
      if(result){
        this.dialogRef.close(true);
      }
      else console.error("Błąd podczas zapisu uprawnienia");
    });
  }
  public cancel(){
    this.dialogRef.close(false);
  }
}
