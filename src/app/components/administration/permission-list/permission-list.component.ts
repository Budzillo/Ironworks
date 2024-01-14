import { Component, OnInit } from '@angular/core';
import { Permission } from '../../../models/permission.model';
import { AdministrationService } from '../../../services/administration.service';
import { MatDialog } from '@angular/material/dialog';
import { PermissionEditAddComponent } from '../permission-edit-add/permission-edit-add.component';

@Component({
  selector: 'app-permission-list',
  templateUrl: './permission-list.component.html',
  styleUrl: './permission-list.component.scss'
})
export class PermissionListComponent implements OnInit{
  public permissions:Permission[]=[];
  displayedColumns: string[] = 
  [
    'name',
    'edit',
    'delete',
  ];
  constructor(private administrationService:AdministrationService,private dialogEditAdd:MatDialog){

  }
  ngOnInit(): void {
    this.getPermissions();
  }
  public getPermissions() : void{
    this.administrationService.getPermissions().subscribe(result => {this.permissions = result});
  }
  public deletePermission(permissionId:number) : void{
    this.administrationService.deletePermission(permissionId).subscribe(result => {
      if(result) this.getPermissions();
      else console.error("Błąd podczas usuwania uprawnienia");
    })
  }
  public insertPermission() : void{
    const dialogRef = this.dialogEditAdd.open(PermissionEditAddComponent,{
      width: '300px',
      height: '180px'
    }).afterClosed().subscribe(result => {
      if(result)
        this.getPermissions();
    });;
  }
  public updatePermission(permission:Permission) : void{
    const dialogRef = this.dialogEditAdd.open(PermissionEditAddComponent,{
      width: '300px',
      height: '180px'        
    });
    let permissionToEdit:Permission = JSON.parse(JSON.stringify(permission));
    dialogRef.componentInstance.permission = permissionToEdit;
    dialogRef.afterClosed().subscribe(result => {
      if(result)
        this.getPermissions();
    });;
  }
}
